describe("Drink About", function() {
	describe("Age check", function() {
		it("should have a value", function() {
			expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return Drink Toddy if age given is 13", function() {
            expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });
        it("should return Drink Coke if age given is 17", function() {
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("should return Drink Beer if age given is 20", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("should return Drink Toddy if age given is 129", function() {
            expect(whatCanIDrink(129)).toBe("Drink Whiskey");
        });
	});
});
