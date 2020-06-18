/*

# 學習 NODE.JS 贏得更多

## HTTP 資料收集 (練習題 8 之 13)

撰寫一個會對第一個參數所提供之URL（網址）發起 HTTP GET
請求（request）的程式。從伺服器收集 所有
的資料，並且在終端機（標準輸出，stdout）上顯示兩行以呈現這些數據。

第一行是從伺服器收到的字元（characters）數量，第二行則是伺服器回傳的完整字
  串（String）。
*/

const http = require('http')
const url = process.argv[2]
http.get(url, (response) => {
    response.setEncoding('utf8');
    let rawData = '';
    response.on('data', (chunk) => { rawData += chunk})
    response.on('end', () => {
        console.log(rawData.length)
        console.log(rawData)
    })
    response.on('error', console.error)
}).on('error', console.error)