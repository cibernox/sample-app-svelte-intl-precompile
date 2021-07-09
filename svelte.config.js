import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    vite: {
      plugins: [
        precompileIntl('locales') // if your translations are defined in /locales/[lang].js
      ]			
    }		
	}
};

export default config;
