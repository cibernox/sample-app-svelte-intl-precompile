<script context="module">
  import { addMessages, init, getLocaleFromNavigator /*, register */ } from 'svelte-intl-precompile';
  import { session } from '$app/stores';
  import en from '$locales/en.js';
  import enGb from '$locales/en-gb.js';
  import es from '$locales/es.js';

  addMessages('en', en);
  addMessages('en-GB', enGb);
  addMessages('es', es);
  // register('es', () => import('$locales/en.js')); <-- use this approach if you want locales to be load lazily

	import '../app.css';  
</script>
<script>
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator($session.acceptedLanguage)
  });	
</script>

<main>
	<slot />
</main>