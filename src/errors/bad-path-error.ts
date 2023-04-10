export class BadPathError extends Error {
    constructor() {
        super('BadPathError');
        this.message = 'Invalid folder path';
    }
}
