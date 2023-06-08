import {getMonth} from "./index.js";

describe('test getMonth function', () => {
   const n = 1;
   const a = 13;
   const x = NaN;

   const error = 2

   it("checking a function for true, false and NaN", () => {
      expect(getMonth(n)).toBe(`${n} - январь`);
      expect(getMonth(a)).toBe(`${a} - не является числовым обозначением месяца`);
      expect(getMonth(x)).toBe(`error`);
      expect(getMonth(error)).toBe(`${error} - январь`);
   });
});