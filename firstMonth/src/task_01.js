// 1) Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце

function getDays(year, month){

    if (typeof year !== 'number' || year === '' || month === undefined || month === '' || year > 2100){
        return false
    }

    if (typeof month === 'string'){
        let mnth = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
        month = mnth.indexOf(month) + 1;
    }

    if (year%4===0 && month === 2){   // Высокосный
        return 29;
    }
    if (month===7 || month===8 ){   // Июле и августе всегда 31 день. но можна и убать (строка 21)
        return 31;
    }
    if (month===4 || month===6 || month ===9 || month ===11){
        return 30;
    }


    return 31;
}


console.log(getDays( '2020' , 2)) // 29
console.log(getDays( 2021 , 4)) //30
console.log(getDays( 2024 , 'April')) //30

module.exports = getDays;
