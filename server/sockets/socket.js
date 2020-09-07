const { io } = require('../server');

io.on('connection', (client) => {
  console.log('Usuario conectado');

  // on => Escuchar el cliente
  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  client.on('enviarMensaje', (data, callback) => {
    console.log(data);
    client.broadcast.emit('enviarMensaje', data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: 'TODO SALIO BIEN'
    //   });
    // } else {
    //   callback({
    //     resp: 'TODO SALIO MAL !!!!!!!!!!'
    //   });
    // }
  });

  client.emit('enviarMensaje', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta app',
  });
});