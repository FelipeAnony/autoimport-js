import { BadPathError, MissingParamError } from './errors';

const folderPathRegExp = /^(\/[a-zA-Z0-9_\-]+)+\/?$/;

export const autoimport = (folderPath: string) => {
    if (!folderPath) throw new MissingParamError('folderPath');
    if (!folderPathRegExp.test(folderPath)) throw new BadPathError();
};
