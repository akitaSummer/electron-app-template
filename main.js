const { app, Menu } = require('electron')
const menuTemplate = require('./src/electron/menuTemplate')
const AppWindow = require('./src/electron/AppWindow')
const isDev = require('electron-is-dev')
const path = require('path')

app.on('ready', () => {
    const urlLocation = isDev ? 'http://localhost:3000' : `path://${path.join(__dirname, './index.html')}`
    let mainWindow = new AppWindow({
        width: 1400,
        height: 1400,
        webPreferences: {
            nodeIntegration: true
        }
    }, urlLocation)
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)
})