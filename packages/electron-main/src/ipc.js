const { ipcMain, Notification } = require('electron');
// const { send: sendMainWindow } = require('./windows/main');

function initIpc() {
  ipcMain.handle('work-notification', () => {
    return new Promise((resolve) => {
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