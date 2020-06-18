const fs = require('fs');
const path = require('path');

module.exports = function (folder, filter_ext, callback) {
    filter_ext = '.' + filter_ext
    let data = []
    fs.readdir(folder, (err, files) =>{
        if (err) { return callback(err) }
        files = files.filter((file) => path.extname(file) ===  filter_ext)
        callback(null, files)
    }
    )
}