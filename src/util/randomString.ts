const randomString = (count?: number) => {
	const lower = () => {
		const lowerCase = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z'
		];
		return lowerCase[Math.floor(Math.random() * lowerCase.length)];
	};

	const upper = () => {
		const upperCase = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z'
		];
		return upperCase[Math.floor(Math.random() * upperCase.length)];
	};

	const misc = () => {
		const miscCharacters = [
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'!',
			'@​',
			'#',
			'$',
			'%',
			'^',
			'&',
			'*',
			'+',
			'-',
			',',
			'.',
			'<',
			'>',
			'=',
			'_',
			'?',
			'~'
		];
		return miscCharacters[Math.floor(Math.random() * miscCharacters.length)];
	};

	if (!count) count = Math.ceil(Math.random() * 5) + 8;

	let str = '';
	for (let i = 0; i < count; i++) {
		const choice = Math.floor(Math.random() * 3);
		if (choice === 0) str += lower();
		else if (choice === 1) str += upper();
		else str += misc();
	}

	const containsAll = /[a-z]/g.test(str) && /[A-Z]/g.test(str) && /[0-9!@#$%^&*+-,.<>=_?~]/g.test(str);
	if (!containsAll) {
		str = str.slice(0, -3) + lower() + upper() + misc();
	}
	return str;
};

export default randomString;
