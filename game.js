var randomWords = require('random-words');


function generateWord() {
	console.log(randomWords());

	for(i=0; i < randomWords.length; i++){
		console.log([i]);
	}
	

}

generateWord();
