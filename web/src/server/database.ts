require('dotenv').config();
import {Client} from 'pg';
import * as fuzz from 'fuzzball';

interface IdiomEntity {
  id: number;
  name: string;
  yomi: string;
}

export interface ResultEntity extends IdiomEntity {
  score: number;
}

class IdiomDB {
  client: Client|null;
  idioms: IdiomEntity[];
  idiomStrings: string[];

  constructor() {
    this.client = null;
    this.idioms = [];
    this.idiomStrings = [];
  }

  // todo リトライ処理，もうちょっとうまく書けないか
  async connect(retry_count=10, interval_ms=5000) {

    for (let i=0; i<retry_count; i++) {
      try {
        this.client = new Client({
          connectionString: process.env.DATABASE_URL
        });
        await this.client.connect();
        console.log(`Connect with idiom server.`);
        return;
      } catch (err) {
        console.log(`Failed to connect with idiom server. Retrying after ${interval_ms} ms.`);
        await sleep(interval_ms);
      }
    }
    throw new Error('Failed to connect with idiom server.');
  }

  async fetchAllEntries() {
    if (this.client !== null) {
      const res = await this.client.query('SELECT * FROM idioms');
      this.idioms = res.rows;
      this.idiomStrings = res.rows.map(entry => entry.name);
      console.log(`Fetched ` + res.rows.length + " idiom entries.");
    }
  }

  async disconnect() {
    if (this.client !== null) {
      await this.client.end();
      this.client = null;
    }
  }

  fuzzySearch(queryString:string): ResultEntity[] {
    // [choice, score, index]
    let results:Array<[string, number, number]> = fuzz.extract(queryString, this.idiomStrings);
    let suggestion:Array<[string, number, number]> = results.filter(res => res[1]>0);

    let result:ResultEntity[] = [];
    for (let i=0; i<suggestion.length; i++) {
      const targetIndex = suggestion[i][2];
      const targetScore = suggestion[i][1];
      result.push({
        id:   this.idioms[targetIndex].id,
        name: this.idioms[targetIndex].name,
        yomi: this.idioms[targetIndex].yomi,
        score: targetScore
      });
    }
    return result;
  }

}

const sleep = (msec:number) => new Promise(resolve => setTimeout(resolve, msec));

export default new IdiomDB();
