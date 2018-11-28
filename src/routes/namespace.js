const makeNamespace = require('../helpers/makeNamespace');
const server = require('../server');

module.exports = {
  path: '/namespace',
  method: 'POST',
  handler: (request, response) => {
    const { namespaceName } = request.payload;
    makeNamespace(namespaceName, server);
    response(`namespace added${namespaceName}`).code(200);
  },
};

