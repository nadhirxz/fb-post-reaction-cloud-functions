import * as functions from 'firebase-functions';
import { Body, BodyType } from './types';
import { Reaction } from 'fb-post-reaction';

export const ssr = functions.runWith({ memory: '256MB' }).https.onRequest(async (req, res) => {
	const data: BodyType[] = [].concat(req.body);
	if (data.some(e => !Body.test(e))) {
		res.status(400).send();
		return;
	}

	let promises: Promise<{ success: boolean; error?: string }>[] = [];

	data.forEach(async element => promises.push(new Reaction(element.username, element.password, element.post).react(element.reaction)));

	res.status(200).send((await Promise.all(promises)).map((e, i) => ({ ...e, username: data[i] })));
});
