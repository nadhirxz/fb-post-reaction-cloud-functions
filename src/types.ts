import * as t from 'ts-interface-checker';

const BodyType = t.iface([], {
	username: 'string',
	password: 'string',
	post: 'string',
	reaction: t.opt(t.union(t.lit('like'), t.lit('love'), t.lit('care'), t.lit('haha'), t.lit('wow'), t.lit('sad'), t.lit('angry'))),
});

export const { BodyType: Body } = t.createCheckers({ BodyType });
