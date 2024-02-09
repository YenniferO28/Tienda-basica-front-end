// script.js

function calcularIncentivos() {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let totalProduction = 0;
  
    days.forEach(day => {
      const production = parseInt(document.getElementById(day).value) || 0;
      totalProduction += production;
    });
  
    const averageProduction = totalProduction / days.length;
    const ingresoTotal = totalProduction * 2; // $2 por unidad producida
  
    let incentivo = 0;
    let ingresoConIncentivo = 0;
  
    if (averageProduction >= 0 && averageProduction < 100) {
      incentivo = 0;
    } else if (averageProduction >= 100 && averageProduction < 200) {
      incentivo = 0.1;
    } else if (averageProduction === 200) {
      incentivo = 0.12;
    } else if (averageProduction === 300) {
      incentivo = 0.14;
    } else if (averageProduction === 400) {
      incentivo = 0.16;
    }
  
    ingresoConIncentivo = ingresoTotal + (incentivo * ingresoTotal);
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Promedio de Producción: ${averageProduction.toFixed(2)} unidades<br>
                                Ingreso Total: $${ingresoTotal.toFixed(2)}<br>
                                Incentivo: ${(incentivo * 100).toFixed(0)}%<br>
                                Ingreso con Incentivo: $${ingresoConIncentivo.toFixed(2)}`;
  }
  