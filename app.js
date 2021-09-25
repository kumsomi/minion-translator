// button, input and output variable
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//server URL for taking our request and converting the text into banana language
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong please try again later");
}

function clickHandler(){

    var inputText = txtInput.value;    // taking input

    // calling server processing
    fetch(getTranslationURL(inputText)) // go and fetch this URL constructed by getTranslationURL method
    .then(response=> response.json()) // convert that response to response.json
    .then(json=>{
        var translatedText = json.contents.translated; // take the json -> read that translated value
        outputDiv.innerText = translatedText; // show it in the outpu box
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)