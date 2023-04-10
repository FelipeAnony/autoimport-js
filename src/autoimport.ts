import { BadPathError, MissingParamError } from './errors';
import { FsHelper } from './helpers/fs-helper';

const folderPathRegExp = /^(\/[a-zA-Z0-9_\-]+)+\/?$/;

/**
 * Retrieves and returns dynamically imported files from a folder.
 *
 * @param {string} folderPath - The absolute path of the folder to retrieve files from.
 * @throws {MissingParamError} - Throws if `folderPath` is not provided.
 * @throws {BadPathError} - Throws if `folderPath` is not a valid path.
 * @returns {Promise<Array<*>>} - Returns a promise that resolves to an array of dynamically imported files.
 */
export const autoimport = async (folderPath: string) => {
    if (!folderPath) throw new MissingParamError('folderPath');
    if (!folderPathRegExp.test(folderPath)) throw new BadPathError();

    const filesList = await FsHelper.getAllFilesPathFromFolder(folderPath);
    const files = await Promise.all(filesList.map(async (file) => await import(file)));

    return files;
};
