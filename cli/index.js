#!/usr/bin/env node
const shell = require('shelljs')
const path = require('path')
const chokidar = require('chokidar')

const from = "./\\*"
const to = "root@172.16.108.250:/tmp/"
const password = 'xxxxxx'
const expectPath = path.join(__dirname, './expect.exp')

const watcher = chokidar.watch(process.cwd())
watcher.on('change', function (filepath) {
    // console.log(filepath);
    // shell.exec(`scp ${filepath} ${to}`)
    shell.exec(`expect ${expectPath} ${filepath} ${to} ${password}`)
})

// jenkins主要做的也就是这些
// const statusb = shell.exec("npm run build")
// if(statusb !== 0) {
//     process.exit(1)
// }
// const statuse = shell.exec("npm run eslint")
// if(statuse !== 0) {
//     process.exit(1)
// }
// // ...

// shell.exec(`expect ${expectPath} ${filepath} ${to} ${password}`)