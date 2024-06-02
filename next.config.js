/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.experiments = {
			asyncWebAssembly: true,
			layers: true,
		};

		return config;
	},
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();
// Instead of module.exports = nextConfig, do this:
module.exports = withVercelToolbar(nextConfig);
