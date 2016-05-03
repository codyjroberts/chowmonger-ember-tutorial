import Ember from 'ember';
import { Socket } from 'phoenix';

const { assert, Service, Evented } = Ember;

export default Service.extend(Evented, {
  socket: null,
  isHealthy: false,
  init() {
    this.on('open', () => {
      console.log('Socket was opened!');
    });
    this.on('close', () => {
      console.log('Socket was closed!');
    });
    this.on('error', () => {
      console.log('Socket encountered and error!');
    });

    this.connect();
  },
  connect() {
    //const socket = new Socket("ws://radiant-coast-43128.herokuapp.com/socket", {
    const socket = new Socket("ws://localhost:4000/socket", {
      logger: ((kind, msg, data) => {
        console.log(`${kind}: ${msg}`, data);
      })
    });

    socket.connect();

    socket.onOpen(() => {
      this.set('isHealthy', true);
      this.trigger('open', ...arguments);
    });
    socket.onClose(() => {
      this.set('isHealthy', false);
      this.trigger('close', ...arguments);
    });
    socket.onError(() => {
      this.set('isHealthy', false);
      this.trigger('error', ...arguments);
    });

    this.set('socket', socket);
  },
  joinChannel(name) {
    const socket = this.get('socket');
    assert('must connect to a socket first', socket);

    const channel = socket.channel(name, {});
    channel.join();
    return channel;
  }
});
