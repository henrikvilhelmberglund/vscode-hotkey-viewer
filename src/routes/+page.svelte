<script>
	import { afterUpdate } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";

	export let data;

	const keys1 = [
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
	const keys2 = ["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "´", "backspace"];
	const keys3 = ["tab", ":", ";", "=", "p", "y", "f", "g", "c", "r", "l", ",", "¨"];
	const keys4 = ["caps", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "-", "'", "enter"];
	const keys5 = ["shift", "<", ".", "q", "j", "k", "x", "b", "m", "w", "v", "z"];
	const keys6 = ["ctrl", "win", "alt", "spacebar", "altgr", "win", "fn", "ctrl"];

	function getKeyData(key) {
		let keys = data.json.filter((a) => a.key === key);
		console.log(keys);
		return keys;
	}

	let explanations;
</script>

<main class="flex w-screen">
	<div class="w-[1000px] flex-col bg-slate-800 p-1">
		<div>
			{#each keys1 as key}
				<button
					class:bg-transparent={key === "empty"}
					class:text-transparent={key === "empty"}
					class:w-6={key === "empty"}
					class="m-1 w-12 rounded bg-white p-2 text-black"
					on:click={() => (explanations = getKeyData(key))}>
					{key}
				</button>
			{/each}
		</div>
		<div>
			{#each keys2 as key}
				<button
					class:w-22={key === "backspace"}
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
</style>
