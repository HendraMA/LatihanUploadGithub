// var a = 'sasuke'
// console.log(a.endsWith('e',1))


// function kuadrat(x=5){
//     console.log(x*x);
//    }


// var nama = (a) => {
//     console.log('Hello ${a}')
// }

// nama('Andi')
   

// let x = function () {
//     console.log('Hai ini X!');
//     };
//     let y = function (callback) {
//     console.log('Halo ini Y!');
//     callback();
//     };
//     y(x);

var duplikatSetInterval = (fn, num) => {
    for (var i = 0; ; i++){
        if(i == (num*1000000)){
            fn()
            i = 0
        }
    }
}

duplikatSetInterval(hello, 1000)
