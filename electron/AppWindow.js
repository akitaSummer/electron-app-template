const { BrowserWindow } = require('electron')

class AppWindow extends BrowserWindow {
    constructor(config, urlLocation) {
        const defaultConfig = {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            },
            show: false,
            backgroundColor: '#efefef'
        }
        super({...defaultConfig, ...config });
        this.loadURL(urlLocation)
        this.once('ready-to-show', () => {
            this.show()
        })
    }
}

module.exports = AppWindow