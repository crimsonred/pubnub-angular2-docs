pubnub.publish({
  message: {such: 'Hello from the PubNub Angular2 SDK!'},
  channel: 'my_channel',
  storeInHistory: true,
  ttl: 10
},
function (status, response) {
  if (status.error) {
    console.log(status);
  } else {
    console.log("message Published w/ timetoken", response.timetoken);
  }
});
