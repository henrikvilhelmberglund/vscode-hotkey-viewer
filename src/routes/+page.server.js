/** @type {import('./$types').PageServerLoad} */
import fs from "fs";
import stripJsonComments from "strip-json-comments";

export async function load() {
	// C:\Users\henri\AppData\Roaming\Code\User
	const appDataPath = process.env.APPDATA;
	const keybindingsPath = `${appDataPath}/Code/User/keybindings.json`;
	let defaultJSON = fs.readFileSync("./src/lib/default.json", "utf-8");
	defaultJSON = JSON.parse(stripJsonComments(defaultJSON));
	console.log(defaultJSON);
	let json;
	json = fs.readFileSync(keybindingsPath, "utf-8");

	for (const userKeybinding of json) {
		const index = defaultJSON.findIndex((defaultJSON) => defaultJSON.key === userKeybinding.key);

		if (index !== -1) {
			defaultJSON[index] = userKeybinding;
		}
	}
	// console.log(defaultJSON)

	return {
		json: defaultJSON,
	};
}