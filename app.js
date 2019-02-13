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
    	let content = JSON.parse(body)
	
	if (['/encode'].includes(req.url)) {
		try {
			let ret = en64(content.content, (req.url === '/encode'))
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify(ret))

	    	} catch (ignored) {
	     	 	res.writeHead(400) 
	      		res.end()
	    	}
	}else{
		let ret = b64(content.content, (req.url === '/decode'))
		res.writeHead(200, {'Content-Type': 'application/json' })
		res.end(JSON.stringify(ret))
	}
  })
}).listen(process.env.PUBSUB_PORT || 5000)