/*  3) Написать функцию every, которая будет принимать первым аргументом массив, а
вторым функцию колбэк(которая будет принимать каждый элемент массива и
возвращать true либо false). Результатом функции должно быть логическое
выражение true/false в зависимости от того, выполняется ли условие для каждого
из элементов. */

/*    every([8, 2, 4], function (num){
        return num%2===0
    })    */


function every(arr){

    if (typeof arr !== 'object' || arr.length <= 1 || arr === ''){
        return 'error'
    }

    for (let i=0;i<arr.length;i++){
        if (cb(arr[i]) !== true){
            return false
        }
    }
    return true;
}

function cb(num){
    return num%2===0
}


console.log(every([8, 2, 4])) // true

module.exports = every;