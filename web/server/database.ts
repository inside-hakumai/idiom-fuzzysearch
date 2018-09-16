require('dotenv').config();
import {Client} from 'pg';

interface IdiomEntity {
  name: string;
  yomi: string;
}

class IdiomDB {
  client: Client|null;
  idioms: IdiomEntity[];

  constructor() {
    this.client = null;
    this.idioms = [];
  }

  // todo リトライ処理，もうちょっとうまく書けないか
  async connect(retry_count=10, interval_ms=5000) {

    for (let i=0; i<retry_count; i++) {
      try {
        this.client = new Client();
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
      console.log(`Fetched ` + res.rows.length + " idiom entries.");
    }
  }

  async disconnect() {
    if (this.client !== null) {
      await this.client.end();
      this.client = null;
    }
  }

}

const sleep = (msec:number) => new Promise(resolve => setTimeout(resolve, msec));

export default new IdiomDB();
