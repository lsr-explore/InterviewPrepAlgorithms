/**
 * Created by laurie on 2/4/2015.
 */

function factorial(aNumber)
{
// If the number is not an integer, round it down.
    aNumber = Math.floor(aNumber);

// The number must be equal to or bigger than zero
    if (aNumber < 0)
    {
        return "undefined";
    }

    if ((aNumber == 0) || (aNumber == 1))
    { // If the number is 0 or 1, its factorial is 1.
        return 1;
    }
    else
    { // Make a recursive call
        return (aNumber * factorial(aNumber - 1));
    }
}

