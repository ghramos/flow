
const apenasFl = flow => flow.fl

const apenasVal = flow => flow.val

/* DATA FROM portByFlows.json */
const url = 'data/portByFlows.json'
fetch(url)
    .then(resp => resp.json())
    .then(arquivo => {
        const portas = arquivo.top_10.map(apenasVal)
        const dados = arquivo.top_10.map(apenasFl)

        console.log(portas)
    })