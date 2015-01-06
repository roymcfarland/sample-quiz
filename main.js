// Setup quiz score with zero correct answers
var correct = 0;

// Ask Questions
var answer1 = prompt('Name a programming language that is also a gem.');
if ( answer1.toUpperCase() === 'RUBY') {
	correct += 1;
}
var answer2 = prompt('Name a programming language that is also a snake.');
if ( answer2.toUpperCase() === 'PYTHON') {
	correct += 1;
}
var answer3 = prompt('What programming language do you use to style a webpage?');
if ( answer3.toUpperCase() === 'CSS') {
	correct += 1;
}
var answer4 = prompt('What programming language do you use to build the structure of webpages?');
if ( answer4.toUpperCase() === 'HTML') {
	correct += 1;
}
var answer5 = prompt('What programming language do you use to add interactivity to a webpage?');
if ( answer5.toUpperCase() === 'JAVASCRIPT') {
	correct += 1;
}

// Output Results
document.write('<p>You got ' + correct + ' out of 5 questions correct.</p>');

// Output Rank
if ( correct === 5 ) {
	document.write('<p><strong>You earned a gold star!</strong></p>');
} else if ( correct >= 3 ) {
	document.write('<p><strong>You earned a silver star!</strong></p>');
} else if ( correct >= 1 ) {
	document.write('<p><strong>You earned a bronze star!</strong></p>');
} else {
	document.write('<p><strong>No crown for you!</strong></p>');
};