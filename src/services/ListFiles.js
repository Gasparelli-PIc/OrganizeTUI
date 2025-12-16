import fs from 'fs';
import path from 'path';

/* Função de listar arquivos do diretorio */
export async function listFilesInDirectory(directoryPath) {
    /* Mostrar Diretorio que sera usado */
    console.log('Directory being used:');
    console.log(directoryPath);

    let output = '';

    try {
        const listFiles = fs.readdirSync(directoryPath);
        console.log('Files in the directory:');
        /* Lista de arquivos */
        listFiles.forEach((file) => {
            const base = path.basename(file, path.extname(file));
            const ext = path.extname(file);
            output += `${base} (${ext === '' ? 'Possible Folder' : ext})\n`;
        });
        return output;
    } catch (error) {
        const erro = `Error reading the directory: ${error}`;
        return erro;
    }
}
