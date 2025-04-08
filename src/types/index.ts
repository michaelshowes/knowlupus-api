export type Quiz = {
	id: string;
	name: string;
	lupus_quizzes_id: string;
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
	lupus_quizzes_id: string;
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
} & (
	| {
			type: 'multiple_choice';
			answers: Answer[];
	  }
	| {
			type: 'true_false';
			is_true: boolean;
	  }
	| {
			type: 'range';
			maximum: number;
			minimum: number;
			step_amount: number;
			answer_value: number;
			suffix: string;
	  }
);

type Answer = {
	id: string;
	answer: string;
	is_correct?: boolean;
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
