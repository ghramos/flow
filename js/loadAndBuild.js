const apenasPr = flow => flow.pr;
const apenasFl = flow => flow.fl;
const apenasVal = flow => flow.val;
const apenasHora = flow => flow.hora;
const apenasFlows = flow => flow.flows;
const apenasByt = flow => flow.byt;
const apenasIbyt = flow => flow.ibyt;
const apenasGBytes = flow => flow.bytes / 1024 / 1024 / 1024;
const apenasMBytes = flow => flow.bytes / 1024 / 1024;
const format = flow => flow.toFixed(2);

const loadLineGraph = (label, titulo, url, doc, tipo, dias = 1, ...funcao) => {
  fetch(url)
    .then(resp => resp.json())
    .then(arquivo => {
      const total = arquivo.top_10.length;
      const inicio = total - dias * 288;
      const horas = arquivo.top_10.map(funcao[0]).slice(inicio, total);
      let dados;

      if (funcao.length > 2) {
        dados = arquivo.top_10
          .map(funcao[1])
          .map(funcao[2])
          .slice(inicio, total);
      } else {
        dados = arquivo.top_10.map(funcao[1]).slice(inicio, total);
      }

      //Line chart
      new Chart(doc, {
        type: tipo,
        data: {
          labels: horas,
          datasets: [
            {
              data: dados,
              label: label,
              borderColor: "#3e95cd",
              backgroundColor: "#ebf4fa",
              fill: true
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: titulo
          }
        }
      });
    });
};

const loadLineGraphProtocol = (titulo, url, doc, tipo, dias = 1, ...funcao) => {
  fetch(url)
    .then(resp => resp.json())
    .then(arquivo => {
      const total = arquivo.tcp.length;
      const inicio = total - dias * 288;

      const horas = arquivo.tcp.map(funcao[0]).slice(inicio, total);
      const tcp = arquivo.tcp.map(funcao[1]).slice(inicio, total);
      const udp = arquivo.udp.map(funcao[1]).slice(inicio, total);
      const icmp = arquivo.icmp.map(funcao[1]).slice(inicio, total);

      //Line chart
      new Chart(doc, {
        type: tipo,
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
            text: titulo
          }
        }
      });
    });
};

const loadBarGraph = (label, titulo, url, doc, tipo, dias = 1, ...funcao) => {
  fetch(url)
    .then(resp => resp.json())
    .then(arquivo => {
      const total = arquivo.top_10.length;
      const inicio = total - dias * 288;
      const horas = arquivo.top_10.map(funcao[0]).slice(inicio, total);
      let dados;

      if (funcao.length > 2) {
        dados = arquivo.top_10
          .map(funcao[1])
          .map(funcao[2])
          .slice(inicio, total);
      } else {
        dados = arquivo.top_10.map(funcao[1]).slice(inicio, total);
      }

      //Bar chart
      new Chart(doc, {
        type: tipo,
        data: {
          labels: horas,
          datasets: [
            {
              data: dados,
              label: label,
              backgroundColor: "#3e95cd",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: titulo
          }
        }
      });
    });
};

const loadPieGraph = (titulo, url, doc, tipo, ...funcao) => {
  fetch(url)
    .then(resp => resp.json())
    .then(arquivo => {
      const labels = arquivo.top_10.map(funcao[0]);
      const dados = arquivo.top_10.map(funcao[1]);
      //Bar chart
      new Chart(doc, {
        type: tipo,
        data: {
          labels: labels,
          datasets: [
            {
              data: dados,
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
                "#f4f142",
                "#f142f4",
                "#f44141",
                "#f4af41",
                "#41f467"
              ],
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: titulo
          }
        }
      });
    });
};
