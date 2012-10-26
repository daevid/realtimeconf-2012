#!/bin/bash

seaport 7000 &

echo seaport localhost:7000 show
echo curl -X POST localhost:\$PORT

node 250_worker.js &
node 410_web.js

