const querystring = require("querystring");

exports.handler = (event, context, callback) => {
	const res = {
		statusCode: null,
		body: ""
	}
	const params = querystring.parse(event.body);
	
	if (process.env.VERIFICATION_TOKEN !== params.token){
		res.statusCode = 401;
		res.body = "Unauthorized";
		callback(null, res);
	}
	res.statusCode = 200;
	res.body = params.text
	callback(null, res);
};
