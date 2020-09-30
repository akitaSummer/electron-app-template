import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron'

class AppWindow extends BrowserWindow {
    constructor(config: BrowserWindowConstructorOptions, urlLocation: string) {
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

export default AppWindow