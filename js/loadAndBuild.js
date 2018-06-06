const apenasProto = flow => flow.pr
const apenasFl = flow => flow.fl
const apenasVal = flow => flow.val
const apenasHora = flow => flow.hora
const apenasFlows = flow => flow.flows
const apenasByt = flow => flow.byt

/* DATA FROM flowsHistory.json */
fetch('data/flowsHistory.json').then(resp => resp.json()).then(arquivo => {
    const horas = arquivo.top_10.map(apenasHora)
    const dados = arquivo.top_10.map(apenasFlows)

    //Line chart
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: horas,
            datasets: [
                {
                    data: dados,
                    label: "Fluxo",
                    borderColor: "#3e95cd",
                    fill: false
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Fluxo total'
            }
        }
    });

    //Bar chart
    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: horas,
            datasets: [
                {
                    data: dados,
                    label: "Fluxo",
                    backgroundColor: "#3e95cd",
                    fill: false
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Fluxo total'
            }
        }
    });
})