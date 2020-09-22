/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};


  config.security = {
    csrf: {
      enable: false
    }
  };

  config.multipart = {
    mode: 'file',
  };

  config.mysql = {
    client: {
      host: "localhost",
      port: "3306",
      user: "root",
      password: "root",
      database: "zuoye"
    }
  },
    config.cors = {
      origin: "*"

    }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1600142405840_5085';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
