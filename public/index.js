import { Stack } from './stack.js'

window.onload = function(){
    let operationsStack = new Stack(4);
    let editor = document.getElementById('editor');
    let undo = document.getElementById('undo');
    

    editor.addEventListener('keydown', function(event){
        console.log(event);
        if( isValidKey(event.keyCode) ){
            operationsStack.push(1, event.key, getPosition())
            // operationsStack.display();
        }
        else if( event.key == "Backspace" ){
            operationsStack.push(2, event.target.value[event.target.value.length - 1], getPosition());
            // operationsStack.display();
        }
        else if(event.key == "Delete"){
    
        }
        else if( event.ctrlKey){
    
        }
        console.log(operationsStack);
    });
    
    undo.addEventListener('click', function(){
        let element = operationsStack.pop();
        if(element.operation == 1){
            editor.value = editor.value.substring(0, element.index) + editor.value.substring(element.index + element.value.length);
            // editor.value.substring(0, editor.value.length - element.value.length);
        }else if(element.operation == 2){
            // editor.value = editor.value + element.value;
            editor.value = editor.value.substring(0, element.index) + element.value + editor.value.substring(element.index + 1)
        }
        console.log(operationsStack);
    })
    
    
    function isValidKey(keycode){
        let valid = 
            (keycode > 47 && keycode < 58)   || // number keys
            keycode == 32 || keycode == 13   || // spacebar & return key(s) (if you want to allow carriage returns)
            (keycode > 64 && keycode < 91)   || // letter keys
            (keycode > 95 && keycode < 112)  || // numpad keys
            (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
            (keycode > 218 && keycode < 223) || // [\]' (in order)
            keycode == 9;   // tab
        return valid;
    }
    
    function getPosition(){
        // console.log(editor.selectionStart, editor.selectionEnd);
        return editor.selectionStart;
    }
}


   // console.log(event.key)
        // var myElement = document.getElementById('editor');
    
        // console.log(myElement.value.substring(0, myElement.startPosition).split("\n").length)
    
        // console.log(document.getElementById("editor").selectionStart);
        // console.log(document.getElementById("editor").selectionEnd);


// ​function getLineNo(){
//     var myElement = document.getElementById('editor');
//     return myElement.value.substr(0, myElement.startPosition).slit("\n").length;
//     // alert(t.value.substr(0, t.selectionStart).split("\n").length);
// }​


// document.addEventListener('mouseup', function(event){
//     // console.log(event)
//     // console.log(document.getElementById("editor").selectionStart);
//     // console.log(document.getElementById("editor").selectionEnd);
//     var myElement = document.getElementById('editor');
//     // var startPosition = myElement.selectionStart;
//     // var endPosition = myElement.selectionEnd;
//     console.log(myElement.value.substring(0, myElement.selectionStart))
//     console.log(myElement.value.substring(0, myElement.selectionStart).split("\n").length)
//     // Check if you've selected text
//     // if(startPosition == endPosition){
//     //     console.log("The position of the cursor is (" + startPosition + "/" + myElement.value.length + ")");
//     // }else{
//     //     console.log("Selected text from ("+ startPosition +" to "+ endPosition + " of " + myElement.value.length + ")");
//     // }
// });