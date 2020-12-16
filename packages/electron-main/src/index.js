const { app } = require('electron');
const { initIpc } = require('./ipc');
const { create: createMainWindow } = require('./windows/main');

if (process.platform === 'darwin') {
  require('./darwin.js');
}

app.on('ready', () => {
  initIpc();
  createMainWindow();
})