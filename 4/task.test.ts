import { main } from "./index";

describe("test main function", () => {
    it("should return 4 for test input", () => {
        expect(main('./4/test_input.txt')).toBe(4);
    });
});