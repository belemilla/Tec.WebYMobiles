    function calcularPropina() {
        
        const montoBoleta = parseFloat(document.getElementById("monto").value);
        const porcentajePropina = parseInt(document.getElementById("porcentajePropina").value);

        
        if (isNaN(montoBoleta) || montoBoleta <= 0) {
            alert("Ingrese un monto válido.");
            return;
        }

        
        if (isNaN(porcentajePropina) || porcentajePropina <= 0) {
            alert("Seleccione un porcentaje de propina válido.");
            return;
        }

       
        const propina = (montoBoleta * porcentajePropina) / 100;
        const totalConPropina = montoBoleta + propina;

       
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
            <p>Monto de la boleta: CLP ${montoBoleta.toFixed(2)}</p>
            <p>Propina (${porcentajePropina}%): CLP ${propina.toFixed(2)}</p>
            <p>Total a pagar: CLP ${totalConPropina.toFixed(2)}</p>
        `;
    }


calcularPropina();



