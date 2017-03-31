/**
 * LMGTFY, cause your too lazy to write the extra characters
 *
 * Written By: Matthew Knox
 * Date Written: 01/04/17
 */

exports.run = (api, event) => {
    const text = event.arguments_body;
	if (!text) {
		return api.sendMessage('You need to provide me with something to google.', event.thread_id);
	}
    api.sendUrl(`http://lmgtfy.com/?q=${encodeURIComponent(text)}`, event.thread_id);
};
