import { select } from '@inquirer/prompts';
import { listFilesInDirectory } from '../services/ListFiles.js';
import { selectFolder } from '../win/selectFolder.js';
import { backToMenu } from '../utils/backToMenu.js';

let pathdirectory;

export const main = async () => {
    console.clear();
    const menu = await select({
        message: 'Welcome! What do you want to do?',
        choices: [
            {
                name: 'List files',
                value: 'listFiles',
            },
            {
                name: 'Select Folder',
                value: 'selectFolder',
            },
            {
                name: 'Exit',
                value: 'exit',
            },
        ],
    });

    switch (menu) {
        case 'listFiles':
            /*If no has an directory*/
            if (!pathdirectory) {
                console.clear();
                console.log('No directory selected.');
                console.log('SELECT A DIRECTORY TO LIST FILES.');

                /*Option: Back To menu*/
                await backToMenu();
            } else {
                console.clear();
                const listOfFile = await listFilesInDirectory(pathdirectory);
                console.log(`\n${listOfFile}\n`);

                /*Option: Back To menu*/
                await backToMenu();
            }
            break;

        case 'selectFolder': {
            console.clear();
            console.log('Select Folder option selected.');

            const selectedFolder = selectFolder();

            pathdirectory =
                selectedFolder === null ? pathdirectory : selectedFolder;

            console.log('Selected directory:', pathdirectory);

            /*Option: Back To menu*/
            await backToMenu();
            break;
        }

        case 'exit':
            console.log('Exiting...');
            console.clear();
            break;
    }
};
