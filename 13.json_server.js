/*
# 學習 NODE.JS 贏得更多

## HTTP JSON API 伺服器 (練習題 13 之 13)

撰寫一個 HTTP 伺服器 ，當伺服器收到路徑「/api/parsetime」的 GET
請求時，要回應 JSON 格式的資料。這個請求會包含一個 query ， key
是「iso」，值是 ISO 格式的時間。

如下例：

/api/parsetime?iso=2013-08-10T12:10:15.474Z

回應的 JSON
應該只包含三個屬性：「hour」、「minute」及「second」。舉例來說：

    {
    "hour": 14,
    "minute": 23,
    "second": 15
    }

您還要加入第二個可以接受相同 query ，但這次在「unixtime」屬性下回應 UNIX
時間格式（又稱為 epoch 或 POSIX 時間格式）的路徑「/api/unixtime」。

    { "unixtime": 1376136615474 }

您的伺服器應該持續監聽在第一個參數提供的 port 上。
*/

const http = require('http')
const server = http.createServer(function (req, res) {
    url = new URL(req.url, "http://localhost")
    const iso_str = url.searchParams.get("iso")
    let data = {}
    if (url.pathname === '/api/parsetime') {
        const date = new Date(iso_str)
        data = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }
    } else if (url.pathname === '/api/unixtime') {
        data = {
            unixtime: new Date(iso_str).getTime()
        }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data))
})
server.listen(process.argv[2])