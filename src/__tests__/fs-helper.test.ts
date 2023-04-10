import { FsHelper } from "../helpers/fs-helper";
import path from "path";

describe('File System helper', () => {
    it('Should return a list of all files inside a given folder path', async () => {
        const filesList = await FsHelper.getAllFilesPathFromFolder(path.join(__dirname, "/test-folder"));

        expect(filesList).toEqual([
            "file-1.ts",
            "file-2.ts",
            "file-3.ts"
        ]);
    })
})
