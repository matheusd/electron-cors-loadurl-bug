const path = require("path");
const electron = require("electron");

// Determine whether to set allowRendererProcessReuse as true or false.
const rendererReuse = process.argv.indexOf("--renderer-process-reuse") > -1;
console.log("allowRendererProcessReuse will be set to:", rendererReuse);

electron.app.allowRendererProcessReuse = rendererReuse;

electron.app.on("ready", async () => {
    let windowOpts = {
        webPreferences: {
            nodeIntegration: true,
            devTools: true,
            contextIsolation: false,
            webSecurity: false
        },
    };
    
    const mainWindow = new electron.BrowserWindow(windowOpts);    
    mainWindow.webContents.openDevTools();
    const url = "file://" + path.resolve(path.join(__dirname, "app.html"));
    mainWindow.loadURL(url);    
});
