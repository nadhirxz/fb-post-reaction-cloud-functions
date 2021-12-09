import * as functions from 'firebase-functions';
import { Body } from './types';

export const ssr = functions.runWith({ memory: '256MB' }).https.onRequest(async (req, res) => {
	const data = [].concat(req.body);
	if (data.some(e => !Body.test(e))) {
		res.status(400).send();
		return;
	}

	res.status(200).send();
});
