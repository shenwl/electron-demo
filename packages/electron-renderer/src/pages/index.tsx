import React, { useState, useEffect } from 'react';
import Timer from 'timer.js';
import styles from './index.less';

const { ipcRenderer } = window.require('electron');

export default () => {
  const [time, setTime] = useState('')

  const startWork = () => {
    const workTime = new Timer({
      ontick: (ms: number) => {
        const s = Math.floor(ms / 1000);
        const ss = s % 60;
        const mm = Math.floor(s / 60)
        setTime(`${mm.toString().padStart(2)}: ${ss.toString().padStart(2)}`)
      },
      onend: async () => {
        const res = await ipcRenderer.invoke('work-notification');
        if (res === 'close') {
          setTimeout(() => {
            alert("关闭")
          }, 5000);
        }
        if (res === 'work') {
          startWork();
        }
      }
    });
    workTime.start(10);
  }

  useEffect(() => {
    startWork();
  }, []);

  return (
    <div>
      {time}
    </div>
  )
}
