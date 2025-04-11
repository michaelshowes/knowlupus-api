import { Quiz } from '@/types';

export default [
	{
		id: '2',
		name: 'Know Lupus',
		lupus_quizzes_id: 2,
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
				lupus_quizzes_id: 1,
				name: 'Level One',
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
						image: {
							url: '/images/questions/1.png',
							alt: 'Lupus'
						},
						question:
							'Lupus is an unpredictable autoimmune disease that can affect the:',
						answer_card_text:
							"The ability of lupus to affect a person's heart, kidney, lungs, or skin, are part of what makes it so challenging to understand, diagnose and treat.",
						answers: [
							{
								id: '20447',
								answer: 'Heart & Lungs',
								is_correct: 0
							},
							{
								id: '20461',
								answer: 'Skin',
								is_correct: 0
							},
							{
								id: '20462',
								answer: 'Kidneys',
								is_correct: 0
							},
							{
								id: '20463',
								answer: 'All of These',
								is_correct: 1
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
						image: {
							url: '/images/questions/2.png',
							alt: 'Lupus'
						},
						question: 'Scientists believe lupus is triggered by:',
						answer_card_text:
							"Researchers believe lupus may be triggered by a combination of genetics, hormones, and environmental factors. Ticks, carb-containing diets and unprotected sex don't cause lupus. The exact origin continues to be studied but remains a mystery.",
						answers: [
							{
								id: '20464',
								answer: 'A Tick Bite',
								is_correct: 0
							},
							{
								id: '20465',
								answer: 'Unprotected Sex',
								is_correct: 0
							},
							{
								id: '20466',
								answer: 'A High-Carb Diet',
								is_correct: 0
							},
							{
								id: '20467',
								answer: 'None of These',
								is_correct: 1
							}
						]
					},
					{
						id: '20472',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'range',
						image: {
							url: '/images/questions/3.png',
							alt: 'Lupus'
						},
						question:
							'Women make up what percentage of the total population with lupus?',
						answer_card_text:
							'Though men and children can also develop lupus, 90% of people with lupus are women, and they most commonly develop symptoms between the ages of 15 and 44.',
						minimum: 0,
						maximum: 100,
						step_amount: 10,
						answer_value: 90,
						suffix: '%'
					},
					{
						id: '20473',
						category: {
							name: 'The Symptoms',
							slug: 'symptoms'
						},
						type: 'multiple_choice',
						image: {
							url: '/images/questions/4.png',
							alt: 'Lupus'
						},
						question: 'Lupus is sometimes called:',
						answer_card_text:
							'Lupus is known as the cruel mystery because it is hidden from view, has a range of symptoms, hits out of nowhere, and has no known cause and no known cure. Lupus is debilitating, destructive and can be fatal.',
						answers: [
							{
								id: '20474',
								answer: 'The Silent Killer',
								is_correct: 0
							},
							{
								id: '20475',
								answer: 'Daylight Disease',
								is_correct: 0
							},
							{
								id: '20476',
								answer: 'The Butterfly Syndrome',
								is_correct: 0
							},
							{
								id: '20477',
								answer: 'The Cruel Mystery',
								is_correct: 1
							}
						]
					},
					{
						id: '20478',
						category: {
							name: 'The Symptoms',
							slug: 'symptoms'
						},
						type: 'range',
						image: {
							url: '/images/questions/5.png',
							alt: 'Lupus'
						},
						question:
							'On average, how many years does it take to be diagnosed after a person starts experiencing the symptoms of lupus?',
						answer_card_text:
							'Based on recent data, from the onset of symptoms, it takes an average of 6 years for a person to be diagnosed with lupus.',
						minimum: 0,
						maximum: 10,
						step_amount: 1,
						answer_value: 6
					},
					{
						id: '20479',
						category: {
							name: 'The Symptoms',
							slug: 'symptoms'
						},
						type: 'multiple_choice',
						image: {
							url: '/images/questions/6.png',
							alt: 'Lupus'
						},
						question: 'What is lupus-related kidney disease called?',
						answer_card_text:
							'Lupus-related kidney disease is called lupus nephritis and is one of the most serious complications of lupus. It occurs when the immune system mistakenly attacks the kidneys, leading to inflammation, possible organ damage and even kidney failure requiring dialysis or a kidney transplant.',
						answers: [
							{
								id: '20480',
								answer: 'Inflammatory Kidney',
								is_correct: 0
							},
							{
								id: '20481',
								answer: 'Lupus Nephritis',
								is_correct: 1
							},
							{
								id: '20482',
								answer: 'Kidney Stones',
								is_correct: 0
							},
							{
								id: '20483',
								answer: 'Kidney Nephrology',
								is_correct: 0
							}
						]
					},
					{
						id: '20484',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'multiple_choice',
						image: {
							url: '/images/questions/7.png',
							alt: 'Lupus'
						},
						question:
							'On average, what is the annual cost of lupus, including expenses related to treatment and lost hours of work?',
						answer_card_text:
							"A lupus patient's average medical and loss of productivity costs are roughly $50,000 per year and can be much higher if there are kidney complications.",
						answers: [
							{
								id: '20485',
								answer: '$1k',
								is_correct: 0
							},
							{
								id: '20486',
								answer: '$10k',
								is_correct: 0
							},
							{
								id: '20487',
								answer: '$25k',
								is_correct: 0
							},
							{
								id: '20488',
								answer: '$50k',
								is_correct: 1
							}
						]
					},
					{
						id: '20489',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'multiple_choice',
						image: {
							url: '/images/questions/8.png',
							alt: 'Lupus'
						},
						question:
							'Inflammation of the kidneys can be one of the more serious complications of lupus.',
						answer_card_text:
							'Up to 60% of adults with lupus - and more than 50% of children with lupus - ultimately experience some form of kidney complication.',
						answers: [
							{
								id: '20490',
								answer: '10%',
								is_correct: 0
							},
							{
								id: '20491',
								answer: '35%',
								is_correct: 0
							},
							{
								id: '20492',
								answer: '60%',
								is_correct: 1
							},
							{
								id: '20493',
								answer: '75%',
								is_correct: 0
							}
						]
					},
					{
						id: '20494',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/9.png',
							alt: 'Lupus'
						},
						question:
							'Chemotherapy drugs may be used to treat people with lupus.',
						answer_card_text:
							'In certain cases, chemotherapy drugs commonly used to treat cancer that suppress the immune system are used in lupus treatment.',
						is_true: true
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
			},
			{
				id: '2',
				lupus_quizzes_id: 2,
				name: 'Level Two',
				intro_title: 'Get Involved',
				intro_text:
					"<p>Pledge to Raise Awareness About Lupus All Year Long</p><p>May is Lupus Awareness Month and it's just the beginning of how you can MAKE LUPUS VISIBLE. Pledge to raise awareness all year long and we'll send you lots of great online resources and tools to get started.&nbsp;</p>",
				questions: [
					{
						id: '20495',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/10.png',
							alt: 'Lupus'
						},
						question: 'Lupus can be definitively diagnosed with a urine test.',
						answer_card_text:
							"To make a lupus diagnosis, doctors use a combination of information, including evaluation of a patient's current symptoms, laboratory test results, personal medical history, and family medical history.",
						is_true: false
					},
					{
						id: '20496',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/11.png',
							alt: 'Lupus'
						},
						question: 'Lupus is a form of arthritis.',
						answer_card_text:
							'Lupus is not a form of arthritis, but many people with lupus do suffer from joint and/or muscle pain.',
						is_true: false
					},
					{
						id: '20497',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/12.png',
							alt: 'Lupus'
						},
						question:
							'Going on a reduced carb diet - like a paleo or gluten-free diet - can cure lupus or cause it to go into remission.',
						answer_card_text:
							'No special diet has been found to cure lupus or cause it to go into remission.',
						is_true: false
					},
					{
						id: '20498',
						category: {
							name: 'The Symptoms',
							slug: 'symptoms'
						},
						type: 'multiple_choice',
						image: {
							url: '/images/questions/13.png',
							alt: 'Lupus'
						},
						question:
							'As many as two-thirds of people with lupus experience a sensitivity to:',
						answer_card_text:
							'Sensitivity to UV light (present in both sunlight and artificial light) affects as many as two thirds of individuals with lupus. This is known to cause fever, debilitating fatigue, joint pain, and rashes.',
						answers: [
							{
								id: '20499',
								answer: 'Wheat',
								is_correct: 0
							},
							{
								id: '20500',
								answer: 'Gluten',
								is_correct: 0
							},
							{
								id: '20501',
								answer: 'Milk',
								is_correct: 0
							},
							{
								id: '20502',
								answer: 'UV Light',
								is_correct: 1
							}
						]
					},
					{
						id: '20503',
						category: {
							name: 'The Symptoms',
							slug: 'symptoms'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/14.png',
							alt: 'Lupus'
						},
						question:
							'Factors that trigger a lupus flare, or intensified period of symptoms, include infection, ultraviolet light, stress, and some medications.',
						answer_card_text:
							'Additional triggers for lupus flares include the environment, genes, and factors that are still unknown.',
						is_true: true
					},
					{
						id: '20504',
						category: {
							name: 'The Symptoms',
							slug: 'symptoms'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/15.png',
							alt: 'Lupus'
						},
						question: 'During a flare, lupus may be contagious.',
						answer_card_text:
							'Lupus is never contagious. It cannot be "caught" or "passed on" to anyone, no matter what symptoms are showing.',
						is_true: false
					},
					{
						id: '20505',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/16.png',
							alt: 'Lupus'
						},
						question:
							'Some of the complications of lupus may include heart disease, strokes, seizures, infections, kidney disease and lung disease.',
						answer_card_text:
							'Lupus has been associated with increased rates of heart disease, seizure, infection and inflammation of the kidneys, lungs and other organs. Additionally, while lupus treatments have made great progress over the last several years, some medications used to manage the disease may also lead to complications.',
						is_true: true
					},
					{
						id: '20506',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'range',
						image: {
							url: '/images/questions/17.png',
							alt: 'Lupus'
						},
						question:
							'Having lupus makes you ____ times more likely than people without lupus to develop cardiovascular disease - a class of diseases that affect the heart and/or blood vessels.',
						answer_card_text:
							'Lupus patients are two to three times as likely to develop cardiovascular disease. Although mortality rates for lupus over the past 30 years have fallen, deaths due to lupus-related cardiovascular complications have remained about the same.',
						minimum: 0,
						maximum: 5,
						step_amount: 1,
						answer_value: 2.5
					},
					{
						id: '20507',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/18.png',
							alt: 'Lupus'
						},
						question:
							'The steroids used to treat people with lupus are the same ones that bodybuilders and some professional athletes have been known to use.',
						answer_card_text:
							'The steroids used to treat people with lupus are different. They are designed to reduce inflammation, as opposed to building muscle. However, these steroids can cause many side effects and long-term use can put people at risk for more serious health problems, like infections, eye problems, osteoporosis and more. Steroids can be an important part of a lupus treatment plan, and people with lupus should work with their care team to monitor their medication side effects and disease management.',
						is_true: false
					}
				],
				ctas: [
					{
						id: '20508',
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
						id: '20509',
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
			},
			{
				id: '3',
				lupus_quizzes_id: 3,
				name: 'Level Three',
				intro_title: 'Get Involved',
				intro_text:
					"<p>Pledge to Raise Awareness About Lupus All Year Long</p><p>May is Lupus Awareness Month and it's just the beginning of how you can MAKE LUPUS VISIBLE. Pledge to raise awareness all year long and we'll send you lots of great online resources and tools to get started.&nbsp;</p>",
				questions: [
					{
						id: '20510',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'range',
						image: {
							url: '/images/questions/19.png',
							alt: 'Lupus'
						},
						question:
							'Among those who are misdiagnosed, what is the average number of health care providers a person with lupus sees before receiving a correct diagnosis?',
						answer_card_text:
							'A study found that over half of those who were misdiagnosed saw four or more health care providers before receiving an accurate lupus diagnosis.',
						minimum: 0,
						maximum: 10,
						step_amount: 1,
						answer_value: 4
					},
					{
						id: '20511',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/20.png',
							alt: 'Lupus'
						},
						question:
							'The rate of lupus diagnosis for Black/African American women is 2-3 times higher than the rate of diagnosis for White women.',
						answer_card_text:
							'While lupus affects people of all races and ethnicities, Black/African American, Hispanic/Latina, Asian American, Pacific Islander, Native Hawaiian, and Native American women develop lupus two to three times more often than White women.',
						is_true: true
					},
					{
						id: '20512',
						category: {
							name: 'The Basics',
							slug: 'the-basics'
						},
						type: 'range',
						image: {
							url: '/images/questions/21.png',
							alt: 'Lupus'
						},
						question:
							'What percentage of people with lupus developed the disease as children?',
						answer_card_text:
							'Ten to twenty percent of people with lupus develop the disease as children, and for them lupus often affects more major organs and is more physically damaging than for those who develop lupus as adults.',
						minimum: 0,
						maximum: 50,
						step_amount: 10,
						answer_value: 15
					},
					{
						id: '20513',
						category: {
							name: 'The Symptoms',
							slug: 'symptoms'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/22.png',
							alt: 'Lupus'
						},
						question:
							'People with lupus are entitled to special equipment or actions at work, in order to ensure that they can continue working.',
						answer_card_text:
							'People with lupus have the right, under the Americans with Disabilities Act (ADA), to ask employers for "reasonable accommodations." These are defined as equipment, steps or processes that make it possible for individuals with health conditions to continue working.',
						is_true: true
					},
					{
						id: '20514',
						category: {
							name: 'The Symptoms',
							slug: 'symptoms'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/23.png',
							alt: 'Lupus'
						},
						question:
							'Women with lupus are more likely to have a bone fracture than women without lupus.',
						answer_card_text:
							'The exact reason that women with lupus have a higher rate of fractures is yet to be determined. However, researchers believe it may be due to a combination of factors including lack of vitamin D and side effects of some of the medications used to treat lupus.',
						is_true: true
					},
					{
						id: '20515',
						category: {
							name: 'The Symptoms',
							slug: 'symptoms'
						},
						type: 'true_false',
						image: {
							url: '/images/questions/24.png',
							alt: 'Lupus'
						},
						question: "Women with lupus can't have successful pregnancies.",
						answer_card_text:
							'Thanks to advancing technology and a better understanding of the disease, pregnancy outcomes have improved for women with lupus. Today, although they are still considered "high risk," many women with lupus can have successful pregnancies.',
						is_true: false
					},
					{
						id: '20516',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'range',
						image: {
							url: '/images/questions/25.png',
							alt: 'Lupus'
						},
						question:
							'On average, how many prescription medications do people with lupus take to manage all of their medical conditions?',
						answer_card_text:
							'On average, people with lupus take eight prescription medications to manage all of their medical conditions, including lupus.',
						minimum: 0,
						maximum: 10,
						step_amount: 1,
						answer_value: 8
					},
					{
						id: '20517',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'range',
						image: {
							url: '/images/questions/26.png',
							alt: 'Lupus'
						},
						question:
							'How many drugs have been developed specifically to treat lupus?',
						answer_card_text:
							"There have only been three treatments specifically developed to treat lupus or lupus nephritis, and these treatment options don't work for everybody. Many other medications are often used to help manage lupus symptoms, and finding a treatment plan can take months or years.",
						minimum: 0,
						maximum: 10,
						step_amount: 1,
						answer_value: 3
					},
					{
						id: '20518',
						category: {
							name: 'The Impact',
							slug: 'the-impact'
						},
						type: 'range',
						image: {
							url: '/images/questions/27.png',
							alt: 'Lupus'
						},
						question:
							'What percentage of people with lupus may have to stop working due to the effects of the disease?',
						answer_card_text:
							'One survey found that 55% of respondents reported a complete or partial loss of their income because they no longer are able to work full time due to complications of lupus.',
						minimum: 0,
						maximum: 100,
						step_amount: 5,
						answer_value: 55,
						suffix: '%'
					}
				],
				ctas: [
					{
						id: '20519',
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
						id: '20520',
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
	}
] as Quiz[];
