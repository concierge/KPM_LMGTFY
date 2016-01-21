/**
 * LMGTFY, cause your too lazy to write the extra characters
 *
 * Written By: Matthew Knox
 * Date Written: 22/01/15
 */
exports.match = function(text, commandPrefix) {
    return text.startsWith(commandPrefix + 'lmgtfy');
};

exports.help = function() {
    return [[this.commandPrefix + 'lmgtfy','Googles something for lazy people.', 'Only a lazy person can\'t google. Lazy people like you. Therefore this will do it for you.']];
};

exports.run = function(api, event) {
    var text = event.body.substring(api.commandPrefix.length + 7);
	if (!text || text === null || text.length === 0) {
		return api.sendMessage('You need to provide me with something to google.', event.thread_id);
	}
    api.sendUrl('http://lmgtfy.com/?q=' + encodeURIComponent(text), event.thread_id);
};
