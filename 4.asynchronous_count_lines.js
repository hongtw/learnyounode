/* 
# 學習 NODE.JS 贏得更多

## 非同步輸入/輸出 (練習題 4 之 13)

撰寫一個程式，以 非同步（ asynchronous ）
的檔案操作方式讀入一個檔案，並在命令列上顯示該檔案的行數。這個程式的行為類
似終端機命令 cat file | wc -l 。

程式的第一個命令列參數將是檔案的完整路徑。
---
# 提示

除了現在您必須以 Node.js 的
非同步（asynchronous）方式解決這個習題以外，這個習題的解法 幾乎
和前一個習題相同。

您要使用 fs.readFile() 取代 fs.readFileSync()
方法，相對地，還要用在第二個參數中傳入收集資料的 callback
函式，以取代原本使用回傳值的方法。
*/

const fs = require('fs')  


const filepath = process.argv[2]

fs.readFile(filepath, (err, data) => {
    if (err) throw err;
    const lines = data.toString().split('\n').length-1
    console.log(lines)
})

