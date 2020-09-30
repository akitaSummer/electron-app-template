import { app, Menu } from 'electron'
import isDev from 'electron-is-dev'
import url from 'url'
import menuTemplate from './electron/menuTemplate'
import AppWindow from './electron/AppWindow'

app.on('ready', () => {
    const prodUrl = url.format({
        protocol: 'file',
        slashes: true,
        pathname: require('path').join(__dirname, 'index.html')
      })
    const urlLocation = 'http://localhost:3000'
    let mainWindow: AppWindow | null  = new AppWindow({
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