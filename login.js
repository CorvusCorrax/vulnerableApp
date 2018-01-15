module.exports = function(server) {
  server.route({
      method: 'GET',
      path:'/login',
      handler: function (request, reply) {
        return reply.file('./html/login.html');
      }
  });
}
