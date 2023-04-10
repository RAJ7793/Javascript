// ./src/telecom.js


import http from 'http';

http.get('http://172.105.62.105:5000/getrawdata?gateway_id=WBEGTWYTEL01',resp => {
	resp.on("data",data => console.log(data))
})

