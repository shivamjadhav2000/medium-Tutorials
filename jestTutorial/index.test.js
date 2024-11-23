// index.test.js
const calculateDiscount=require('./index');
test('returns the calculateDiscount',()=>{
    expect(calculateDiscount(100,10)).toBe(90);
    expect(calculateDiscount(100,20)).toBe(80);
    expect(calculateDiscount(100,30)).toBe(70);
    expect(calculateDiscount(100,90)).toBe(10);
    expect(calculateDiscount(100,100)).toBe(0);
    expect(calculateDiscount(100,0)).toBe(100);
    expect(calculateDiscount(100,101)).toBe("Invalid Discount");
    expect(calculateDiscount(100,-1)).toBe("Invalid Discount");
    expect(calculateDiscount(100,"")).toBe("Invalid Discount");
    expect(calculateDiscount(100,"abc")).toBe("Invalid Discount");
    expect(calculateDiscount(100,undefined)).toBe("Invalid Discount");
    expect(calculateDiscount(100,NaN)).toBe("Invalid Discount");
    expect(calculateDiscount(100,Infinity)).toBe("Invalid Discount");
    expect(calculateDiscount(100,-1.1)).toBe("Invalid Discount");
});