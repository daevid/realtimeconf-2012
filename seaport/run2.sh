#!/bin/bash

echo seaport localhost:7000 show
echo curl -X POST localhost:\$PORT

seaport 7000 &
node 500_worker.js 111 &
node 500_worker.js 333 &
node 500_worker.js 555 &
node 410_web.js
