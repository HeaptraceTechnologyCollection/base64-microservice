const http = require('http')

const contentType = { false: 'binary', true: 'base64' }
const b64 = (content = '', decode = false) => Buffer.from(content, contentType[decode]).toString(contentType[!decode])
const en64 = (content = '', encode = false) => Buffer.from(content).toString('base64')

http.createServer((req, res) => {
  	let body = ''
  	req.on('data', chunk => { body += chunk.toString() })
  	req.on('end', () => {
    	if (!['/encode', '/decode'].includes(req.url)) {
      		res.writeHead(404) // the request is not valid
      		res.end()
    	}
    	let content = body;
	
	if (['/encode'].includes(req.url)) {
		try {
			let ret = en64(content, (req.url === '/encode'))
			res.writeHead(200, { 'Content-Length': Buffer.byteLength(ret), 'Content-Type': 'application/json' })
			res.end(ret)

	    	} catch (ignored) {
	     	 	res.writeHead(400) // the request is malformed
	      		res.end()
	    	}
	}else{
		let ret = b64(content, (req.url === '/decode'))
		res.writeHead(200, { 'Content-Length': Buffer.byteLength(ret), 'Content-Type': 'text/plain' })
		res.end(ret)
	}
  })
}).listen(process.env.PUBSUB_PORT || 5000)
