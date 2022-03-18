// function getResult(string) {
//  return string[0].toUpperCase() + string.substring(1, string.length);
// }

// console.log(getResult('имя'),'==','Имя');



// function getResult(array) {
//     var s = 0;
//     for(let i = 0; i < a.length; i++) {
//         s =s + array[i];
//     }
//     return s;
// }

// console.log(getResult([1, 2, 3, 4, 5]), '==', 15)
// console.log(getResult([-1, -2, -3, -4, -5]), '==', -15)
// console.log(getResult([-2, -2, 0, 4]), '==', 0)



// function getResult(a) {
//     var a = ['0','1','2','3','4','5',
//                 '6','7','8','9'];
//     for (let i = 0; i < a.length; i++) {
//         s = s.replace(a[i], '!');
//     }

//     return s;

// }

// console.log(
//     getResult('Текст с числами 2 и 3 до 5.'),
//     '==',
//     'Текст с числами ! и ! до !.'
// );



function getResult(string){
    var symbols = {
        "А": "0","Б": "1","В": "2","Г": "3","Д": "4","Е": "5",
        "Ё": "6","Ж": "7","З": "8","И": "9","Й": "10","К": "11",
        "Л": "12","М": "13","Н": "14","О": "15","П": "16","Р": "17",
        "С": "18","Т": "19","У": "20","Ф": "21","Х": "22","Ц": "23",
        "Ч": "24","Ш": "25","Щ": "26","Ъ": "27","Ы": "28","Ь": "29",
        "Э": "30","Ю": "31","Я": "32"
    }
    var str = string;
    var numbers = str.replace(/./gi,$0=>symbols[$0.toUpperCase()]||$0);

    return numbers;
}

console.log(getResult('А.р.б.у.з'), '==', '0.17.1.20.8');