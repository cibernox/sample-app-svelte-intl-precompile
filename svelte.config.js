import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.js";
// import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// }),    
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    vite: {
      plugins: [
        precompileIntl('locales') // if your translations are defined in /locales/[lang].json
      ]			
    }		
	}
};

export default config;
