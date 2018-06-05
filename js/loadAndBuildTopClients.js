const apenasProto = flow => flow.pr
const apenasFl = flow => flow.fl
const apenasVal = flow => flow.val
const apenasHora = flow => flow.hora
const apenasFlows = flow => flow.flows
const apenasByt = flow => flow.byt

/* DATA FROM portByFlows.json */
fetch('data/portByFlows.json').then(resp => resp.json()).then(arquivo => {
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
        text: 'Top Portas/Serviços by Flows'
      }
    }
  });

  let str = ""
  for (let porta in portas) {
    str += `<tr>\n<td>${portas[porta]}</td>\n</tr>\n`
  }
  console.log(str)
  document.getElementById("pie-chart9-table").innerHTML = str
})

/* DATA FROM dstipByBytes.json */
fetch('data/dstipByBytes.json').then(resp => resp.json()).then(arquivo => {
  const ips = arquivo.top_10.map(apenasVal)
  const dados = arquivo.top_10.map(apenasByt)

  //Pie chart
  new Chart(document.getElementById("pie-chart10"), {
    type: 'pie',
    data: {
      labels: ips,
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#f4f142", "#f142f4", "#f44141", "#f4af41", "#41f467"],
        data: dados
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Top Destinos by Bytes'
      }
    }
  });

  let str = ""
  for (let ip in ips) {
    str += `<tr>\n<td>${ips[ip]}</td>\n</tr>\n`
  }

  document.getElementById("pie-chart10-table").innerHTML = str
})

/* DATA FROM srcipByBytes.json */
fetch('data/srcipByBytes.json').then(resp => resp.json()).then(arquivo => {
  const ips = arquivo.top_10.map(apenasVal)
  const dados = arquivo.top_10.map(apenasByt)

  //Pie chart
  new Chart(document.getElementById("pie-chart11"), {
    type: 'pie',
    data: {
      labels: ips,
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#f4f142", "#f142f4", "#f44141", "#f4af41", "#41f467"],
        data: dados
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Top Origens by Bytes'
      }
    }
  });

  let str = ""
  for (let ip in ips) {
    str += `<tr>\n<td>${ips[ip]}</td>\n</tr>\n`
  }

  document.getElementById("pie-chart11-table").innerHTML = str

})