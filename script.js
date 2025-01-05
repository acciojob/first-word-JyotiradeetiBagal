function firstWord(s) {
  // your code here
	const trimmedStr = s.trim();
    const spaceIndex = trimmedStr.indexOf(' ');

    // If there's no space, return the entire string
    if (spaceIndex === -1) {
        return trimmedStr;
    }

    // Otherwise, return the substring up to the first space
    return trimmedStr.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
