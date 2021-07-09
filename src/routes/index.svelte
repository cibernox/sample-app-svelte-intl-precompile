<script>
	import { t } from 'svelte-intl-precompile'
	let count = 1;
	let time = new Date();
	let gender = 'female';
</script>

<h1>Sample app using <code>svelte-intl-precompile</code></h1>
<section>
	<p>{$t('plain')}</p>
	<p>{$t('interpolated', { values: { val: 'apple' } })}</p>
	<p>{$t('time', { values: { time } })}</p>
	<p>{$t('number', { values: { n: count } })}</p>
	<p>{$t('pluralized', { values: { count } })}</p>
	<p>{$t('pluralized-with-hash', { values: { count } })}</p>
	<p>{$t('selected', { values: { gender } })}</p>
	<hr/>
	<button type="button" on:click={() => count--}>Decrement counter</button>
	<button type="button" on:click={() => count++}>Increment counter</button>
	<p>Select a gender:</p>
	<p>
		<button type="button" on:click={() => gender = 'male'}>Male</button>
		<button type="button" on:click={() => gender = 'female'}>Female</button>		
		<button type="button" on:click={() => gender = 'other'}>Other</button>		
	</p>
</section>



<style>
	section {
		max-width: 400px;
		margin: 0 auto;
	}
</style>

