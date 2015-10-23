# dash-emitter

[![NPM](https://nodei.co/npm/dash-emitter.png?downloads=true)](https://nodei.co/npm/dash-emitter/)

An event emitter for interaction with [Amazon Dash](www.amazon.com/oc/dash-button) buttons, inspired by [Ted Benson](https://twitter.com/edwardbenson)'s [blog post](https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8).

Thanks to [Scott Sevener](https://twitter.com/ssevener) for kindly sending me some buttons from the US.

## Examples

1: Listen on interface 'wlp3s0' for arp requets sent by '10:ae:60:75:cb:1e' or '74:c2:46:bd:3c:d4'. When requests are recived log them to the console:
```
var listener = require('dash-emitter');
var session = listener.startListening({
	interface: 'wlp3s0',
	macAddresses: [
		'10:ae:60:75:cb:1e',
		'74:c2:46:bd:3c:d4',
	]
});

session.on('10:ae:60:75:cb:1e', function() {
	console.log('Button One');
});

session.on('74:c2:46:bd:3c:d4', function() {
	console.log('Button Two');
});
```

2: Listen on interface 'wlp3s0' for arp requets sent by '10:ae:60:75:cb:1e'. When a request is recived log it to the console and stop listening:

```
var listener = require('dash-emitter');
var session = listener.startListening({
	interface: 'wlp3s0',
	macAddresses: [
		'10:ae:60:75:cb:1e',
	]
});

session.on('10:ae:60:75:cb:1e', function() {
	console.log('Button One');
    session.close();
});
```
