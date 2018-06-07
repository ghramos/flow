const apenasProto = flow => flow.pr
const apenasFl = flow => flow.fl
const apenasVal = flow => flow.val
const apenasHora = flow => flow.hora
const apenasFlows = flow => flow.flows
const apenasByt = flow => flow.byt

/* DATA FROM protoByFlowsHistory.json */
fetch('https://191.36.41.203/data/protoByFlowsHistory.json').then(resp => resp.json()).then(arquivo => {
    const total = arquivo.tcp.length
    const horas = arquivo.tcp.map(apenasHora).slice(total - 288, total)
    const tcp = arquivo.tcp.map(apenasFl).slice(total - 288, total)
    const udp = arquivo.udp.map(apenasFl).slice(total - 288, total)
    const icmp = arquivo.icmp.map(apenasFl).slice(total - 288, total)


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
                text: 'Fluxo TCP, UDP e ICMP'
            }
        }
    });
})

/* DATA FROM protoByFlows.json */
fetch('https://191.36.41.203/data/protoByFlows.json').then(resp => resp.json()).then(arquivo => {
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
                text: 'Top protocolos IP'
            }
        }
    });
})