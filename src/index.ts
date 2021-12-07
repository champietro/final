/* 
Dados estos 5 arreglos que representan las ventas semanales del primer 
trimentre, corresspondientes a 5 vendedores de la empresa: 
Camila, Franco, Sofia, Matias y Agustina, respectivamente.
vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652] 
vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] 
vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] 
vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]

Escribir un programa que permita determinar:Para cada vendedor mostrar su nombre y 
1- su venta maxima indicando semana y mes de la misma.
2- su venta minima indicando semana y mes de la misma.
3- su promedio semanal de ventas.
----------------------------------------------------------
4- su promedio mensual de ventas.Entre todos los vendedores calcular:
----------------------------------------------------------
5- nombre y monto vendido del mejor vendedor de cada semana.
6- nombre y suma de montos vendidos del mejor vendedor de cada mes
7- nombre y suma de montos vendidos del peor vendedor de cada mes
8- nombre y suma de montos vendidos de peor vendedor del trimestreTenga en cuenta que cada valor en los arreglos es la venta de una semana, y que cuatro semanas forman un mes
*/

let vendedor1: number[] = new Array(
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
);

let vendedor2: number[] = new Array(
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
);

let vendedor3: number[] = new Array(
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
);

let vendedor4: number[] = new Array(
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
);

let vendedor5: number[] = new Array(
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
);

let nombres: string[] = new Array(
  "Camila",
  "Franco",
  "Sofia",
  "Matias",
  "Agustina"
);

function promedioSemanal(ventas: number[], vendedor: string) {
  let promedio: number;
  promedio = 0;

  for (let i = 0; i < 12; i++) {
    promedio = promedio + ventas[i];
  }
  promedio = promedio / 12;
  console.log("El promedio semanal de " + vendedor + " es de " + promedio);
}

function obtenerMes(semana: number): number {
  let mes: number;
  if (semana >= 1 && semana < 5) {
    mes = 1;
  } else {
    if (semana >= 5 && semana < 9) {
      mes = 2;
    } else {
      mes = 3;
    }
  }
  return mes;
}

function ventaMinima(ventas: number[], vendedor: string) {
  let semana: number;
  let mes: number;
  let minima: number;
  minima = ventas[0];
  for (let i = 0; i < 13; i++) {
    if (minima > ventas[i]) {
      minima = ventas[i];
      semana = i;
    }
  }
  minima = minima + 1;
  semana = semana + 1;
  mes = obtenerMes(semana);
  console.log(
    "La venta mínima de " +
      vendedor +
      " fué en la semana: " +
      semana +
      ", en el mes : " +
      mes
  );
}

function ventaMaxima(ventas: number[], vendedor: string) {
  let semana: number;
  let mes: number;
  let maxima: number;
  maxima = ventas[0];
  for (let i = 0; i < 13; i++) {
    if (maxima < ventas[i]) {
      maxima = ventas[i];
      semana = i;
    }
  }
  maxima = maxima + 1;
  semana = semana + 1;
  mes = obtenerMes(semana);
  console.log(
    "La venta máxima de " +
      vendedor +
      " fué en la semana: " +
      semana +
      ", en el mes : " +
      mes
  );
}

ventaMaxima(vendedor1, nombres[0]);
ventaMaxima(vendedor2, nombres[1]);
ventaMaxima(vendedor3, nombres[2]);
ventaMaxima(vendedor4, nombres[3]);
ventaMaxima(vendedor5, nombres[4]);

ventaMinima(vendedor1, nombres[0]);
ventaMinima(vendedor2, nombres[1]);
ventaMinima(vendedor3, nombres[2]);
ventaMinima(vendedor4, nombres[3]);
ventaMinima(vendedor5, nombres[4]);

promedioSemanal(vendedor1, nombres[0]);
promedioSemanal(vendedor2, nombres[1]);
promedioSemanal(vendedor3, nombres[2]);
promedioSemanal(vendedor4, nombres[3]);
promedioSemanal(vendedor5, nombres[4]);
