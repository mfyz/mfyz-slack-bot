# Slack Bot

A simple interactive nodejs slack bot.


## Configure

Go to https://slack.com/apps/A0ZC8RE4T-mfyzsawesomebot?next_id=0, install and obtain access token and bot tokens.

Create .env file and place tokens here:

```
SLACK_ACCESS_TOKEN='...'
SLACK_BOT_TOKEN='...'
```


## Install

1) Create an app at: 

2) Create a bot account at: 

3) Deploy this web app to somewhere (like heroku)

4) Enable "Events API" with providing http://your-deployment-url/slack-events callback URL.

5) Subscribe to events like "message.im", "app_mention" in order to get notified of these events.


### Events handled with the current bot:

- app_mention
- message.im
- message.channel
