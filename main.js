const electron = require('electron')
const path = require('path')
const url = require('url')

const { app, BrowserWindow } = electron

let mainWidow

app.on('ready', () => {
    mainWidow = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 250,
        minHeight: 100,
        maxWidth: 1200,
        maxHeight: 1000,
        titleBarStyle: 'hiddenInset',
        // frame: false
    })
    mainWidow.loadURL(url.format({
        pathname: path.join(__dirname, 'spiral.html'),
        protocol: 'file:',
        slashes: true
    }))
})