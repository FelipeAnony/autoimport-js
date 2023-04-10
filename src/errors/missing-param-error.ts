export class MissingParamError extends Error {
    constructor(private paramName: string) {
        super('MissingParamError');
        this.message = `Missing param: ${paramName}`;
    }
}
