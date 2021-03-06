///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const foodTotals = cart.reduce((x,y) => x + y.price, 0)

// console.log(summedPrice)



const summedPrice = cart.reduce((x,y)=> x + y.price, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/
// const calcFinalPrice = cart.map(num => num.price * num.tax + num.price)

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal * tax + cartTotal)-couponValue
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    for the customer object on the cart page it will have 4 properties.  The first is item will be the name of the food as a string.  The next will be the price of the food as a numerical value.  The next will be the the tax percentage as a numerical value.  and the last property will be how many servings as a numerical value

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customerCart = {
    name: 'pizza',
    price: 9.99,
    tax: .07,
    servings: 1
}
