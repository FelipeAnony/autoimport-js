import path from "path";

import { autoimport } from '../autoimport';
import { BadPathError, MissingParamError } from "../errors";

describe('Autoimport', () => {
    it("Should throws MissingParam error if theres no folder path provided", () => {
        expect(autoimport).toThrow(new MissingParamError("folderPath"));
    });

    it('Should throws a BadPath error if an invalid folder path is provided', () => {
        expect(() => autoimport("1nvalid folder path")).toThrow(new BadPathError());
    });
})
