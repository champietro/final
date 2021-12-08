/* 
	Dados estos 5 arreglos que representan las ventas semanales del primer 
	trimentre, corresspondientes a 5 vendedores de la empresa: 
	Camila, Franco, Sofia, Matias y Agustina, respectivamente.
	vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652] //142236 Camila mayor
	vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] //117876
	vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] //112955
	vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] //117954
	vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562] //108082 Agustina menor
	
	Escribir un programa que permita determinar:Para cada vendedor mostrar su nombre y 
	1- su venta maxima indicando semana y mes de la misma.
	2- su venta minima indicando semana y mes de la misma.
	3- su promedio semanal de ventas.
	4- su promedio mensual de ventas.Entre todos los vendedores calcular:
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
  let promedio: number = 0;
  for (let i = 0; i < 12; i++) {
    promedio = promedio + ventas[i];
  }
  promedio = promedio / 12;
  console.log("El promedio semanal de " + vendedor + " es de $" + promedio);
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

/*6- nombre y suma de montos vendidos del mejor vendedor de cada mes */

function getMaxima(v1,v2,v3,v4,v5: number){
	let ventas: number[] = new Array(v1,v2,v3,v4,v5);
	let persona: number;
	let suma:number;
  suma = 0;
  persona = 0;
	for(let i=0;i<5;i++){
		if(suma < ventas[i]){
			suma = ventas[i];
			persona = i;
		}		
  }
	return[suma, persona];
}

function getMinima(v1: number,v2: number,v3: number,v4: number,v5: number){
	let ventas: number[] = new Array(v1,v2,v3,v4,v5);
	let persona: number;
	let suma:number;
  suma = ventas[0];
  persona = 0;
	for(let i=0;i<5;i++){
		if(suma > ventas[i]){
			suma = ventas[i];
			persona = i;
		}		
  }
	return[suma, persona];
}

function peorVendedorMes(ventas1,ventas2,ventas3,ventas4,ventas5: number[],nombres: string[]) {
	let v1: number = 0;let v2: number = 0;let v3: number = 0;let v4: number = 0;let  v5: number = 0;
	let vendedor: number;
	for (let i = 0; i < 12; i++) {
		v1 = v1 + ventas1[i];
		v2 = v2 + ventas2[i];
		v3 = v3 + ventas3[i];
		v4 = v4 + ventas4[i];
		v5 = v5 + ventas5[i];
		switch (i) {
			case 3: {
        let variables = getMinima(v1,v2,v3,v4,v5);
				vendedor = variables[1];
				console.log("Peor vendedor del mes 1:"+nombres[vendedor]+". Monto: $"+variables[0]);
				v1 = 0;
				v2 = 0;
				v3 = 0;
				v4 = 0;
				v5 = 0;
				break;
			}
			case 7: {
				let variables = getMinima(v1,v2,v3,v4,v5);
				vendedor = variables[1];
				console.log("Peor vendedor del mes 2:"+nombres[vendedor]+". Monto: $"+variables[0]);
				v1 = 0;
				v2 = 0;
				v3 = 0;
				v4 = 0;
				v5 = 0;
				break;
			}
			case 11: {
				let variables = getMinima(v1,v2,v3,v4,v5);
				console.log("Peor vendedor del mes 3:"+nombres[vendedor]+". Monto: $"+variables[0]);
				v1 = 0;
				v2 = 0;
				v3 = 0;
				v4 = 0;
				v5 = 0;
				break;
			}
		}
	}
}

function mejorVendedorMes(ventas1,ventas2,ventas3,ventas4,ventas5: number[],nombres: string[]) {
	let v1: number = 0;let v2: number = 0;let v3: number = 0;let v4: number = 0;let  v5: number = 0;
	let vendedor: number;
	for (let i = 0; i < 12; i++) {
		v1 = v1 + ventas1[i];
		v2 = v2 + ventas2[i];
		v3 = v3 + ventas3[i];
		v4 = v4 + ventas4[i];
		v5 = v5 + ventas5[i];
		switch (i) {
			case 3: {
				let variables = getMaxima(v1,v2,v3,v4,v5);
				vendedor = variables[1];
				console.log("Mejor vendedor del mes 1:"+nombres[vendedor]+". Monto: $"+variables[0]);
				v1 = 0;
				v2 = 0;
				v3 = 0;
				v4 = 0;
				v5 = 0;
				break;
			}
			case 7: {
				let variables = getMaxima(v1,v2,v3,v4,v5);
				vendedor = variables[1];
				console.log("Mejor vendedor del mes 2:"+nombres[vendedor]+". Monto: $"+variables[0]);
				v1 = 0;
				v2 = 0;
				v3 = 0;
				v4 = 0;
				v5 = 0;
				break;
			}
			case 11: {
				let variables = getMaxima(v1,v2,v3,v4,v5);
				console.log("Mejor vendedor del mes 3:"+nombres[vendedor]+". Monto: $"+variables[0]);
				v1 = 0;
				v2 = 0;
				v3 = 0;
				v4 = 0;
				v5 = 0;
				break;
			}
		}
	}
}

function mejorVendedorSemana(
  ventas1,
  ventas2;
  ventas3,
  ventas4,
  ventas5: number[],
  nombres: string[]
) {
  let maxima, sem: number;
  let vendedor: string;
  for (let semana = 0; semana < 12; semana++) {
    maxima = Math.max(
      ventas1[semana],
      ventas2[semana],
      ventas3[semana],
      ventas4[semana],
      ventas5[semana]
    );
    if (maxima == ventas1[semana]) {
      vendedor = nombres[0];
    } else {
      if (maxima == ventas2[semana]) {
        vendedor = nombres[1];
      } else {
        if (maxima == ventas3[semana]) {
          vendedor = nombres[2];
        } else {
          if (maxima == ventas4[semana]) {
            vendedor = nombres[3];
          } else {
            vendedor = nombres[4];
          }
        }
      }
    }
    console.log(
      vendedor +
        " fué quién más vendió en esa semana con un monto de: $" +
        maxima
    );
  }
}

function promedioMensual(ventas: number[], vendedor: string[]) {
  let promedio: number = 0;
  let mes: number;
  for (let i = 0; i < 12; i++) {
    promedio = promedio + ventas[i];
    switch (i) {
      case 3: {
        mes = 1;
        console.log(
          "El promedio del mes " + mes + " de " + vendedor + " es: " + promedio
        );
        promedio = 0;
        break;
      }
      case 7: {
        mes = 2;
        console.log(
          "El promedio del mes " + mes + " de " + vendedor + " es: " + promedio
        );
        promedio = 0;
        break;
      }
      case 11: {
        mes = 3;
        console.log(
          "El promedio del mes " + mes + " de " + vendedor + " es: " + promedio
        );
        promedio = 0;
        break;
      }
    }
  }
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

promedioMensual(vendedor1, nombres[0]);
promedioMensual(vendedor2, nombres[1]);
promedioMensual(vendedor3, nombres[2]);
promedioMensual(vendedor4, nombres[3]);
promedioMensual(vendedor5, nombres[4]);

mejorVendedorSemana(
  vendedor1,
  vendedor2,
  vendedor3,
  vendedor4,
  vendedor5,
  nombres
);

mejorVendedorMes(
  vendedor1,
  vendedor2,
  vendedor3,
  vendedor4,
  vendedor5,
  nombres
);

peorVendedorMes(
  vendedor1,
  vendedor2,
  vendedor3,
  vendedor4,
  vendedor5,
  nombres
);


