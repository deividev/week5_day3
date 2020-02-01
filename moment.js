//# Moment
//
//Con moment y la librería de los locales se tiene una potencia grandísima para trabajar con 
//fechas.
//
//1. **Ejercicio** Dada la siguiente fecha 04/02/2018. Indica los milisegundos, los segundos, los minutos, las horas de la fecha.

console.log(moment('04/02/2018', 'DD-MM-YYYY').valueOf());





//1. **Ejercicio** Dada la siguiente fecha 08/10/2000, indica la semana del año que es.

console.log(moment('08/10/2000', 'DD-MM-YYYY').week());
 



//1. **Ejercicio** Con la fecha anterior, devuelve una nueva fecha a la que se le añade 7 dias.

console.log(moment('08/10/2000', 'DD-MM-YYYY').add(7, 'days').toDate());




//1 . **Ejercicio** Dada la siguiente fecha 05/02/1985, cual es nombre del dia si le sumas 30, 90 y 180 días.



function nameDay(date,sum) {
   return (moment(date).add(sum, 'days').format('dddd'));
}
const date = '05/02/1985';
console.log("La fecha + 30 es:" + nameDay(moment(date), 30));
console.log("La fecha + 90 es:" + nameDay(moment(date), 90));
console.log("La fecha + 180 es:" + nameDay(moment(date), 180));




