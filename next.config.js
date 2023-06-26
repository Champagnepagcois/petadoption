module.exports = {
  /* webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    }, */

  entry: "/app/page.jsx",
  externals: ["child_process", "dns", "fs", "net", "tls"],
};
