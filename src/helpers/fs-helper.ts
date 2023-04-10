import * as fs from 'fs/promises';

export const FsHelper = {
    async getAllFilesPathFromFolder(folderPath: string) {
        const files = await fs.readdir(folderPath);
        return files.filter((file) => file.endsWith(".ts") || file.endsWith(".js"));
    }
};