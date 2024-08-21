const readline = require('readline')

const readFile = async (fileStream) => {
    return new Promise((resolve, reject) => {
        const objectsArray = []; // Array to store each record as an object
        let isFirstLine = true; // Flag to identify the first line (headers)
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
          });
        rl.on('line', (line)=> {
            if (isFirstLine) {
                headers = line.split(',');
                isFirstLine = false;
              } else {
                const values = line.split(',');
                const record = headers.reduce((obj, header, index) => {
                  obj[header] = values[index];
                  return obj;
                }, {});
                objectsArray.push(record);
            }
        })
        rl.on('close', ()=> {
            resolve(objectsArray)
        })
        rl.on('error', (error)=> {
            console.error('error in reading file',error)
            reject('file is not read')
        })
    })

}


module.exports = {readFile}