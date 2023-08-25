// 主进程模块
const path = require("path");
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true, // 注入node模块
        },
    });

    mainWindow.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})