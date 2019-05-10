'use strict';   //значит что мы пишем с использованием нового стандарта ES6 

//console.log(second); //выводим в консоль значение переменной leftBorderWidth
/*var leftBorderWifth = 1; {
    let second = 2;
}
const pi = 3.14;
console.log(leftBorderWifth);
console.log(second); */

var number = 5;             //тип данных число
//console.log(6/0);           //выводит в консоль значнеие - infinity
//console.log('udemy'*76);    //выводит в консоль значение - NaN (not a number)

var string = "Hello!";      //строка. обязательно пишется в кавычках, 
                            //одинарных или двойных

var sym = Symbol();         //новый тип данных Символ

var boolean = true;         //логическое выражение может быть либо true либо false

null;                       //что-то в коде, чего не существует
//console.log(something);     //получаем ошибку something is not defined

undefined;                  //объект существует, но значения не имеет
let something;
//console.log(something);     //получаем сообщение undefined

var obj = {};               //комплексны тип данных, может содержать в себе 
                            //любой вышеобозначенный а также много различных свойств

let persone = {             //создаем объект person
    name: "Лукас",          //присваиваем ему характеристику с ключём name и значением Лукас имеющим текстовый тип
    age: 38,                //возраст имеет тип число                 
    isMarried: false        //семейное положение имеет логический тип - ложь 
};

//можно добраться до любого свойства объекта тремя способами

//console.log(persone.name);  //самый частоиспользуемый способ
//console.log(persone["name"]);   //применяется в случае, если нужное свойство имеет очень длинное имя...

let arr = ['дыня','яблоко','груша']; //массив из трёх элементов - это тоже тип Объект

//console.log(arr[2]);         //в консоли получаем значение "груша". выпало третье, потому что JS начинается отсчёт с 0

//alert('Hello, WORLD!');        //покажет самое простое  модальное окно с надписью Hello, WORLD! все остальные 

//confirm('Ты здесь?');          //покажет окно с заданной надписью и с кнопками Ок и Отмена

//попробуем задействовать кнопки из окна, для этого создадим переменную answer, которой присвоим значение ответа

//let answer = confirm('Ты здесь?');
//console.log(answer);            //в консоли браузера получаем значение true или false

//let answer = prompt('Есть ли вам 21?', 'Да'); //покажет модальное окно с запросом информации и полем, 
                                                //куда её нужно ввести. после запятой указывается значение по умолчанию
//console.log(answer);            //в консоли браузера получаем значение которое было введено в качестве ответа
                                //это значение всегда будет иметь тип данных Строка

//console.log(typeof(answer));   //получаем сообщение string

//console.log(typeof(arr));       //сообщение object

//console.log(typeof(number));    //сообщение number

// console.log(4 + " - object");

// let answer = +prompt('Есть ли вам 21?', 'Да');  //знак + превращает строку в число
// console.log(typeof(answer));                    //получим сооьщение number

// console.log(4 + +" - object");                  //получим сообщение NaN (not a number), т.к. второй знак + преобразовал
//                                                 //строку " - object" в тип number, но на самом деле числа там нет

let incr = 10,
    decr = 10;

    incr++;             //инкремент - увеличение переменной на 1
    decr--;             //декремент -  уменьшение переменной на 1
    console.log(incr);  //получаем значение 11
    console.log(decr);  //получаем значение 9
    console.log(++incr);  //постфикс получаем значение 12
    console.log(decr--);  //префикс получаем значение до 9

    console.log(678%75);    //знак % показывает остаток от деления

    console.log(3 + 4 * 5); //получаем значение 23
    console.log(4 * 3 ** 2);  //двойная звездочка после тройки значит 3 в квадрате
    var a;
    var b;
    console.log(a=b=7); //оператор присваивания возвращает тот результат, который
                        //присваивает. сначала b становится равным 7, 
                        //а затем a принимает значение и

    
/* новички часто испытывают сложности с оператором  =
= - это присваивание
== - это проверка на равенство
=== - строгая проверка по типам данных */
console.log("2" == 2);  //получаем значение true, т.к. двойной знак равенства 
                        //сранвивание именно значения 2 и 2
console.log("2" === 2); //получаем значение false, т.к. тройной знак равенства 
                        //сравнивает типы данных, а это строка и число


//оператор И - && - возвращает возвращает значение true если оба занчение являются правдивыми

let isChecked = true,
    isClose = true;

console.log(isChecked && isClose); //получаем значение true, т.к. обе переменные имеют одинаковое значение

let isChecked2 = true,
    isClose2 = false;
console.log(isChecked2 && isClose2); //получаем значение false, т.к. обе переменные имеют разное значение

/* пример оператора И: вы с другом гуляете в жаркий день и хотите пить. вы сможете купить по бутылке воды только в том случае,
если у каждого из вас есть на неё деньги */

let isChecked3 = true,
    isClose3 = false;
console.log(isChecked3 || isClose3); //получаем значение TRUE. занчение FALSE мы получим только в случае если обе переменные равны FALSE

// операторы И ИЛИ используются очень часто. при их помощи можно проверить, отмечены ли чекбоксы, открыто ли модальное окно

//оператор отрицания ! - меняет значение на противоположное 

let isChecked4 = false,
    isClose4 = false;
console.log(isChecked4 || !isClose4); //получаем значение TRUE, т.к. в контекте значение переменной  isClose изменилось на противоположное


