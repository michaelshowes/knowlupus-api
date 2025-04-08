import { Quiz } from '@/types';

export default [
	{
		id: '2',
		name: 'Title',
		lupus_quizzes_id: '2',
		donate_button: {
			title: 'Test',
			uri: 'entity:node/5',
			url: '/terms-of-use',
			options: []
		},
		nav_links: {
			uri: 'entity:node/11',
			title: 'Test',
			options: [],
			url: '/living-with-lupus'
		},
		sponsors: [
			{
				id: '20449',
				image_media: {
					url: 'https://www.feature-knowlupus-pul6g7y-3766fnoancpni.us-4.platformsh.site/sites/default/files/media/images/Support%20Group%20General_1.jpg',
					alt: 'Support Group'
				},
				field_link: {
					uri: 'entity:node/11',
					title: '',
					options: [],
					url: '/living-with-lupus'
				}
			}
		],
		form_code: 'awefawef',
		levels: [
			{
				id: '1',
				lupus_quizzes_id: '1',
				name: 'Quiz Label',
				intro_title: 'Get Involved',
				intro_text:
					"<p>Pledge to Raise Awareness About Lupus All Year Long</p><p>May is Lupus Awareness Month and it's just the beginning of how you can MAKE LUPUS VISIBLE. Pledge to raise awareness all year long and we'll send you lots of great online resources and tools to get started.&nbsp;</p>",
				questions: [
					{
						id: '20448',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'multiple_choice',
						question:
							'Lupus is an unpredictable autoimmune disease that can affect the:',
						answers: [
							{
								id: '20447',
								answer: 'Heart & Lungs',
								is_correct: false
							},
							{
								id: '20461',
								answer: 'Skin',
								is_correct: false
							},
							{
								id: '20462',
								answer: 'Kidneys',
								is_correct: false
							},
							{
								id: '20463',
								answer: 'All of These',
								is_correct: true
							}
						]
					},
					{
						id: '20468',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'multiple_choice',
						question:
							'As many as two-thirds of people with lupus experience a sensitivity to: ',
						answers: [
							{
								id: '20464',
								answer: 'Wheat',
								is_correct: false
							},
							{
								id: '20465',
								answer: 'Gluten',
								is_correct: false
							},
							{
								id: '20466',
								answer: 'Milk',
								is_correct: false
							},
							{
								id: '20467',
								answer: 'UV Light',
								is_correct: true
							}
						]
					},
					{
						id: '20469',
						category: {
							name: 'Symptoms',
							slug: 'symptoms'
						},
						type: 'true_false',
						question:
							' Factors that trigger a lupus flare, or intensified period of symptoms, include infection, ultraviolet light, stress, and some medications.',
						is_true: true
					},
					{
						id: '20470',
						category: {
							name: 'Symptoms',
							slug: 'symptoms'
						},
						type: 'true_false',
						question: 'During a flare, lupus may be contagious',
						is_true: true
					},
					{
						id: '20472',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'range',
						question:
							'Women make up what percentage of the total population with lupus?',
						minimum: 0,
						maximum: 100,
						step_amount: 10,
						answer_value: 90,
						suffix: '%'
					}
				],
				ctas: [
					{
						id: '20446',
						title: 'Donate to Help End Lupus',
						text: 'Further your impact by donating today and improve the lives of those affected by lupus.',
						link: {
							title: 'Take the Pledge',
							uri: 'entity:node/8',
							url: '/about-us',
							options: []
						}
					},
					{
						id: '20471',
						title: 'Get Lupus Resources',
						text: 'Check out the National Resource Center on Lupus for trusted information to help you or your loved one understand, manage and cope with lupus.',
						link: {
							uri: 'entity:node/9',
							title: 'Link',
							options: [],
							url: '/chapters'
						}
					}
				]
			}
		]
	},
	{
		id: '4',
		name: 'Quiz Title',
		lupus_quizzes_id: '4',
		donate_button: {
			title: 'Test',
			uri: 'entity:node/13',
			url: '/get-involved',
			options: []
		},
		nav_links: {
			title: 'Test',
			uri: 'entity:node/11',
			url: '/living-with-lupus',
			options: []
		},
		sponsors: [
			{
				id: '20459',
				image_media: {
					url: 'https://www.feature-knowlupus-pul6g7y-3766fnoancpni.us-4.platformsh.site/sites/default/files/media/images/Support%20Group%20General_1.jpg',
					alt: 'Support Group '
				},
				field_link: {
					title: '',
					uri: 'entity:node/13',
					url: '/get-involved',
					options: []
				}
			},
			{
				id: '20460',
				image_media: {
					url: 'https://www.feature-knowlupus-pul6g7y-3766fnoancpni.us-4.platformsh.site/sites/default/files/media/images/Support%20Group%20Columbus.jpg',
					alt: 'Support Group '
				},
				field_link: {
					title: '',
					uri: 'https://google.com',
					url: 'https://google.com',
					options: []
				}
			}
		],
		form_code: 'awefawef',
		levels: [
			{
				id: '3',
				lupus_quizzes_id: '3',
				name: 'Label',
				intro_title: 'Test',
				intro_text: '<p>test</p>',
				questions: [
					{
						id: '20452',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'true_false',
						question: 'Is this true or false',
						is_true: true
					},
					{
						id: '20453',
						category: {
							name: 'Symptoms',
							slug: 'symptoms'
						},
						type: 'range',
						question: 'What percent of this thing is this',
						minimum: 1,
						maximum: 100,
						step_amount: 10,
						answer_value: 50,
						suffix: '%'
					},
					{
						id: '20458',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'multiple_choice',
						question: 'Question',
						answers: [
							{
								id: '20454',
								answer: 'Test',
								is_correct: false
							},
							{
								id: '20455',
								answer: 'test',
								is_correct: true
							},
							{
								id: '20456',
								answer: 'waef',
								is_correct: false
							},
							{
								id: '20457',
								answer: 'test',
								is_correct: false
							}
						]
					}
				],
				ctas: [
					{
						id: '20450',
						title: 'Test',
						text: 'Text',
						link: {
							title: 'Test',
							uri: 'entity:node/5',
							url: '/terms-of-use',
							options: []
						}
					},
					{
						id: '20451',
						text: 'Text',
						title: 'Test 2',
						link: {
							title: 'Test',
							uri: 'entity:node/22',
							url: '/about-us/media-relations',
							options: []
						}
					}
				]
			},
			{
				id: '1',
				lupus_quizzes_id: '1',
				name: 'Quiz Label',
				intro_title: 'Get Involved',
				intro_text:
					"<p>Pledge to Raise Awareness About Lupus All Year Long</p><p>May is Lupus Awareness Month and it's just the beginning of how you can MAKE LUPUS VISIBLE. Pledge to raise awareness all year long and we'll send you lots of great online resources and tools to get started.&nbsp;</p>",
				questions: [
					{
						id: '20448',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'multiple_choice',
						question:
							' Lupus is an unpredictable autoimmune disease that can affect the:',
						answers: [
							{
								id: '20447',
								answer: 'Heart & Lungs',
								is_correct: false
							},
							{
								id: '20461',
								answer: 'Skin',
								is_correct: false
							},
							{
								id: '20462',
								answer: 'Kidneys',
								is_correct: false
							},
							{
								id: '20463',
								answer: 'All of These',
								is_correct: true
							}
						]
					},
					{
						id: '20468',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'multiple_choice',
						question:
							'As many as two-thirds of people with lupus experience a sensitivity to:',
						answers: [
							{
								id: '20464',
								answer: 'Wheat',
								is_correct: false
							},
							{
								id: '20465',
								answer: 'Gluten',
								is_correct: false
							},
							{
								id: '20466',
								answer: 'Milk',
								is_correct: false
							},
							{
								id: '20467',
								answer: 'UV Light',
								is_correct: true
							}
						]
					},
					{
						id: '20469',
						category: {
							name: 'Symptoms',
							slug: 'symptoms'
						},
						type: 'true_false',
						question:
							' Factors that trigger a lupus flare, or intensified period of symptoms, include infection, ultraviolet light, stress, and some medications.',
						is_true: true
					},
					{
						id: '20470',
						category: {
							name: 'Symptoms',
							slug: 'symptoms'
						},
						type: 'true_false',
						question: 'During a flare, lupus may be contagious',
						is_true: true
					},
					{
						id: '20472',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'range',
						question:
							'Women make up what percentage of the total population with lupus?',
						minimum: 0,
						maximum: 100,
						step_amount: 10,
						answer_value: 90,
						suffix: '%'
					}
				],
				ctas: [
					{
						id: '20446',
						text: 'Further your impact by donating today and improve the lives of those affected by lupus. ',
						title: 'Donate to Help End Lupus ',
						link: {
							title: 'Take the Pledge',
							uri: 'entity:node/8',
							url: '/about-us',
							options: []
						}
					},
					{
						id: '20471',
						text: 'Check out the National Resource Center on Lupus for trusted information to help you or your loved one understand, manage and cope with lupus.',
						title: 'Get Lupus Resources',
						link: {
							title: 'Link',
							uri: 'entity:node/9',
							url: '/chapters',
							options: []
						}
					}
				]
			}
		]
	}
] as Quiz[];
