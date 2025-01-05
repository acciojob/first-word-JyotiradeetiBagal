function firstWord(s) {
  // your code here
	const s2 = s.indexOf(" ");
	const s3 = s2 === -1 ? s : s.substring(0, s2);
	return s3;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
