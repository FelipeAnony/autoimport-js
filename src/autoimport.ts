import { BadPathError } from "./errors";

const folderPathRegExp = /^(\/[a-zA-Z0-9_\-]+)+\/?$/;

export const autoimport = (folder: string) => {
    if (!folderPathRegExp.test(folder)) throw new BadPathError();
}