// Api Key from free currency api https://free.currconv.com/api/v7/convert?q=BTC_USD&compact=ultra&apiKey=21e3350966a3fde7f8cc

// TODAS /api/v7/currencies?apiKey=21e3350966a3fde7f8cc
const baseUrl = "https://free.currconv.com/";
const urlAllCur = "api/v7/currencies?apiKey=21e3350966a3fde7f8cc";

// Format currency;
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

async function loadCurrencies() {
    const response = await fetch(baseUrl+urlAllCur);
    const currencies = await response.json();

    let table = document.querySelector('table');
    const allCurrencies = currencies["results"];

    Object.keys(allCurrencies).forEach((item) => {
        let currencyName = allCurrencies[item]["currencyName"];
        let currencyId = allCurrencies[item]["id"];
        
        // Values on the table
        let elTR = document.createElement('tr');
        let elTHMoeda = document.createElement('td');
        elTHMoeda.innerText = currencyName;
        let elTHID = document.createElement('td');
        elTHID.innerText = currencyId;
        elTR.appendChild(elTHMoeda);
        elTR.appendChild(elTHID);
        table.appendChild(elTR);

        // Values in the select element;
        let selectFrom = document.querySelector('select#from');
        let selectTo = document.querySelector('select#to');
        
        let optionFrom = document.createElement("option");
        optionFrom.setAttribute("id", currencyId);
        optionFrom.value = currencyId;
        optionFrom.innerHTML = currencyId;
        selectFrom.appendChild(optionFrom);

        let optionTo = document.createElement("option");
        optionTo.setAttribute("id", currencyId);
        optionTo.value = currencyId;
        optionTo.innerHTML = currencyId;
        selectTo.appendChild(optionTo);

    })
    
}

async function getCurrency(queryApi, qtde) {
    const response = await fetch(`https://free.currconv.com/api/v7/convert?q=${queryApi}&compact=ultra&apiKey=21e3350966a3fde7f8cc`);
    const currency = await response.json();

    const valueUnit = currency[queryApi];

    let cash = formatter.format(valueUnit * parseFloat(qtde));

    console.log(cash);

    let elementR = document.querySelector("#r");
    elementR.remove();
    elementR = document.createElement("span");
    elementR.setAttribute("id", "r");
    elementR.innerHTML = cash;
    document.querySelector('.result').appendChild(elementR);

}

loadCurrencies();

var btn = document.querySelector("button");

btn.onclick = function() {
    let valueIdFrom = document.querySelector("select#to").value;
    let valueIdTo = document.querySelector("select#from").value;
    let cash = document.querySelector('input#valor').value;
    let queryApi = valueIdTo+"_"+valueIdFrom;
    getCurrency(queryApi, cash);
}
