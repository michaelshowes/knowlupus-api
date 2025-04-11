export type Quiz = {
	id: string;
	name: string;
	lupus_quizzes_id: number;
	donate_button: Link;
	nav_links: Link;
	sponsors: Sponsor[];
	form_code: string;
	levels: Level[];
};

type Link = {
	uri: string;
	title: string;
	options: any[];
	url: string;
};

type Sponsor = {
	id: string;
	image_media: Image;
	field_link: Link;
};

type Level = {
	id: string;
	lupus_quizzes_id: number;
	name: string;
	intro_title: string;
	intro_text: string;
	questions: Question[];
	ctas: CTA[];
};

type Question = {
	id: string;
	category: {
		name: string;
		slug: string;
	};
	question: string;
	answer_card_text: string;
	image: Image;
} & (
	| {
			type: 'multiple_choice';
			answers: Answer[];
	  }
	| {
			type: 'true_false';
			is_true: 0 | 1;
	  }
	| {
			type: 'range';
			maximum: number;
			minimum: number;
			step_amount: number;
			answer_value: number;
			answer_text?: string;
			fuzzy?: boolean;
			suffix: string;
	  }
);

type Answer = {
	id: string;
	answer: string;
	is_correct?: 0 | 1;
};

type CTA = {
	id: string;
	title: string;
	text: string;
	link: Link;
};

type Image = {
	url: string;
	alt: string;
};
