let output = document.getElementById(`input`)

function display(num){
    output.value += num
}
function calcualte(){
    try{
        output.value = eval(output.value)
    }catch(err)
    {
        alert("invalid input")
    }
}

function CE(){
output.value = ""
}

function del(){
output.value = output.value.slice(0,-1)
}