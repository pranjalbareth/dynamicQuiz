var quiz = { 
	"title": "Chemistry Quiz",
	"description": ".....",
	"meta_tags": [
		"sceince","physics", "fun"
	],
	"difficulty": 1-20,
	"questions": [
		{
			"text": "What is the specific heat of water?",
			"answers": ["4.18 J/g&deg;C", "5.18 J/g&deg;C", "40.56 J/g&deg;C", "20.56 J/g&deg;C", "-2.56 J/g&deg;C"],
			"correct_answer": 0,
			"meta_tags": ["specific heat, water, heat capacity"]
		},
		{
			"text": "What is the mass of iron?",
			"answers": ["0.56 grams", "5.6 grams", " 56 grams", "560 grams"],
			"correct_answer": 2,
			"meta_tags": ["iron, Fe, mass"]
		},
		{
			"text": "What does the symbol Au stand for?",
			"answers": ["aluminum", "silver", "gold", "arsenic", "actinium"],
			"correct_answer": 2,
			"meta_tags": ["Au, gold, element, symbol"]
		},
		{
			"text": "How can we solve for change in internal energy?",
			"answers": ["mC&#916;T", "P&#916;V", "q/T", "q + w"],
			"correct_answer": 3,
			"meta_tags": ["internal energy, energy"]
		},
		{
			"text": "What is one type of calorimetry?",
			"answers": ["clock calorimetry", "coffee cup calorimetry", "styrofoam calorimetry"],
			"correct_answer": 1,
			"meta_tags": ["calorimetry"]
		},
		{
			"text": "What is the ideal gas law?",
			"answers": ["Pn=VRT", "PV=nRT", "RT=nPV", "PTV=nR", "V=nRPT", "n=PVRT"],
			"correct_answer": 1,
			"meta_tags": ["ideal gas law, gas"]
		},
		{
			"text": "Is enthalpy a state function?",
			"answers": ["Yes", "No"],
			"correct_answer": 0,
			"meta_tags": ["enthalpy, H, state function"]
		},
		{
			"text": "What is one type of calorimetry?",
			"answers": ["bomb calorimetry", "plastic calorimetry", "wood calorimetry", "air calorimetry"],
			"correct_answer": 0,
			"meta_tags": ["calorimetry"]
		},
		{
			"text": "What is the mass of hydrogen?",
			"answers": ["0.01 grams", "0.1 grams", "1 gram", "10 grams", "100 grams", "1000 grams"],
			"correct_answer": 2,
			"meta_tags": ["hydrogen, H, mass"]
		},
		{
			"text": "What is the first law of thermodynamics?",
			"answers": ["Conservation of mass", "Conservation of volume", "Conservation of energy"],
			"correct_answer": 2,
			"meta_tags": ["thermodynamics, first law of thermodynamics"]
		},
		{
			"text": "Is work a state function?",
			"answers": ["Yes", "No"],
			"correct_answer": 1,
			"meta_tags": ["work, w, state function"]
		},
		{
			"text": "What is the volume of a rectangular prism?",
			"answers": ["length x width x height", "length x width", "length x height", "length x width x height x circumference"],
			"correct_answer": 0,
			"meta_tags": ["rectangular prism, volume"]
		},
		{
			"text": "What is the mass of tin?",
			"answers": ["0.119 grams", "1.19 grams", "11.9 grams", "119 grams", "1190 grams"],
			"correct_answer": 3,
			"meta_tags": ["tin, mass, Sn"]
		},
		{
			"text": "How do we solve for Gibbs' free energy?",
			"answers": ["H - PV", "PV + TS", "q + PV", "TP + q", "q + TS", "H-TS"],
			"correct_answer": 5,
			"meta_tags": ["free energy, Gibbs, G"]
		},
		{
			"text": "Is free energy a state function?",
			"answers": ["yes", "no"],
			"correct_answer": 0,
			"meta_tags": ["free energy, Gibbs, state function"]
		},
		{
			"text": "What is the mass of one gram of titanium?",
			"answers": ["4.8 grams", "48 grams", "480 grams", "4800 grams"],
			"correct_answer": 1,
			"meta_tags": ["titanium, mass, Ti"]
		},
		{
			"text": "What does the symbol Sb stand for?",
			"answers": ["Antimony", "Selenium", "Sabenium", "Beryllium", "Tantaium"],
			"correct_answer": 0,
			"meta_tags": ["antimony, Sb, symbol, element"]
		},
		{
			"text": "How do we solve for entropy?",
			"answers": ["n/q", "V/P", "P/T", "q/T"],
			"correct_answer": 3,
			"meta_tags": ["entropy, probability"]
		},
		{
			"text": "Is entropy a state function?",
			"answers": ["Yes", "No"],
			"correct_answer": 0,
			"meta_tags": ["entropy, state function"]
		},
		{
			"text": "How many protons does argon have?",
			"answers": ["9", "18", "27", "36", "45", "54", "63"],
			"correct_answer": 1,
			"meta_tags": ["argon, protons"]
		},
	]
};

// var quiz;

// $(document).ready(function() {
// 	$.getJSON("https://raw.githubusercontent.com/gzgracez/dynamicQuiz/gh-pages/quiz.json?token=AGOnm2jbxQ508cb2AXgG-ocSYDvoLCtTks5WGdzJwA%3D%3D", function(json) {
// 		quiz = json;
// 		quizLength = Math.ceil(Math.random()*(quiz["questions"].length-(quiz["questions"].length/2))+(quiz["questions"].length/2))
// 		console.log(json);
// 	});
// });