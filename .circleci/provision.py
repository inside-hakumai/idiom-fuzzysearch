# --*- coding: utf-8 -*-

import os
import json
from os.path import join, pardir
import psycopg2

from typing import List, Dict

FILE_DIR = os.path.dirname(os.path.realpath(__file__))

if __name__ == "__main__":
    DATABASE_URL = os.getenv("DATABASE_URL")

    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()

    cur.execute("DROP TABLE IF EXISTS idioms;")
    cur.execute("CREATE TABLE idioms ("
                "id   SERIAL PRIMARY KEY,"
                "name TEXT NOT NULL,"
                "yomi TEXT NOT NULL"
                ");")

    with open(join(FILE_DIR, pardir, "db", "idioms.json")) as f:
        idiom_list: List[Dict[str, str]] = json.load(f)

        for idiom in idiom_list:
            word = idiom["word"]
            yomi = idiom["yomi"]

            cur.execute("INSERT INTO idioms(name, yomi) VALUES(%s, %s);", (word, yomi))
            print("Idiom entry: {0}, {1}".format(word, yomi))

    conn.commit()
    cur.close()
    conn.close()
