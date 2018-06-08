const apenasProto = flow => flow.pr
const apenasFl = flow => flow.fl
const apenasVal = flow => flow.val
const apenasHora = flow => flow.hora
const apenasFlows = flow => flow.flows
const apenasGBytes = flow => flow.bytes / 1024 / 1024 / 1024
const apenasMBytes = flow => flow.bytes / 1024 / 1024
const toGB = flow => flow.toFixed(2)

/* DATA FROM flowsHistory.json */
fetch('https://191.36.41.203/data/ipByBytesHistoryAccumulated.json').then(resp => resp.json()).then(arquivo => {
    const total = arquivo.top_10.length

    const horas = arquivo.top_10.map(apenasHora).slice(total - 288, total)
    const dados = arquivo.top_10.map(apenasGBytes).map(toGB).slice(total - 288, total)

    //Line chart
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: horas,
            datasets: [
                {
                    data: dados,
                    label: "GB",
                    borderColor: "#3e95cd",
                    backgroundColor: " #ebf4fa",
                    fill: true
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'GB total accumulated'
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
                    label: "GB",
                    backgroundColor: "#3e95cd",
                    fill: false
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'GB total accumulated'
            }
        }
    });
})

/* DATA FROM flowsHistory.json */
fetch('https://191.36.41.203/data/ipByBytesHistory.json').then(resp => resp.json()).then(arquivo => {
    const total = arquivo.top_10.length

    const horas = arquivo.top_10.map(apenasHora).slice(total - 288, total)
    const dados = arquivo.top_10.map(apenasMBytes).map(toGB).slice(total - 288, total)

    //Line chart
    new Chart(document.getElementById("line-chart1"), {
        type: 'line',
        data: {
            labels: horas,
            datasets: [
                {
                    data: dados,
                    label: "MB",
                    borderColor: "#3e95cd",
                    backgroundColor: " #ebf4fa",
                    fill: true
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'MB total last 5 minutes'
            }
        }
    });

    //Bar chart
    new Chart(document.getElementById("bar-chart1"), {
        type: 'bar',
        data: {
            labels: horas,
            datasets: [
                {
                    data: dados,
                    label: "MB",
                    backgroundColor: "#3e95cd",
                    fill: false
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'MB total last 5 minutes'
            }
        }
    });
})