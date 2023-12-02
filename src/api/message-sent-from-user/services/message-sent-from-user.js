'use strict';

/**
 * message-sent-from-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::message-sent-from-user.message-sent-from-user');
