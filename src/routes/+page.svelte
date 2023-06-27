<script>
	import Footer from "$lib/Footer.svelte";
	import { KEYBOARD, MODIFIER_COMBINATIONS, MODIFIER_KEYS, OTHER_KEYS } from "$lib/constants.js";

	export let data;
	Error.stackTraceLimit = 0;
	// Error.stackTraceLimit = Infinity;

	let dvorak = true;
	let pressedKey = {};

	$: layout = dvorak ? "dvorak" : "qwerty";

	function getKeyData(key) {
		let keys = data.json.filter((a) => {
			return (
				a.key === key ||
				a.key === `ctrl+${key}` ||
				a.key === `shift+${key}` ||
				a.key === `alt+${key}`
			);
		});
		return keys;
	}

	function handleKeydown(e) {
		let inKey = e.key.toLowerCase();
		pressedKey[inKey] = inKey;
		inKey = inKey.replaceAll("arrow", "");
		inKey = inKey.replaceAll(".", "oem_1");
		inKey = inKey.replaceAll(" ", "space");

		let convertedKeys = inKey;
		let prefix = "";
		prefix +=
			(e.ctrlKey ? "ctrl+" : "") +
			(e.shiftKey ? "shift+" : "") +
			(e.altKey ? "alt+" : "") +
			(e.metaKey ? "meta+" : "");

		convertedKeys = prefix + convertedKeys;

		explanations = data.json.filter((a) => {
			return a.key === convertedKeys;
		});
		if (explanations.length === 0) {
			explanations = [{ key: `No key detected for ${convertedKeys}.` }];
		}
		// explanations = getKeyData(e);
	}

	function handleKeyup(e) {
		let inKey = e.key.toLowerCase();
		pressedKey[inKey] = {};
		inKey = inKey.replaceAll("arrow", "");
		inKey = inKey.replaceAll(".", "oem_1");
		//  console.log(e)
	}

	function getUnboundKeys() {
		// thanks chatgpt (... took 10 tries though)

		function generateCombinations(keys) {
			const combinations = [];

			// Generate combinations
			for (let i = 0; i < keys.length; i++) {
				combinations.push(keys[i]);

				MODIFIER_COMBINATIONS.forEach((combination) => {
					combinations.push(combination.concat(keys[i]));
				});
			}
			return combinations;
		}

		let allCombinations = generateCombinations(OTHER_KEYS);
		allCombinations = allCombinations.filter(
			(key) => !/^[a-z]$|^shift\+[a-z]$|^shift\+[0-9]$|^[0-9]$|^oem_plus$|^oem_minus$/.test(key)
		);

		// Extract the bound keys from the data object
		const boundKeyStrings = Object.values(data.json).map((obj) => obj.key);

		// Find the unbound keys
		const unboundKeys = allCombinations.filter((key) => !boundKeyStrings.includes(key));

		explanations = [[`The following keys are not bound:`], unboundKeys];
	}

	let explanations;
</script>

<svelte:window on:keydown|preventDefault={handleKeydown} on:keyup|preventDefault={handleKeyup} />
<div class="flex flex-col items-center">
	<h1 class="text-4xl">VSCode hotkey viewer</h1>
	<h2>Press a key combination using the keyboard to see your defined hotkeys.</h2>
	<h2>Click a key to see all combinations including that key.</h2>
	<button class="rounded bg-green-300 p-2" on:click={() => getUnboundKeys()}>
		Get all unbound keys</button>
</div>
<div class="ml-8">
	<input bind:checked={dvorak} type="checkbox" name="layout-toggle" id="" />
	<label for="layout-toggle">Dvorak </label>
</div>
<main class="ml-8 flex h-screen w-[screen-100px]">
	<div class="h-[350px] w-[1000px] flex-col rounded bg-slate-800 p-1 shadow-lg shadow-black/50">
		{#each Object.values(KEYBOARD[layout]) as row}
			<div class="flex">
				{#each row as key}
					<!-- {pressedKey[key]} 
        {key} -->
					<button
						class:bg-blue-400={pressedKey[key] === key}
						class:!shadow-transparent={key === "empty" || key === "empty2"}
						class:bg-transparent={key === "empty" || key === "empty2"}
						class:text-transparent={key === "empty" || key === "empty2"}
						class:w-6={key === "empty"}
						class:w-12={key === "empty2"}
						class:w-22={key === "backspace" || key === "caps"}
						class:w-18={key === "tab"}
						class:w-32={key === "shift2"}
						class:min-h-10={key === " "}
						class:w-78={key === " "}
						class:w-16={key === "shift" ||
							key === "control" ||
							key === "meta" ||
							key === "alt" ||
							key === "altgr" ||
							key === "fn"}
						class="m-1 h-12 w-12 rounded bg-white p-2 text-black"
						on:click={() => (explanations = getKeyData(key))}>
						{key}
					</button>
				{/each}
			</div>
		{/each}
	</div>
	<div class="ml-4 h-96 h-min min-h-[350px] w-[800px] rounded bg-slate-800 p-2">
		{#if explanations}
			{#each explanations as object}
				<div class="m-4 rounded-lg bg-white p-2">
					{#each Object.entries(object) as [key, value]}
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
