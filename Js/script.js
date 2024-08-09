// var x=10;

// console.log(x);
// function task()
// {
//     var x=100;
//     console.log(x);
// }
// a=7;
// let p=100;
// console.log(p);



// Block scope

// let b=100;

// {
//     let b=1;
//     const c=5;
//     var a=10;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);
// console.log(a);


// Closures

// function z()
// {
//     var a=10;
//     function y()
//     {
//         console.log(a);
//         var a=5;
//         function x()
//         {
//             console.log(a);
//             return x;
//         }
//         x();
//         return y;
//     }
//     y();
// }
// var data = z();

// print(z);

// function x()
// {
//     var i=1;
//     setTimeout(function () {
//         console.log("hello");
//     }, 1000)
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
//     console.log(6);
//     console.log(7);
//     console.log(8);
//     console.log(9);
//     console.log(10);
//     console.log(11);
// }

// x();

// function a()
// {
//     console.log("Hi");
// }

// var b = function ()
// {
//     console.log("Helio");
// }

// var c = function xyz()
// {
//     console.log("Heliiiooo");
//     // xyz();
// }

// a();
// b();
// c();
// xyz();  Error


// setTimeout(function(){
//     console.log("Wait");
// },5000);

// function x(y)
// {
//     console.log("Heloo");
//     y();
// }

// x(function y(){
//     console.log("hii");
// });


// function listenEvent()
// {
//     let count=0;
//     document.getElementById("clicki").addEventListener("click", function xyz()
//     {
//         console.log("button clicked", ++count);
//     });
// }

// listenEvent();
// console.log(count);


// function x()
// {
//     console.log("Hello");
// }

// function y(val)
// {
//     val();
// }
// y(x);

const radius = [3,2,1,6];


const calculateArea = function (radius)
{
    return Math.PI * radius * radius;
};

const calculateCircumference = function (radius)
{
    return 2 * Math.PI * radius;
};

const calculateDiameter = function (radius)
{
    return 2 * radius;
}

// const area = function (radius, logic)
// {
//     const output=[];
//     for(let i=0;i<radius.length;i++)
//     {
//         output.push(logic(radius[i]));
//     }
//     return output;
// };

// console.log(area(radius,calculateArea));


// console.log(radius.map(calculateArea));
// console.log(radius.map(calculateCircumference));
// console.log(radius.map(calculateDiameter));


// Array.prototype.area = function (logic)
// {
//     const output=[];
//     for(let i=0;i<this.length;i++)
//     {
//         output.push(logic(this[i]));
//     }
//     return output;
// };

// console.log(radius.area(calculateArea));
// console.log(radius.area(calculateCircumference));
// console.log(radius.area(calculateDiameter));


// const arr = [3,5,1,2,8,4,7,9,10,43,34];

// function double(val)
// {
//     return val*2;
// }

// function triple(val)
// {
//     return val*3;
// }


// console.log(arr.map(double));
// console.log(arr.map(triple));

// console.log(arr.map((val) => val*2));

// console.log(arr.map((val) => val*3));

// console.log(arr.map((val) => val.toString(2)));

// function isOdd(x)
// {
//     return x%2;
// }

// function isEven(x)
// {
//     return x%2===0;
// }

// console.log(arr.filter(isEven));


// we will use reduce
const arr = [3,5,1,2,8,4,7,9,10,43,34];

function sum(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}

// console.log(sum(arr));

// console.log(arr.reduce(function (acc, cur){
//     acc=acc + cur;
//     return acc;
// },0));

// console.log(arr.reduce(function (acc, cur){
//     if(cur>acc)
//     {
//         acc=cur;
//     }
//     return acc;
// }, arr[0]));

// const user = [
//     {firstName: "Siddhant", lastName: "Mallick", Age: 22, company: "IBM"},
//     {firstName: "Phalguni", lastName: "Mishra", Age: 22, company: "LTTS"},
//     {firstName: "Rajiv", lastName: "Mishra", Age: 22, company: "IBM"},
//     {firstName: "Atish", lastName: "Tripathy", Age: 22, company: "IBM"},
//     {firstName: "Sahil", lastName: "Jaiswal", Age: 22, company: "IBM"},
//     {firstName: "Pratik", lastName: "Raj", Age: 22, company: "Bentley"},
//     {firstName: "Chottwant", lastName: "Saw", Age: 22, company: "TCS"},
// ]

// // get the first and last names

// console.log(user.map((val) => val.firstName+" "+val.lastName));


// callback hell
// cart = ["shoes", "carpet", "grocery"];

// api.createOrder(cart, function(orderId){
//     api.proceedToPayment(orderId, function(paymentInfo){
//         api.showOrderSummary(paymentInfo, function(){
//             api.updateBalanceSummary();
//         });
//     });
// });


// using promises

// cart = ["shoes", "grocery", "coal"];

// createOrder(cart)
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//     return updateBalanceSummary();
// });