const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "wc",
    projectName: "bar-chart",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    externals: {
      'highcharts': 'highcharts'
    }
  });
};
