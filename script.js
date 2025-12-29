function firstWord(s) {
  // your code here
	const match = s.match(/^\s*([^ ]*)/);
	return match ? match[1] : "";
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));



