export const KEYBOARD = {
	dvorak: {
		row1: [
			"esc",
			"empty",
			"f1",
			"f2",
			"f3",
			"f4",
			"empty",
			"f5",
			"f6",
			"f7",
			"f8",
			"empty",
			"f9",
			"f10",
			"f11",
			"f12",
		],
		row2: ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "´", "backspace"],
		row3: ["tab", ":", ";", "=", "p", "y", "f", "g", "c", "r", "l", ",", "¨"],
		row4: ["caps", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "-", "'", "enter"],
		row5: ["shift", "<", ".", "q", "j", "k", "x", "b", "m", "w", "v", "z", "shift2", "empty2", "up"],
		row6: [
			"control",
			"meta",
			"alt",
			" ",
			"altgr",
			"meta",
			"fn",
			"control",
			"left",
			"down",
			"right",
		],
	},
	qwerty: {
		row1: [
			"esc",
			"empty",
			"f1",
			"f2",
			"f3",
			"f4",
			"empty",
			"f5",
			"f6",
			"f7",
			"f8",
			"empty",
			"f9",
			"f10",
			"f11",
			"f12",
		],
		row2: ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "´", "backspace"],
		row3: ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å", "¨"],
		row4: ["caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "'", "enter"],
		row5: ["shift", "<", "z", "x", "c", "v", "b", "b", "m", ",", ".", "-", "shift2", "empty2", "up"],
		row6: [
			"control",
			"meta",
			"alt",
			" ",
			"altgr",
			"meta",
			"fn",
			"control",
			"left",
			"down",
			"right",
		],
	},
};

export const MODIFIER_KEYS = ["ctrl", "shift", "alt"];
export const OTHER_KEYS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"space",
	"enter",
	"tab",
	"escape",
	"backspace",
	"capslock",
	"up",
	"down",
	"left",
	"right",
	"oem_plus",
	"oem_minus",
	// laptop keys only
	// 'home', 'end', 'insert', 'delete', 'pageup', 'pagedown',
	// 'numlock', 'scrolllock', 'pause', 'printscreen',
	"f1",
	"f2",
	"f3",
	"f4",
	"f5",
	"f6",
	"f7",
	"f8",
	"f9",
	"f10",
	"f11",
	"f12",
	// Add more keys as needed
];
