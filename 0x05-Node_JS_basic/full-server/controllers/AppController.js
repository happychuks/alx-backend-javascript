/**
 * Contains the miscellaneous route handlers.
 * @author Happy F. Chukwuma <https://github.com/happychuks>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

