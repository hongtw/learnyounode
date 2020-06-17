// 撰寫一個以副檔名作為篩選條件，列出指定資料夾內檔案的程式。程式的第一個參數    
// 是目錄的路徑，第二個參數則是篩選用的副檔名。
// 
// 舉例來說，如果第二個參數是「txt」，您將需要篩選出資料夾內 以 .txt 結尾        
// 的檔案。注意，第二個參數 將不會 預先加上「.」。  
// 
// 檔案列表應該要顯示在命令列上，一個檔案一列。您 必須  
// 使用非同步（asynchronous）的方式讀取目錄。

const fs = require('fs')  
const path = require('path')

const folder = process.argv[2]
const filter_ext = `.${process.argv[3]}`

fs.readdir(folder, (err, files) =>{
    if (err) return console.error(err)
    files.forEach(file => {
        if (path.extname(file) ===  filter_ext) {
            console.log(file)
        }
    })
})