module.exports = {
  path: '/ping',
  method: 'GET',
  handler: (request, response) => {
    console.log('hi');
    response('pong').code(200);
  },
};
