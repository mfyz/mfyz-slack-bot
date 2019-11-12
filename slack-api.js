const axios = require('axios')

const slackApiCall = (endpoint, type = 'POST', data = {}) => new Promise((resolve, reject) => {
	axios({
		method: type,
		url: `https://slack.com/api/${endpoint}`,
		headers: { 'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}` },
		data,
	})
		.then((result) => {
			// console.log('api call result', result.status, result.data)
			if (result.status === 200) {
				resolve(result.data)
			}
			else {
				reject(new Error('Http status is not 200'))
			}
		})
		.catch((err) => {
			// console.log('api call err', err)
			reject(err)
		})
})

const sendSlackMessage = (channel, message) => slackApiCall('chat.postMessage', 'POST', { channel, text: message })

const testSlackAuth = () => {
	slackApiCall('auth.test')
		.then((result) => {
			// console.log('auth test succcess', result)
		})
		.catch((err) => {
			// console.log('auth test err', err)
		})
}

// testSlackAuth()

module.exports = {
	slackApiCall,
	sendSlackMessage,
}