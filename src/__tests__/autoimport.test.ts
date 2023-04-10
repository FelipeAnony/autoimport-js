import { autoimport } from '../autoimport';
import { BadPathError } from "../errors";

describe('Autoimport', () => {
    it('Should throws a BadPath error if an invalid folder path is provided', () => {
        expect(() => autoimport("1nvalid folder path")).toThrow(new BadPathError());
    })
})
