   1. it will print "3", because the variable type of i is var and it has function scope; in for loop the i value increased to 3, that's why the program prints 3. 
   
   2. it will print "150", because the variable type of discountedPrice is var and it has function scope; So in the last for loop the value of 150 will be assigned to discountedPrice.
   discountedPrice = prices[2]*(1-0.5), the prices[2] is 300, therefore 150 assigned to the discountedPrice.

   3. it will print "150", because the variable type of finalPrice is var and it has function scope; So in the last for loop the value of 150 will be assigned to finalPrice.
   finalPrice = [150 * 100] / 100  therefore 150 assigned to the finalPrice.

   4. it will not print anything, because we don't have console.log command to print any value. However,
   it will return the "discounted" array but we will not save the returned value to any variable. 

    5. ReferenceError: i is not defined, because the variable type of i is let and it has block scope, that's why it gives us the error since the console.log command is outside of the block that i has declared. 

    6. ReferenceError: discountedPrice is not defined, because the variable type of discountedPrice is let and it has block scope, that's why it gives us the error since the console.log command is outside of the block that discountedPrice has declared. 

    7. it will print "150" because console.log command is in the same block that finalPrice is declared and the last value that is assigned to the finalPrice is 150 = [150 * 100] / 100.
   
   8. it will not cause any error and return the discounted array; however the returned values will not save anywhere. 
   
   9. ReferenceError: i is not defined, because the variable type of i is let and has block scope and console.log is outside of the for loop block, so it gives us an error. 
   
   10.   it will print "3", because the variable type is const and it is in the same block as console.log command is. 

    11.    it will not cause any error and return the discounted array; however the returned values will not save anywhere.
   
   12. A. student.name;
       B. student["Grad Year"];
       C. student.greeting();
       D. student["Favorite Teacher"].name;
       E. console.log(student.courseLoad[1]);

    13. A. '3' + 2 output is '32'. integer map to their exact string representation and + operator stands for string concatenation. 
        B. '3' - 2 output is 1. The subtraction operator, subtracts the two operands and produce their difference; that's why it converts string to an integer.
        C. 3 + null output is 3. since 3 is an integer, based on numeric conversion rules null converts to zero.
        D. '3' + null output is '3null'. since 3 is a string type, + operator stands for string concatenation and consider null as a string.
        E. true + 3 output is 4. Since 3 is an integer type, + operator stands for add and true converts to 1 based on numeric conversion rele. 
        F. false + null output is 0. 
        Based on Numeric conversion rules, false and null become zero.
        G. '3' + undefined output is '3undefined'. since 3 is a string type, + operator stands for string concatenation and consider undefined as a string.
        H. '3' - undefined output is NaN. Based on Numeric conversion rules, undefined value becomes NaN and 3 - NaN gives us NaN.
    14. A. '2' > 1 output is true. When comparing values of different types, JavaScript converts the values to numbers. So, 2 is greater than 1. 
        B. '2' < '12' output is false. Since both of our operators are stirngs, it compares the first character of both strings which is two and one. So based on lexicographical order, two is bigger than one. 
        C. 2 == '2' output is true. When comparing values of different types, JavaScript converts the values to numbers.Therefore, 2 is equal to 2. 
        D. 2 === '2' output is false. Becasue === operator checks the datatype of variables that's why the output is false. 
        E. true == 2 output is false. True becomes one, so one is not equal to two. 
        F. true === Boolean(2) output is true. Boolean(2) becomes true, so, true is equal to ture. 

    15. == is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but it checks datatype and compare two values. 
   
   17. [2, 4, 6]. We pass two arguments to the modifyArray function, one of the argument is array and other one is function. After declaring the constant array in line 2, then inside of for loops, the function doSomething is called and passed a value of index zero in an array as argument to the function. Since the value of index zero is one, it will be multiplied to two and then we push the answer to the newArr array. and we do this process three times, since the length of the array is three. 


    19. 1 4 3 2 