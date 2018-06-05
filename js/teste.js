
const apenasFl = flow => flow.fl

const apenasVal = flow => flow.val

/* DATA FROM portByFlows.json */
const url = 'data/portByFlows.json'
fetch(url)
    .then(resp => resp.json())
    .then(arquivo => {
        let str = ""

        for (let flow in arquivo.top_10) {
            str += `<li>${flow.val}</li>\n`
        }

        console.log(str)
    })