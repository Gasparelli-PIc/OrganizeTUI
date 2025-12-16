import { execSync } from 'child_process';

export function selectFolder() {
    const psCommand = `
  [Console]::OutputEncoding = [System.Text.Encoding]::UTF8;
  Add-Type -AssemblyName System.Windows.Forms;
  $dialog = New-Object System.Windows.Forms.FolderBrowserDialog;
  $dialog.Description = 'Selecione uma pasta';
  if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
      Write-Output $dialog.SelectedPath
  }
  `;

    try {
        const result = execSync(
            `powershell -STA -NoProfile -Command "${psCommand.replace(/\r?\n/g, ' ')}"`,
            { encoding: 'utf8' }
        ).trim();

        return result || null;
    } catch (error) {
        console.error('Error selecting folder:', error);
        return null;
    }
}
