import { confirm } from '@inquirer/prompts';
import { main } from '../cli/main.js';

export const backToMenu = async () => {
    const back = await confirm({
        message: 'Do you want to return to the main menu? (y/n)',
    });
    if (back) {
        await main();
    } else {
        console.log('Exiting...');
        console.clear();
    }
};
