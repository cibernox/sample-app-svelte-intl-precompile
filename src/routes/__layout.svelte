<script>
  import { addMessages, init, getLocaleFromNavigator /*, register */ } from 'svelte-intl-precompile';
  import en from '$locales/en.js';
  import es from '$locales/es.js';
  // @ts-ignore
  addMessages('en', en);
  addMessages('es', es);
  // register('es', () => import('$locales/en.js')); <-- use this approach if you want locales to be load lazily

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
  });	
	import '../app.css';
</script>

<main>
	<slot />
</main>