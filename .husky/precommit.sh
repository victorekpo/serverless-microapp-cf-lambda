#!/bin/sh
FILE="./client/wrangler.toml"
if [ -f "$FILE" ]; then
  sed -i -e 's/account_id = ".*"/account_id = "**********"/' $FILE
  echo "$FILE updated"
  git add -A
else
  echo "$FILE does not exist."
fi

