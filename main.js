const { app, Menu } = require('electron')
const menuTemplate = require('./electron/menuTemplate')
const AppWindow = require('./electron/AppWindow')
const isDev = require('electron-is-dev')
const url = require('url')

app.on('ready', () => {
    const prodUrl = url.format({
        protocol: 'file',
        slashes: true,
        pathname: require('path').join(__dirname, 'index.html')
    })
    const urlLocation = 'http://localhost:3000'
    let mainWindow = new AppWindow({
        width: 1400,
        height: 1400,
        webPreferences: {
            nodeIntegration: true
        }
    }, isDev ? urlLocation : prodUrl)
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)
})