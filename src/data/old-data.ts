export const data = {
	levels: [
		{
			name: 'one',
			questions: [
				{
					categoryName: 'The Basics',
					categorySlug: 'basics',
					statement:
						'Lupus is an unpredictable autoimmune disease that can affect the:',
					response:
						'The ability of lupus to affect a person’s heart, kidney, lungs, or skin, are part of what makes it so challenging to understand, diagnose and treat.',
					answers: [
						{
							title: 'Heart & Lungs'
						},

						{
							title: 'Skin'
						},
						{
							title: 'Kidneys'
						},
						{
							title: 'All of these',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Basics',
					categorySlug: 'basics',
					statement: 'Scientists believe lupus is triggered by:',
					response:
						'Researchers believe lupus may be triggered by a combination of genetics, hormones, and environmental factors. Ticks, carb-containing diets and unprotected sex don’t  cause lupus. The exact origin remains a mystery.',
					answers: [
						{
							title: 'A tick bite'
						},
						{
							title: 'Unprotected sex'
						},
						{
							title: 'A high-carb diet'
						},
						{
							title: 'None of these',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Basics',
					categorySlug: 'basics',
					statement:
						'Women make up what percentage of the total population with lupus?',
					response:
						'Though men and children can also develop lupus, 90% of people with lupus are women, and they most commonly develop symptoms between the ages of 15 and 44.',
					range: {
						min: 10,
						max: 100,
						answer: 90,
						step: 10,
						suffix: '%'
					}
				},

				{
					categoryName: 'The Symptoms',
					categorySlug: 'symptoms',
					statement: 'Lupus is sometimes called:',
					response:
						'Lupus is known as “The Great Imitator” because its symptoms can closely resemble those of other diseases and can come and go over time, making diagnosis difficult.',

					answers: [
						{
							title: 'The Silent Killer'
						},
						{
							title: 'The Butterfly Syndrome'
						},
						{
							title: 'Daylight Disease'
						},
						{
							title: 'The Great Imitator',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Symptoms',
					categorySlug: 'symptoms',
					statement:
						'On average, how many years does it take to be diagnosed after a person starts experiencing the symptoms of lupus?',
					response:
						'Based on a recent study, from the onset of symptoms, it takes an average of 6 years for a person to be diagnosed with lupus.',
					range: {
						min: 1,
						max: 10,
						answer: 6,
						step: 1,
						suffix: ' years'
					}
				},

				{
					categoryName: 'The Symptoms',
					categorySlug: 'symptoms',
					statement:
						'Going on a reduced carb diet — like a paleo or gluten - free diet—can cure lupus, or cause it to go into remission.',
					response:
						'No special diet has been found to cure lupus or cause it to go into remission.',
					answers: [
						{
							title: 'True'
						},
						{
							title: 'False',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Impact',
					categorySlug: 'impact',
					statement:
						'On average, what is the annual cost of lupus, including expenses related to treatment and lost hours of work?',
					response:
						'A lupus patient’s average medical and loss of productivity costs are roughly $20,000 per year, and can increase to $63,000 per year if he or she has kidney complications.',
					answers: [
						{
							title: '$1K'
						},
						{
							title: '$5K'
						},
						{
							title: '$10K'
						},
						{
							title: '$20K',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Impact',
					categorySlug: 'impact',
					statement:
						'Inflammation of the kidneys can be one of the more serious complications of lupus. What percentage of adults with lupus experience this?',
					response:
						'Sixty percent of adults with lupus — and as many as 66% of children — ultimately experience some form of kidney complication.',
					answers: [
						{
							title: '10%'
						},
						{
							title: '35%'
						},
						{
							title: '60%',
							correct: true
						},
						{
							title: '75%'
						}
					]
				},

				{
					categoryName: 'The Impact',
					categorySlug: 'impact',
					statement:
						'Chemotherapy drugs may be used to treat people with lupus. ',
					response:
						'In certain cases, people with lupus are treated with cyclophosphamide, a chemotherapy drug commonly used to treat cancer that suppresses the immune system. ',
					answers: [
						{
							title: 'True',
							correct: true
						},
						{
							title: 'False'
						}
					]
				}
			]
		},

		{
			name: 'two',
			questions: [
				{
					categoryName: 'The Basics',
					categorySlug: 'basics',
					statement: 'Lupus can be definitively diagnosed with a urine test.',
					response:
						'To make a lupus diagnosis, doctors use a combination of information, including evaluation of a patient’s current symptoms, laboratory test results, personal medical history, and family medical history.',
					answers: [
						{
							title: 'True'
						},
						{
							title: 'False',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Basics',
					categorySlug: 'basics',
					statement: 'Lupus is a form of arthritis.',
					response:
						'Lupus is not a form of arthritis, but many people with lupus do suffer from joint and/or muscle pain.',
					answers: [
						{
							title: 'True'
						},
						{
							title: 'False',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Basics',
					categorySlug: 'basics',
					statement:
						'Worldwide, how many people are estimated to have a form of lupus?',
					response:
						'It is estimated that more than 5 million people throughout the world have a form of lupus.',
					range: {
						min: 1,
						max: 6,
						answer: 5,
						step: 1,
						suffix: ' million'
					}
				},

				{
					categoryName: 'The Symptoms',
					categorySlug: 'symptoms',
					statement:
						'As many as two-thirds of people with lupus experience a sensitivity to:',
					response:
						'Sensitivity to UV light (present in both sunlight and artificial light) affects as many as two thirds of individuals with lupus. This is known to cause fever, debilitating fatigue, joint pain, and rashes.',
					answers: [
						{
							title: 'Wheat'
						},
						{
							title: 'Gluten'
						},
						{
							title: 'Milk'
						},
						{
							title: 'UV Light',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Symptoms',
					categorySlug: 'symptoms',
					statement:
						'Factors that trigger a lupus flare, or intensified period of symptoms, include infection, ultraviolet light, stress, and some medications.',
					response:
						'Additional triggers for lupus flares include the environment, genes, and factors that are still unknown.',
					answers: [
						{
							title: 'True',
							correct: true
						},
						{
							title: 'False'
						}
					]
				},

				{
					categoryName: 'The Symptoms',
					categorySlug: 'symptoms',
					statement: 'During a flare, lupus may be contagious.',
					response:
						'Lupus is never contagious. It cannot be “caught” or “passed on” to anyone, no matter what symptoms are showing.',
					answers: [
						{
							title: 'True'
						},
						{
							title: 'False',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Impact',
					categorySlug: 'impact',
					statement:
						'Some of the complications of lupus may include heart disease, strokes, seizures, infection kidney and  lung disease.',
					response:
						'Lupus and the medications used to treat the disease have been associated with increased rates of heart disease, seizure, infection and inflammation of the lungs and other organs.',
					answers: [
						{
							title: 'True',
							correct: true
						},
						{
							title: 'False'
						}
					]
				},

				{
					categoryName: 'The Impact',
					categorySlug: 'impact',
					statement:
						'Having lupus makes you ____ times more likely than people without lupus to develop cardiovascular disease — a class of diseases that affect the heart and/or blood vessels.',
					response:
						'Lupus patients are twice as likely to develop cardiovascular disease. Although mortality rates for lupus over the past 30 years have fallen, deaths due to lupus-related cardiovascular complications have remained about the same.',
					range: {
						min: 0.5,
						max: 5,
						answer: 2,
						step: '0.5',
						toFixed: 1
					}
				},

				{
					categoryName: 'The Impact',
					categorySlug: 'impact',
					statement:
						'The steroids used to treat people with lupus are the same ones that bodybuilders and some professional athletes have been known to use.',
					response:
						'The steroids used to treat people with lupus are different. They are designed to reduce inflammation, as opposed to building muscle.',
					answers: [
						{
							title: 'True'
						},
						{
							title: 'False',
							correct: true
						}
					]
				}
			]
		},

		{
			name: 'three',
			questions: [
				{
					categoryName: 'The Basics',
					categorySlug: 'basics',
					statement:
						'Among those who are misdiagnosed, what is the average number of providers a person with lupus sees before receiving a correct diagnosis?',
					response:
						'A recent study found that over half of those who were misdiagnosed, saw 4 or more health care providers before receiving an accurate lupus diagnosis.',
					range: {
						min: 1,
						max: 10,
						answer: 4,
						step: 1
					}
				},

				{
					categoryName: 'The Basics',
					categorySlug: 'basics',
					statement:
						'The rate of lupus diagnosis for African Americans is 2-3 times higher than the rate of diagnosis for Caucasians.',
					response:
						'While lupus affects people of all races and ethnicities, African Americans — as well as Hispanics/Latinos, Asians, Pacific Islanders, and Native Americans — are diagnosed with lupus 2-3 times more often than Caucasians.',
					answers: [
						{
							title: 'True',
							correct: true
						},
						{
							title: 'False'
						}
					]
				},

				{
					categoryName: 'The Basics',
					categorySlug: 'basics',
					statement:
						'What percentage of people with lupus developed the disease as children?',
					response:
						'Ten to twenty percent of people with lupus develop the disease as children, and for them lupus often affects more major organs and is more physically damaging than for those who develop lupus as adults.',
					range: {
						min: 0,
						max: 50,
						answer: 15,
						answerText: '10-20',
						step: 10,
						fuzzy: true,
						suffix: '%'
					}
				},

				{
					categoryName: 'The Symptoms',
					categorySlug: 'symptoms',
					statement:
						'People with lupus are entitled to special equipment or actions at work, in order to ensure that they can continue working.',
					response:
						'People with lupus have the right, under the Americans with Disabilities Act (ADA), to ask employers for “reasonable accommodations”. These are defined as equipment, steps or processes that make it possible for individuals with health conditions to continue working.',
					answers: [
						{
							title: 'True',
							correct: true
						},
						{
							title: 'False'
						}
					]
				},

				{
					categoryName: 'The Symptoms',
					categorySlug: 'symptoms',
					statement:
						'Women with lupus are more likely to have a bone fracture than women without lupus.',
					response:
						'The exact reason that women with lupus have a higher rate of fractures is yet to be determined. However, researchers believe it may be due to a combination of factors including lack of vitamin D and side effects of some of the medications used to treat lupus.',
					answers: [
						{
							title: 'True',
							correct: true
						},
						{
							title: 'False'
						}
					]
				},

				{
					categoryName: 'The Symptoms',
					categorySlug: 'symptoms',
					statement: 'Women with lupus can’t have successful pregnancies.',
					response:
						'Thanks to advancing technology and a better understanding of the disease, pregnancy outcomes have improved for women with lupus. Today, although they are still considered “high risk” many women with lupus can have successful pregnancies.',
					answers: [
						{
							title: 'True'
						},
						{
							title: 'False',
							correct: true
						}
					]
				},

				{
					categoryName: 'The Impact',
					categorySlug: 'impact',
					statement:
						'On average, how many prescription medications do people with lupus take to manage all of their medical conditions?',
					response:
						'On average, people with lupus take eight prescription medications to manage all of their medical conditions, including lupus.',
					range: {
						min: 1,
						max: 10,
						answer: 8,
						step: 1
					}
				},

				{
					categoryName: 'The Impact',
					categorySlug: 'impact',
					statement:
						'How many drugs have been developed specifically to treat lupus?',
					response:
						'In 2013, the FDA approved the first — and only — medication developed specifically to treat lupus.',
					range: {
						min: 1,
						max: 10,
						answer: 1,
						step: 1
					}
				},

				{
					categoryName: 'The Impact',
					categorySlug: 'impact',
					statement:
						'What percentage of people with lupus may have to stop working due to the effects of the disease?',
					response:
						'One study found that 3.4 years after diagnosis, 40% of participants had to leave the workforce as a result of their symptoms.',
					range: {
						min: 10,
						max: 100,
						answer: 40,
						step: 10,
						suffix: '%'
					}
				}
			]
		}
	]
};
