import inquirer from 'inquirer';
import colors from 'colors';

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'Choose an option',
        choices: [
            {
                value:1,
                name:`${'1.'.green} Create task`
            },
            {
                value:2,
                name:`${'2.'.green} List tasks`
            },
            {
                value:3,
                name:`${'3.'.green} List completed tasks`
            },
            {
                value:4,
                name:`${'4.'.green} List pending tasks`
            },
            {
                value:5,
                name:`${'5.'.green} Complete task`
            },
            {
                value:6,
                name:`${'6.'.green} Erase task`
            },
            {
                value:0,
                name:`${'0.'.green} Exit`
            }
        ]
    }
];

const pauseOpt = [
    {
        type: 'input',
        name: 'pause',
        message: `Press ${'ENTER'.green} to continue...\n`
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('*************************'.green);
    console.log('    Choose an option');
    console.log('*************************\n'.green);

    const {option} = await inquirer.prompt(menuOpts)

    return option;
}

const inquirerPause = async() => {
    await inquirer.prompt(pauseOpt)
};

const readInput = async( message ) => {
    const taskDesc = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if (value.length === 0) return 'A description is needed';
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(taskDesc);

    return desc;
}


export {
    inquirerMenu,
    inquirerPause,
    readInput
}