import fetch from 'node-fetch'

const response = await fetch('http://solarpro.online:5000/getrawdata?gateway_id=WBEGTWYTEL01');

const body = await response.text();

console.log(body);

