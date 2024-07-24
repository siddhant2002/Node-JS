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