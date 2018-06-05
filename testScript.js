const apenasProto = flow => flow.pr
const apenasFl = flow => flow.fl

const apenasVal = flow => flow.val

const apenasHora = flow => flow.hora
const apenasFlows = flow => flow.flows

/* DATA FROM flowsHistory.json */
const url = 'data/flowsHistory.json'
fetch(url).then(resp => resp.json()).then(arquivo => {
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
                    label: "Flow",
                    borderColor: "#3e95cd",
                    fill: false
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Flows'
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
                    label: "Flow",
                    backgroundColor: "#3e95cd",
                    fill: false
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Flows'
            }
        }
    });
})

/* DATA FROM protoByFlowsHistory.json */
const url2 = 'data/protoByFlowsHistory.json'
fetch(url2).then(resp => resp.json()).then(arquivo => {
    const horas = arquivo.tcp.map(apenasHora)
    const tcp = arquivo.tcp.map(apenasFl)
    const udp = arquivo.udp.map(apenasFl)
    const icmp = arquivo.icmp.map(apenasFl)

    //Line chart
    new Chart(document.getElementById("line-chart-proto"), {
        type: 'line',
        data: {
            labels: horas,
            datasets: [
                {
                    data: tcp,
                    label: "TCP",
                    borderColor: "#3e95cd",
                    fill: false
                },
                {
                    data: udp,
                    label: "UDP",
                    borderColor: "#8e5ea2",
                    fill: false
                },
                {
                    data: icmp,
                    label: "ICMP",
                    borderColor: "#3cba9f",
                    fill: false
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Flows'
            }
        }
    });
})

/* DATA FROM protoByFlows.json */
const url3 = 'data/protoByFlows.json'
fetch(url3).then(resp => resp.json()).then(arquivo => {
    const protocolos = arquivo.top_10.map(apenasProto)
    const dados = arquivo.top_10.map(apenasFl)

    //Pie chart
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
            labels: protocolos,
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: dados
            }]
        },
        options: {
            title: {
                display: true,
                text: 'protoByFlows'
            }
        }
    });
})

/* DATA FROM portByFlows.json */
const url4 = 'data/portByFlows.json'
fetch(url4).then(resp => resp.json()).then(arquivo => {
    const portas = arquivo.top_10.map(apenasVal)
    const dados = arquivo.top_10.map(apenasFl)

    //Pie chart
    new Chart(document.getElementById("pie-chart9"), {
        type: 'pie',
        data: {
            labels: portas,
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#f4f142", "#f142f4", "#f44141", "#f4af41", "#41f467"],
                data: dados
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Top Ports'
            }
        }
    });
})