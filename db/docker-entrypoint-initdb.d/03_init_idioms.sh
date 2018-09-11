#!/bin/bash
set -e

json_text=$(cat ../app/idioms.json)
len=$(echo ${json_text} | jq length)

insert_queries=""

for i in $( seq 0 $((${len} - 1)) ); do
   word=$(echo ${json_text} | jq -r .[$i].word)
   yomi=$(echo ${json_text} | jq -r .[$i].yomi)

   insert_queries+="INSERT INTO idioms(name, yomi) VALUES('${word}', '${yomi}');"
done

psql -v ON_ERROR_STOP=1 --username "admin" --dbname "ifs_db" -c "${insert_queries}"

echo "Inserted ${len} idiom entries."
