import fs from "fs";

export const parseInput = (path: string) => {
    return fs.readFileSync(path,'utf8').split('\n').filter(string => string != '');
}
