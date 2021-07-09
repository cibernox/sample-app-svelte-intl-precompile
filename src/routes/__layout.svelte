<script>
  import { addMessages, init, getLocaleFromNavigator /*, register */ } from 'svelte-intl-precompile';
  import en from '../../locales/en.js';
  // @ts-ignore
  addMessages('en', en);
  // register('es', () => import('../../locales/en.js')); <-- use this approach if you want locales to be load lazily

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
  });	
	import '../app.css';
</script>

<main>
	<slot />
</main>