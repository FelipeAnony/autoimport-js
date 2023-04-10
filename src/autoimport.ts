import { BadPathError, MissingParamError } from './errors';
import { FsHelper } from './helpers/fs-helper';

const folderPathRegExp = /^(\/[a-zA-Z0-9_\-]+)+\/?$/;

export const autoimport = async (folderPath: string) => {
    if (!folderPath) throw new MissingParamError('folderPath');
    if (!folderPathRegExp.test(folderPath)) throw new BadPathError();

    const filesList = await FsHelper.getAllFilesPathFromFolder(folderPath);
};
