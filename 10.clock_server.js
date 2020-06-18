/*
# 學習 NODE.JS 贏得更多

## 報時伺服器 (練習題 10 之 13)

撰寫一個 TCP 時間伺服器 ！

您的伺服器應該持續堅聽在第一個參數提供的 port
上。每個連線，您都必須以底下的格式回應當前的日期及24小時制的時間：

    "YYYY-MM-DD hh:mm"

緊接著是一個 換行（newline） 字元。月、日、小時、時間都必須 填入零
到成為2位數。例如：

    "2013-07-06 17:42"
 */

const net = require('net')
const strftime = require('strftime')
const server = net.createServer(function (socket) {
    socket.end(strftime("%Y-%m-%d %H:%M") + "\n")
})
server.listen(process.argv[2])
