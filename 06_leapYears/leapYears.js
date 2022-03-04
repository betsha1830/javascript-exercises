const leapYears = function(year) {

    /* 

        PROBLEM

        Figure out if a year is a leap year or not with the given conditions.

        CONDITIONS

        1- If a year is divisible by 100, IT IS NOT A LEAP YEAR.
        2- If a year is not divisbile by 100 but is divisible by 400 then it is a leap year.
        3- If a year is also divisible by 4 is a leap year as well.

        SOLUTION

        1- Check if year is divisible by 100.
            1.1- If not divisible check if it is divisible by 400 as well.
                1.1.1- If true then it is a leap year.
            1.2- If divisible by 100 year is not leap year.
        2- Check if year is divisible by 4.
            2.1- If not divisible year is not leap year.
            2.2- If divisible year is leap year.

    */
    
    if ((year % 100 == 0) && ((year % 400 == 0))) { // if year is divisible by 100 it is NOT a leap year
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else if ((year % 4 == 0)) {
        return true;
    }
     
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
