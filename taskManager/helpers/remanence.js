import fs from 'fs';

const file = './database/data.json';

const saveToDB = ( data ) => {

    fs.writeFileSync(file, JSON.stringify(data));

}

const readFromDB = () => {

    if (!fs.existsSync(file)) return null;

    const dataFile = JSON.parse(fs.readFileSync(file, {encoding: 'utf-8'}));
    
    return dataFile;
}

export {saveToDB, readFromDB}