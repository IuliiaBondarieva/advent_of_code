import { parseInput } from "../utils/parceInput";

// [6,8]
// [5,10]

// [4,8]
// [5,10]

// [4,8]
// [9,10]

// [49,71]
// [49,88]

export const main = (inputPath: string) => {
    const parsedInput = parseInput(inputPath);
    let amountOfCompletelyOverlap = 0;

    for(let i=0; i < parsedInput.length; i++) {
        const ranges = parseRanges(parsedInput[i]);

        if(ranges.first.start < ranges.second.start && ranges.first.end < ranges.second.start)  {

        } else if(ranges.second.start < ranges.first.start && ranges.second.end < ranges.first.start) {

        } else {
            amountOfCompletelyOverlap++;
        }
    }

    return amountOfCompletelyOverlap;
};

const parseRanges = (ranges: string) => {
    const parsedRanges = ranges.split(',').map(range => range.split('-').map(number => Number(number)));

    return {
        first: {
            start: parsedRanges[0][0],
            end: parsedRanges[0][1]
        },
        second: {
            start: parsedRanges[1][0],
            end: parsedRanges[1][1]
        }
    }
}