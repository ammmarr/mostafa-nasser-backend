'use strict';

/**
 * message-sent-from-user router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::message-sent-from-user.message-sent-from-user');
