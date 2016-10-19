/**
 * LMGTFY, cause your too lazy to write the extra characters
 *
 * Written By: Matthew Knox
 * Date Written: 22/01/15
 */

exports.run = (api, event) => {
    if (!event.arguments_body || event.arguments_body.length === 0) {
		return api.sendMessage('You need to provide me with something to google.', event.thread_id);
	}
    api.sendUrl('http://lmgtfy.com/?q=' + encodeURIComponent(event.arguments_body), event.thread_id);
};
