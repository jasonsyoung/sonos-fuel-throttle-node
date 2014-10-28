module.exports = {
	environment: {
		loginUrl: "https://localhost:3000",
		requestToken: "https://auth.exacttargetapis.com/v1/requestToken",
		applicationName: "sonos-fuel-throttle-node",
		applicationId: "f251bebe-1eb2-4393-b764-139e0cd28a5a",
		oAuth: {
			// These values allow your app to have its own token for
			// internal API interactions
			clientId: "r4yu78xqgu65fv7fqgtd5std",
			clientSecret: "kZ9eDYhzaSjpraSTBrrYfeU2",
			appSignature: "com.sonos.fuelapp"
		}
	},
	routes: {
		/*
		application: {
			url: 'yourApp/something/{ID}',// See Express.js documentation for implementation
		}
		*/
	},
	endpoints: {
		rest: "/public/",
		uiBaseDir: "/public/",
		versionedDir: false,
		defaultStaticBase: "/",
		// Use this if you're hosting static assets on a CDN
		//assetBase: "//s3.amazonaws.com/hubexchange/assets/"
	},
	appRest: {
		base: "/",
		proxy: {
			host: "www.exacttargetapis.com",
			port: 443,
			https: true
		},
		headers: {
		},
		allowedHeaders: [
			'accept',
			'accept-charset',
			'accept-encoding',
			'accept-language',
			'referrer',
			'user-agent',
			'content-type',
			'content-length'
		]
	},
	rest: {
		base: "/internal/v1/",
		proxy: {
			host: "www.exacttargetapis.com",
			port: 443,
			https: true
		},
		headers: {
		},
		allowedHeaders: [
			'accept',
			'accept-charset',
			'accept-encoding',
			'accept-language',
			'referrer',
			'user-agent',
			'content-type',
			'content-length'
		]
	},
	cache: {
		timeout: 86400 // Set cacheTimeout to a falsey value to disable cache. Default is 24 hours
	},
	mongodb: {
		host: 'localhost',
		port: '27017' // Default port for local development
	}
};
