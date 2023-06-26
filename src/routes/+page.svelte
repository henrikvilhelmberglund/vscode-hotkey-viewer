<script>
	import { afterUpdate } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";

	export let data;

	let dvorak = true;
	let keys1 = [];
	let keys2 = [];
	let keys3 = [];
	let keys4 = [];
	let keys5 = [];
	let keys6 = [];

	$: {
		if (dvorak) {
			keys1 = [
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
			];
			keys2 = ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "´", "backspace"];
			keys3 = ["tab", ":", ";", "=", "p", "y", "f", "g", "c", "r", "l", ",", "¨"];
			keys4 = ["caps", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "-", "'", "enter"];
			keys5 = [
				"shift",
				"<",
				".",
				"q",
				"j",
				"k",
				"x",
				"b",
				"m",
				"w",
				"v",
				"z",
				"shift2",
				"empty",
				"up",
			];
			keys6 = [
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
			];
		} else {
			keys1 = [
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
			];
			keys2 = ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "´", "backspace"];
			keys3 = ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å", "¨"];
			keys4 = ["caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "'", "enter"];
			keys5 = [
				"shift",
				"<",
				"z",
				"x",
				"c",
				"v",
				"b",
				"b",
				"m",
				",",
				".",
				"-",
				"shift2",
				"empty",
				"up",
			];
			keys6 = [
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
			];
		}
	}
	function getKeyData(key) {
		explanations = data.json.filter((a) => a.key === key);
		return keys;
	}

	let pressedKey = {};
	function handleKeydown(e) {
		pressedKey[e.key.toLowerCase()] = e.key.toLowerCase();

		// console.log("a", a.key);
		let convertedKeys = e.key.toLowerCase();
		if (e.ctrlKey && e.shiftKey && e.altKey && e.metaKey) {
			convertedKeys = `ctrl+shift+alt+win+${convertedKeys}`;
		} else if (e.ctrlKey && e.shiftKey && e.altKey) {
			convertedKeys = `ctrl+shift+alt+${convertedKeys}`;
		} else if (e.ctrlKey && e.shiftKey && e.metaKey) {
			convertedKeys = `ctrl+shift+win+${convertedKeys}`;
		} else if (e.ctrlKey && e.altKey && e.metaKey) {
			convertedKeys = `ctrl+alt+win+${convertedKeys}`;
		} else if (e.ctrlKey && e.shiftKey) {
			convertedKeys = `ctrl+shift+${convertedKeys}`;
		} else if (e.ctrlKey && e.altKey) {
			convertedKeys = `ctrl+alt+${convertedKeys}`;
		} else if (e.ctrlKey && e.metaKey) {
			convertedKeys = `ctrl+win+${convertedKeys}`;
		} else if (e.ctrlKey) {
			convertedKeys = `ctrl+${convertedKeys}`;
		} else if (e.shiftKey) {
			convertedKeys = `shift+${convertedKeys}`;
		} else if (e.altKey) {
			convertedKeys = `alt+${convertedKeys}`;
		}
		convertedKeys = convertedKeys.replaceAll("arrow", "");
		convertedKeys = convertedKeys.replaceAll(".", "oem_1");
		console.log(convertedKeys);

		explanations = data.json.filter((a) => {
			return a.key === convertedKeys;
		});
		console.log("expl", explanations);
		if (explanations.length === 0) {
			explanations = [{ key: `No key detected for ${convertedKeys}.` }];
		}
		// explanations = getKeyData(e);

		console.log(e);
	}
	function handleKeyup(e) {
		pressedKey = {};
		//  console.log(e)
	}

	function getUnboundKeys() {
		// thanks chatgpt (... took 10 tries though)
		const modifierKeys = ["ctrl", "shift", "alt"];
		const otherKeys = [
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
		function generateCombinations(modifiers, keys) {
			const combinations = [];

			// Sort modifier keys based on desired order
			modifiers.sort((a, b) => {
				return modifierKeys.indexOf(a) - modifierKeys.indexOf(b);
			});

			// Generate combinations
			for (let i = 0; i < keys.length; i++) {
				combinations.push(keys[i]);

				for (let j = 0; j < modifiers.length; j++) {
					combinations.push(
						modifiers
							.slice(0, j + 1)
							.concat(keys[i])
							.join("+")
					);
				}
			}

			return combinations;
		}

		let allCombinations = generateCombinations(modifierKeys, otherKeys);
		allCombinations = allCombinations.filter((key) => !/^[a-z]$|^shift\+[a-z]$|^[0-9]$/.test(key));
		// console.log(allCombinations);
		// console.log(data.json);
		// Extract the bound keys from the data object
		const boundKeyStrings = Object.values(data.json).map((obj) => obj.key);

		// Find the unbound keys
		const unboundKeys = allCombinations.filter((key) => !boundKeyStrings.includes(key));

		console.log(unboundKeys);
		explanations = [[`The following keys are not bound:`], unboundKeys];
	}

	let explanations;
</script>

<svelte:window on:keydown|preventDefault={handleKeydown} on:keyup|preventDefault={handleKeyup} />
<div class="flex flex-col items-center">
	<h1 class="text-4xl">VSCode hotkey viewer</h1>
	<h2>Press a key combination to see your defined hotkeys.</h2>
	<button class="rounded bg-green-300 p-2" on:click={() => getUnboundKeys()}
		>Get all unbound keys</button>
</div>
<div class="m-4">
	<input bind:checked={dvorak} type="checkbox" name="layout-toggle" id="" />
	<label for="layout-toggle">Dvorak </label>
</div>
<main class="flex h-screen w-screen">
	<div class="h-[400px] w-[1000px] flex-col bg-slate-800 p-1">
		<div>
			{#each keys1 as key}
				<!-- TODO: not very dry -->
				<button
					class:bg-blue-400={pressedKey[key] === key}
					class:bg-transparent={key === "empty"}
					class:text-transparent={key === "empty"}
					class:w-6={key === "empty"}
					class:!shadow-transparent={key === "empty"}
					class="m-1 w-12 rounded bg-white p-2 text-black"
					on:click={() => (explanations = getKeyData(key))}>
					{key}
				</button>
			{/each}
		</div>
		<div>
			{#each keys2 as key}
				<button
					class:bg-blue-400={pressedKey[key] === key}
					class:w-22={key === "backspace"}
					class="m-1 w-12 rounded bg-white p-2 text-black"
					on:click={() => (explanations = getKeyData(key))}>
					{key}
				</button>
			{/each}
		</div>
		<div>
			{#each keys3 as key}
				<button
					class:bg-blue-400={pressedKey[key] === key}
					class:w-18={key === "tab"}
					class="m-1 w-12 rounded bg-white p-2 text-black"
					on:click={() => (explanations = getKeyData(key))}>
					{key}
				</button>
			{/each}
		</div>
		<div>
			{#each keys4 as key}
				<button
					class:bg-blue-400={pressedKey[key] === key}
					class:w-22={key === "caps"}
					class="m-1 w-12 rounded bg-white p-2 text-black"
					on:click={() => (explanations = getKeyData(key))}>
					{key}
				</button>
			{/each}
		</div>
		<div>
			{#each keys5 as key}
				<button
					class:bg-blue-400={pressedKey[key] === key}
					class:w-16={key === "shift"}
					class:w-32={key === "shift2"}
					class:bg-transparent={key === "empty"}
					class:text-transparent={key === "empty"}
					class:!shadow-transparent={key === "empty"}
					class="m-1 w-12 rounded bg-white p-2 text-black"
					on:click={() => (explanations = getKeyData(key))}>
					{key}
				</button>
			{/each}
		</div>
		<div class="flex items-center">
			{#each keys6 as key}
				<button
					class:bg-blue-400={pressedKey[key] === key}
					class:min-h-10={key === " "}
					class:w-78={key === " "}
					class:w-16={key === "control" ||
						key === "meta" ||
						key === "alt" ||
						key === "altgr" ||
						key === "fn"}
					class:bg-transparent={key === "empty"}
					class:text-transparent={key === "empty"}
					class:!shadow-transparent={key === "empty"}
					class="m-1 w-12 rounded bg-white p-2 text-black"
					on:click={() => (explanations = getKeyData(key))}>
					{key}
				</button>
			{/each}
		</div>
	</div>
	<div class="ml-8 h-96 w-min bg-slate-200 p-2">
		{#if explanations}
			{#each explanations as object}
				<div class="m-4 w-[800px] rounded-lg bg-white p-2">
					{#each Object.entries(object) as [key, value]}
						<!-- <p class="text-3xl break-all">{key}</p> -->
						<p class:font-bold={["key", "command"].includes(key)} class="break-all text-3xl">
							{value}
						</p>
					{/each}
				</div>
			{/each}
		{/if}
	</div>
</main>

<Footer />

<style>
	button {
		@apply shadow shadow-black;
	}
</style>
