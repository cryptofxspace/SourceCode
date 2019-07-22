'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class MustUser {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response }, next) {

  	if( auth.user.is_admin ){
  		return response.route('admin.dashboard')
  	}

    // call next to advance the request
    await next()

  }
}

module.exports = MustUser
