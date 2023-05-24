import {Task}  from './task.js';

class Tasks {
    _list = {};
    
    constructor(){
        this._list = {};
    }

    get listArray(){
        const list = [];
        Object.keys(this._list).forEach(key => {
            list.push(this._list[key]);
        });

        return list;
    }

    readStoredTasks(tasks){
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    createTask( desc = '' ){
        const task = new Task(desc);
        this._list[task.id] = task;
    }
}

export {
    Tasks
}