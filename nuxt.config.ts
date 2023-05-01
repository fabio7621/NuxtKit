// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	css: ["@fortawesome/fontawesome-svg-core/styles.css"],
	plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
	app: {
		head: {
			title: "kitNuxt",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "" },
				{ name: "format-detection", content: "telephone=no" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

			// script: [
			// 	,
			// 	{
			// 		src: process.env.BASE_URL_ROOT + "~/assets/owl.carousel.min.js",
			// 		type: "text/javascript",
			// 	},
			// ],
		},
	},
});
