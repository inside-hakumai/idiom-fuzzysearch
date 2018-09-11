#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "admin" --dbname "ifs_db" <<-EOSQL
CREATE TABLE idioms (
  id   SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  yomi TEXT NOT NULL
);
EOSQL
