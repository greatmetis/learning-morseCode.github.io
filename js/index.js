$(document).ready()

var morseCode ="A;.-|B;-...|C;-.-.|D;-..|E;.|F;..-.|G;--.|H;....|I;..|J;.---|K;-.-|L;.-..|M;--|N;-.|O;---|P;.--.|Q;--.-|R;.-.|S;...|T;-|U;..-|V;...-|W;.--|X;-..-|Y;-.--|Z;--..|/;-..-.|1;.----|2;..---|3;...--|4;....-|5;.....|6;-....|7;--...|8;---..|9;----.|0;-----"

var morseList = morseCode.split("|")
for (var i=0; i<morseList.length;i++){
    morseList[i] = morseList[i].split(";")
    $('ul.transList').append('<li>'+ morseList[i][0] +' '+ morseList[i][1]+'</li>')
    
}


// find code/letter

function findCode(letter){
    for(var i=0;i<morseList.length;i++){
        if(morseList[i][0] == letter){
            return morseList[i][1]
        }
    }
    return letter
}
function findLetter(code){
    for(var i=0;i<morseList.length;i++){
        if(morseList[i][1] == code){
            return morseList[i][0]
        }
    }
    return code
}

// translate whole text
function translateToMorse(text){
    // uppercase
    text= text.toUpperCase();
    var result = "";
    // find the code
    for(var j=0;j<text.length;j++){
        result+=findCode(text[j])+ " "
        //  console.log(text[i])
    }
    return result
}

function translateToEng(text){
    var result = "";
    text = text.split(" ")
    for(var i = 0; i<text.length;i++){
        result+=findLetter(text[i]) + " "
        // console.log(text[i])
    }
    return result
}

// link buttons with functions

$('#btnMorse').click(function(){
    var text = $('#input').val()
    var result = translateToMorse(text)
    $('#output').val(result)
    $('#output').css({backgroundColor:'#292b73'}).animate(
        {backgroundColor:'transparent'},500
    )
    $('.tranSymbol').velocity({
        rotateZ:'45deg'
        // rotateZ:['0deg','360deg']
    })
    $('.tranSymbal').velocity({
        translateX: "200px",
        rotateZ: "45deg"
    });
})
    
    

$('#btnEng').click(function(){
    var text = $('#output').val()
    var result = translateToEng(text)
    $('#input').val(result)
    $('#input').css({backgroundColor:'#292b73'}).animate(
        {backgroundColor:'transparent'},500
    )
})

// use keyup to force input are uppercase
$('#input').keyup(function(){
    var originalText = $('#input').val()
    var newText = originalText.toUpperCase().split(" ").join("")
    $('#input').val(newText)
})

