

import fetch from 'node-fetch';

fetch('http://172.105.62.105:5000/getrawdata?gateway_id=WBEGTWYTEL01').then(resp => {
	return resp.json()
}).then((resp2) => {
	console.log(resp2)
	
})
