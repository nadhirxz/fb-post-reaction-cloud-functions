import * as t from 'ts-interface-checker';

export type BodyType = {
	username: string;
	password: string;
	post: string;
	reaction?: 'like' | 'love' | 'care' | 'haha' | 'wow' | 'sad' | 'angry';
};

const BodyInterface = t.iface([], {
	username: 'string',
	password: 'string',
	post: 'string',
	reaction: t.opt(t.union(t.lit('like'), t.lit('love'), t.lit('care'), t.lit('haha'), t.lit('wow'), t.lit('sad'), t.lit('angry'))),
});

export const { BodyType: Body } = t.createCheckers({ BodyType: BodyInterface });
