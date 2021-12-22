const fetch = require('node-fetch')

module.exports = shortener = (url) => {
    return new Promise(async (resolve, reject) => {
        // console.log('Creando l url corto...')
        await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
            .then(response => response.text())
            .then(json => {
                resolve(json)
            })
            .catch((err) => {
                reject(err)
            });
    })
};
