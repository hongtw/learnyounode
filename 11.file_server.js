/*
# 學習 NODE.JS 贏得更多

## HTTP 檔案伺服器 (練習題 11 之 13)

撰寫一個 HTTP 伺服器 ，可以提供它收到的 text 檔案給所有收到的請求。

第一個參數是 port ，您的伺服器應該監聽在第一個參數所給予的 port 上。

第二個參數是提供的檔案。您 必須 使用 `fs.createReadStream()
方法將檔案內容傳遞到回應上。
*/
const http = require('http')
const fs = require('fs')
const PORT = process.argv[2]
const FILE_PATH = process.argv[3]

const server = http.createServer(function (req, res) {
    const  readStream = fs.createReadStream(FILE_PATH);
    readStream.on('open', () => readStream.pipe(res))
    readStream.on('error', (err) => {res.end(err)})
})
server.listen(PORT)

// solution
/*
'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
