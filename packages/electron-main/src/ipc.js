const { ipcMain, Notification, Menu } = require('electron');
// const { send: sendMainWindow } = require('./windows/main');

const menu = new Menu();

function initIpc() {
  ipcMain.handle('work-notification', () => {
    return new Promise((resolve) => {
      menu.popup()
      const notification = new Notification({
        title: '关闭闹钟',
        body: '是否关闭闹钟',
        actions: [{ text: '关闭闹钟', type: 'button' }],
        closeButtonText: '继续提示'
      });
      notification.show();
      notification.on('action', () => {
        resolve('close');
      })
      notification.on('close', () => {
        resolve('work');
      })
    })
  });
}

module.exports = {
  initIpc,
};