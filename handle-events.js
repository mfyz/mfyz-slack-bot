const { sendSlackMessage } = require('./slack-api')

const handleMessage = (payload) => {
	const channel = payload.event.channel
	let message = `Ok, I understand you <@${payload.event.user}>`

	if (payload.event.text.indexOf('bot') === -1) {
		// only reply when message includes "bot" word
		return
	}

	if (payload.event.text.indexOf('!') !== -1) {
		message += ' loud and clear.'
	}

	sendSlackMessage(channel, message)
}

module.exports = (payload) => {
	console.log('Received event: ', payload)

	if (!payload.event) {
		return
		console.log('Not a valid event!')
	}

	if (
		payload.event.bot_id // skip bot messages
		|| payload.event.subtype // message_changed
	) {
		console.log('Skipping!')
		return
	}

	switch (payload.event.type) {
		case 'app_mention':       handleMessage(payload);                 break;
		case 'message':           handleMessage(payload);                 break;
		case 'message.channel':   handleMessage(payload);                 break;
		case 'message.im':        handleMessage(payload);                 break;
		case 'message.mpim':      handleMessage(payload);                 break;
		default:                  console.log('Event not handled!');      break;
	}
}
