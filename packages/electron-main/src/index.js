const { app } = require('electron');
const { initIpc } = require('./ipc');
const { create: createMainWindow } = require('./windows/main');

app.on('ready', () => {
  initIpc();
  createMainWindow();
})