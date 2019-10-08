describe("Drink About", function() {
	describe("Age test", function() {
		it("should return incorrect age", function() {
			expected(whatCanIDrink(age)).toBe(0);
		});
	});
});
