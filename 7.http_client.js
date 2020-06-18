/*
# 學習 NODE.JS 贏得更多

## HTTP 客戶端 (練習題 7 之 13)

撰寫一個會對第一個參數所提供之URL（網址）發起 HTTP GET
請求（request）的程式。這個程式會把 每個
來自回應「data」事件的字串內容以新的一行顯示在終端機（標準輸出，stdout）上
*/

const http = require('http')
const url = process.argv[2]
http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => { console.log(chunk);})
    response.on('error', console.error)
}).on('error', console.error)