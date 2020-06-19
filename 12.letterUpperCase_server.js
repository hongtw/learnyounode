/*
# 學習 NODE.JS 贏得更多

## HTTP 回傳大寫字體 (練習題 12 之 13)

撰寫一個只能接收 POST 請求的 HTTP 伺服器，這個伺服器會把收到的 POST
內容字元轉換成大寫，並回應給客戶端。

您的伺服器應該監聽在第一個參數所給予的 port 上。
*/

const http = require('http')
const server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        let body = ''
        req.on('data', (data) => {body += data})
        req.on('end', () => {
            res.writeHead(200,)
            res.end(body.toUpperCase())
        })
    } else {
        res.end("NOT Support GET")
    }
})
server.listen(process.argv[2])