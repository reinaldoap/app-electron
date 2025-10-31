import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getMessage: () => ipcRenderer.invoke("get-message"),
});
