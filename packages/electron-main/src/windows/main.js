const { BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

let win;
function create() {
  win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      // 开启node环境
      nodeIntegration: true,
    }
  });
  if (isDev) {
    win.loadURL("http://localhost:8000");
  } else {
    win.loadFile(path.resolve(__dirname, '..//pages/main/index.html'));
  }
}

function send(channel, ...args) {
  win.webContents.send(channel, ...args);
}

module.exports = {
  create,
  send,
}