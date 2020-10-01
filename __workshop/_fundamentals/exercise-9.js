// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
	let char_jump = 40;
	let new_paragraph = "";
  // the only soluion without regex
  for (let i = 0; i < paragraph.length; i += char_jump) {
	    /* returns the part of the string between the start and end indexes*/
	    let part = paragraph.substring(i, i + char_jump).concat("", "\n");
	   	
	   		if(part[0] == " "){/*remove if there is a space at start of string*/
	   			part = part.substring(1);
	   		}
	    new_paragraph = new_paragraph.concat("", part);
	    // new_paragraph = new_paragraph+=part;
	}

	return new_paragraph;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
