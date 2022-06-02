const url = "https://api.themotivate365.com/stoic-quote";
fetch(url);

var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };
// https://github.com/tlcheah2/stoic-quote-lambda-public-api?ref=publicapis.dev
// https://libretranslate.com/docs/?ref=publicapis.dev#/translate/post_translate
fetch(url, myInit)
.then(res => {
    console.log(res.json());
    var frase = res.json();
})


// fetch("https://translate.terraprint.co/translate", {
//     method: 'POST',
//     referrerPolicy: "",
//     headers: {
//         'accept': 'application/json'
//     },
//     body: new URLSearchParams({
//         'q': frase["data"]["quote"],
//         'source': 'en',
//         'target': 'pt',
//         'format': 'text',
//     })
// })
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));
