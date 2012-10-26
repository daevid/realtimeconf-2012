#!/bin/bash
node 030_server.js &
echo 'node 030_server.js &'
sleep 0.5

echo 'node 070_client.js'
node 070_client.js
