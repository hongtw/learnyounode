// 撰寫一個程式，使用 同步（Synchronous） 操作方式的檔案系統
// API。這個程式要開啟指定檔案，然後讀取並計算該檔案內容的行(\n)數，最後利用     
// console （標準輸出
// stdout）方法將計算結果輸出到終端機命令列，輸出的結果就像是使用下列終端機命    
// 令一樣：

//    cat 檔案路徑 | wc -l

// 程式的第一個命令列參數將是檔案的完整路徑。

const fs = require('fs')  


const filepath = process.argv[2]
const buf = fs.readFileSync(filepath)
const lines = buf.toString().split('\n').length-1
console.log(lines)