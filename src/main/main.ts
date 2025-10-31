import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import "./ipcHandlers";

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {

    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth: 800,  
        minHeight: 600,
        icon: path.join(__dirname, "../renderer/images/icon.png"),
        show: false, // só mostra quando estiver pronto
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));


    // Remove a barra de menus completamente
    mainWindow.setMenu(null);

    //Abre as ferramentas de desenvolvedor automaticamente
    //mainWindow.webContents.openDevTools();

    // Mostra a janela apenas quando estiver pronta (melhor UX)
    mainWindow.once("ready-to-show", () => {
        mainWindow?.show();
    });

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
