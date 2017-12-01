'use strict';

/* eslint no-console: "off" */
const webpackConfigs = require('./build');
const defaultConfig = 'cold';

module.exports = (configName = defaultConfig) => {

    let WebPackConfiguration;

    if (webpackConfigs[configName] !== undefined) {
        WebPackConfiguration = webpackConfigs[configName];
    } else {
        console.warn(`
          Provided environment "${configName}" was not found.
          Please use one of the following:
          ${Object.keys(webpackConfigs).join(' ')}
        `);
        WebPackConfiguration = webpackConfigs[defaultConfig];
    }

    const wpc = new WebPackConfiguration();

    process.env.NODE_ENV = wpc.env;

    return wpc.config;
};

