# CodeInstitute

Interactive Frontend Development - Test-Driven Development Using Jasmine

## Drink About Challenge


Your challenge is to write some tests for the Drink About game.

Drink About is a simple function that will check the age and return a drink appropriate for your age. Create a function called whatCanIDrink. This function should take in age as parameter. The function should do the following:

-   If the age is less than 0, then it should return "Sorry. I can’t tell what drink because that age is incorrect!"
-   If the age is less than 14, then it should return "Drink Toddy"
-   If the age is less than 18, then it should return "Drink Coke"
-   If the age is less than 21, then it should return "Drink Beer"
-   If the age is less than 130, then it should return "Drink Whisky"
-   Else return "Sorry. I can’t tell what drink because that age is incorrect!"

1.  Description - Check age and recommend a drink
        a. Testing the age
        b. Want to get age  <0
        c. Expecting the age return "Sorry. I can’t tell what drink because that        age is incorrect!"
2.  (whatCanIDrink age).toBe(<0) -> calcSpec.js
describe(“Drink About”, function() {
	describe (“Age check”, function() {
		it (“should have a value”, function() [
			expected(whatCanIDrink).toBe();
		});
	});
});
 
Test failed: 1 spec 1 failure - expected is not defined

3.	calc.js
whatCanIDrink = function(age) {
		if(age<0) {
		return  "Sorry. I can’t tell what drink because that age is incorrect!"
4.	calcSpec.js
	expected(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
 
Test passed
 
5.	
calc.js, final

1   whatCanIDrink = function(age) {

2   	if(age<0) {

3   	return  "Sorry. I can’t tell what drink because that age is incorrect!"

4	    }

5       if(age<14) {

6   		return  "Drink Toddy";

7   	}

8       if(age<18) {

9		    return  "Drink Coke";

10  	}

11      if(age<21) {

12  		return  "Drink Beer";

13  	}

14      if(age<130) {

15  		return  "Drink Whiskey";

16  	} else {

17   		return  "Sorry. I can’t tell what drink because that age is incorrect!"

18      }

19  };
 
 
calcSpec.js, final

1   describe(“Drink About”, function() {

2   describe (“Age test”, function() {

3 	    it(“should have a value”, function() {

4		    expected(whatCanIDrink(-1).toBe("Sorry. I can’t tell what drink because that age is incorrect!");

5	    it(“should return Drink Toddy if given age is 13”, function() {

6			    expected(whatCanIDrink(13)).toBe("Drink Toddy");

7		    });

8       it(“should return Drink Coke if given age is 17”, function() {

9			    expected(whatCanIDrink(13)).toBe("Drink Coke");

10		    });

11      it(“should return Drink Beer if given age is 20”, function() {

12			    expected(whatCanIDrink(13)).toBe("Drink Beer");

13		    });

14      it(“should return Drink Whiskey if given age is 129”, function() {

15			    expected(whatCanIDrink(13)).toBe("Drink Whiskey");

16		    );

17      it(“should return can’t tell what drink if given age is 131”, function() {

18			    expected(whatCanIDrink(13)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");

19		    });
20	
21		    });

22	    });

23  });
