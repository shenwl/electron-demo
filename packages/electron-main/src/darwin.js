const { app, Menu, Tray } = require('electron');
const path = require('path');

let tray;

function setTray() {
  tray = new Tray(path.resolve(__dirname, './images/icon.jpg'));
  tray.on('right-click', () => {
    const contextMenu = Menu.buildFromTemplate([
      { label: '显示', click: () => { } },
      { label: '推出', click: () => app.quit() },
    ]);
    tray.popUpContextMenu(contextMenu);
  })
}

function setAppMenu() { }

app.whenReady().then(() => {
  setTray();
  setAppMenu();
})