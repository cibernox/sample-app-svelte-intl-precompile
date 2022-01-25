import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

/** @type import('@sveltejs/kit').Handle */
export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.cookie ?? '');
	event.locals.userid = cookies.userid || uuid();

	// TODO: https://github.com/sveltejs/kit/issues/1046
	// if (event.request.query.has('_method')) {
	// 	event.request.method = event.request.query.get('_method').toUpperCase();
	// }

	const response = await resolve(event);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = `userid=${event.request.locals?.userid}; Path=/; HttpOnly`;
	}

	return response;
};

export function getSession(event) {
	console.log('request.headers["accept-language"]', event.request.headers["accept-language"])
  let acceptedLanguage = event.request.headers["accept-language"] && event.request.headers["accept-language"].split(',')[0];
	console.log('aracceptedLanguage', acceptedLanguage)
  return { acceptedLanguage };
}
