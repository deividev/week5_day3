# week5_day3 Fechas
Ejercicios de Fechas en Javascript

* Crear una función para decir el parámetro pasado es Date o No.
```
Test Data :
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));
Output :
false
true
true
false
```

* Crear una función para devolver la fecha actual que reciba por parámetro el separador de las fechas.
```
Note : Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014"
```

* Crear una función que devuelva el número de dias de un mes.
```
Test Data :
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
Output :
31
29
30
31
```

* Crear una función que devuelva el mes de una fecha.
```
Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output :
"October"
"November"
```

* Crear una función que compare dos fechas y devuelva un string indicando cúal es mayor.
```
Test Data :
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
Output :
"Date1 = Date2"
"Date1 > Date2"
"Date2 > Date1"
```

* Crear una función que añada minutos a una fecha.
```
Test Data :
console.log(add_minutes(new Date(2014,10,2), 30).toString());
Output :
"Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
```

* Crear una función que compruebe si la fecha es fin de semana.
```
Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend"
"weekend"
undefined
```

* Crear una función que diga la diferencia de días entre dos fechas.
```
Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216
-28
```

* Crear una función que devuelva el último día de un mes
```
Test Data :
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));
Output :
31
28
31
```

* Crear una función que calcule el dia de ayer.
```
Test Data :
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));
Output :
"Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
"Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"
"Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"
```

* Crear una función que nos diga la fecha más nueva dentro de un array:
```
Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
```

* Crear una función que devuelva la fecha más vieja dentro de un array:
```
Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
```

* Crear una función que convierta de minutos a horas y minutos:
```
Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
```

* Crear una función que devuelva el número de dias de un año:
```
Test Data :
console.log(days_of_a_year(2015));
365
console.log(days_of_a_year(2016));
366
```

* Crear una función que devuelva el trimestre de un año
```
Test Data :
console.log(quarter_of_the_year(new Date(2015, 1, 21)));
2
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
4
```

* Crear una función que devuelva el número de dias desde principio del año que hayan pasado.
```
Test Data :
console.log(days_passed(new Date(2015, 0, 15)));
15
console.log(days_passed(new Date(2015, 11, 14)));
348
```

* Crear una función que calcule la edad
```
Test Data :
console.log(calculate_age(new Date(1982, 11, 4)));
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
```
