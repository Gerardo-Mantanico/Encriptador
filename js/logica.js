let palabra="";
let cadena=[];
let letra="";
let variableMomentanea;
let longitud=0;
let descuento=1;
let palabrareordenada=[];
let shoWords="";
let newWord ="";
let newOrderLvOne = []; //array of algortim lv on

let tempralNumerN = 0;

let countLengthMiddle= 0;

//funciton replace level alura
function aluraEnript(){
    shoWords=document.getElementById('text-encripting').id;
    let newPalabra="";
    palabra = document.getElementById('text-for-encript').value;
    newPalabra = palabra.replace(/e/g, 'enter');
    newPalabra = newPalabra.replace(/i/g, 'imes');
    newPalabra = newPalabra.replace(/a/g, 'ai');
    newPalabra = newPalabra.replace(/o/g, 'ober');
    newPalabra = newPalabra.replace(/u/g, 'ufat');
    console.log(newPalabra);
    guardarHistorial();
    addElementWord(shoWords, newPalabra);
    palabra = "";

}


function desencriptarAluraEnript(){
    shoWords=document.getElementById('text-encripting').id;
    palabra = document.getElementById('text-for-encript').value;
    let lastWord = "";
    lastWord = palabra.replace(/ufat/g, 'u');
    lastWord = lastWord.replace(/ober/g, 'o');
    lastWord = lastWord.replace(/ai/g, 'a');
    lastWord = lastWord.replace(/imes/g, 'i');
    lastWord = lastWord.replace(/enter/g, 'e');
    console.log(lastWord);
    guardarHistorial();
    addElementWord(shoWords, lastWord);
    palabra="";
    return lastWord;
}


function encriptationGeneral(){
    //validation for a type of encriptation
    let comprobation = document.getElementById('select-level-encript').value;
    if (comprobation == 'nivelAlura'){
        aluraEnript();

}

function desencriptarGeneral(){
    let comprobation = document.getElementById('select-level-encript').value;
    if (comprobation == 'nivelAlura'){
        desencriptarAluraEnript();

    }else if(comprobation == 'nivelWilmer'){
        
    }else if(comprobation == 'nivelWilmerLvTwo'){

    }
}

function addElementWord(element, text){
    let addWord = document.getElementById(element);
    addWord.value= text;
    return ;
}
