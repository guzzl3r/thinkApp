const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const os = require('os')

function createWindow () {
	const win = new BrowserWindow ({
		width:  400,
		height : 600,
		webPreferences: {
			nodeIntegration : true
		}
	})

	win.loadFile('static/app/index.html')
}

app.whenReady().then(createWindow)
