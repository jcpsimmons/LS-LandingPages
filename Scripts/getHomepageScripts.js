const https = require('https');
const fs = require('fs');
const download = require('download')
const path = require('path');

const directory = __dirname + '/app';
const siteRoot = 'https://livingspaces.com/_content/scripts/home/'

// Delete all files in folder
fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
        });
    }
});



https.get('https://www.livingspaces.com/', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        // Get current unminified JS and title as new one
        if (data.search('/_content/scripts/home/app_v2.min.js') !== -1) {
            download(siteRoot + 'app_v2.js').pipe(fs.createWriteStream(directory + '/app.js'));
            download(siteRoot + 'app_mobile_v2.js').pipe(fs.createWriteStream(directory + '/app_mobile.js'));
        } else {
            download(siteRoot + 'app.js').pipe(fs.createWriteStream(directory + '/app_v2.js'));
            download(siteRoot + 'app_mobile.js').pipe(fs.createWriteStream(directory + '/app_mobile_v2.js'))
        }
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});