describe("Money", () => {
    describe("::add() -valeur", () => {
        it("addMoney", () => {
            A = new Money(50, "us");
            B = new Money(70 ,"us");
            expect(A.add(B).getamount()).toEqual(120);
        })

    });
    describe("::add() -Exception", () => {
        it("addMoney", () => {
            A = new Money(50, "us");
            B = new Money(70 ,"u");
            expect(()=>{ A.add(B); }).toThrow(new Error(),"currency not equal");
        })

    });
});

