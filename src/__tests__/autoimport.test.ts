import path from 'path';

import { autoimport } from '../autoimport';
import { BadPathError, MissingParamError } from '../errors';
import { FsHelper } from '../helpers/fs-helper';

describe('Autoimport', () => {
    it('Should throws MissingParam error if theres no folder path provided', async () => {
        await expect(autoimport).rejects.toThrow(
            new MissingParamError('folderPath'),
        );
    });

    it('Should throws a BadPath error if an invalid folder path is provided', async () => {
        await expect(() => autoimport('1nvalid folder path')).rejects.toThrow(
            new BadPathError(),
        );
    });

    it('Should calls FsHelper with correct value', async () => {
        const getAllFilesPathSpy = jest.spyOn(
            FsHelper,
            'getAllFilesPathFromFolder',
        );
        getAllFilesPathSpy.mockImplementationOnce((path: string) =>
            Promise.resolve([]),
        );

        await autoimport('/valid/folder');

        expect(getAllFilesPathSpy).toBeCalledWith('/valid/folder');
    });

    it('Should return an Array With all dependencies', async () => {
        const [{ module1 }, { module2 }, { module3 }] = await autoimport(
            path.join(__dirname, '/test-folder'),
        );

        expect(module1).toEqual({ name: 'module1' });
        expect(module2).toEqual({ name: 'module2' });
        expect(module3).toEqual({ name: 'module3' });
    });
});
