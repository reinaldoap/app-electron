import { ipcMain } from "electron";

ipcMain.handle("get-message", async () => {
  return "Olá do processo principal!";
});
