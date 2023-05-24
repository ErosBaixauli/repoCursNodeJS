//Deprecated way to import
//const Task = require('./models/task');
//const { showMenu,pause } = require('./helpers/messages')


import colors from 'colors';
import { inquirerMenu,inquirerPause, readInput} from './helpers/inquirer.js';
import {Tasks} from './models/tasksManager.js';
import {saveToDB,readFromDB} from './helpers/remanence.js'


const main = async() => {

    let opt;
    const tasks = new Tasks();
    const storedTasks = readFromDB();
    if (storedTasks){
        tasks.readStoredTasks(storedTasks);
    }
    
    do {
        opt = await inquirerMenu();
        
        switch (opt){
            case 1:
                const desc = await readInput('Description: ');
                tasks.createTask(desc);
                break;
            case 2:
                console.log(tasks.listArray);
                break;
        }

        saveToDB(tasks.listArray);

        if (opt !== '0') await inquirerPause();
    
    } while (opt !== 0);
}

main();