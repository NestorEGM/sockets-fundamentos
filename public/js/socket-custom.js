const socket = io();

// on => Escuchar
socket.on('connect', () => {
  console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
  console.log('Perdimos conexion con el servidor');
});

socket.on('enviarMensaje', mensaje => {
  console.log('Servidor: ', mensaje);
});

// emit => Enviar informacion
socket.emit('enviarMensaje', {
  usuario: 'Nestor',
  mensaje: 'Hola mundo',
}, (resp) => {
  console.log('Respuesta server: ', resp);
});