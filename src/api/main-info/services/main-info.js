'use strict';

/**
 * main-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-info.main-info');
