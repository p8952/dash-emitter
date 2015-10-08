var util = require('util');
var pcap = require('pcap');
var EventEmitter = require('events');

var startListening = function(object) {
	var pcapSession = pcap.createSession(object.interface, 'arp');
	EventEmitter.call(this);

	pcapSession.on('packet', function (raw_packet) {
		var packet = pcap.decode.packet(raw_packet);
		var macAddress = packet.payload.shost.addr.map(function (chunk) {
			return chunk.toString(16);
		}).join(':');

		if (object.macAddresses.indexOf(macAddress) != -1) {
			this.emit(macAddress);
		}
	});
	return pcapSession;
};

util.inherits(startListening, EventEmitter);
exports.startListening = startListening;
