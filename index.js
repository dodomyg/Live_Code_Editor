function output(){
    let html=document.getElementById('html').value
    let js=document.getElementById('js').value
    let css=document.getElementById('css').value
    let output=document.getElementById('output')


    output.contentDocument.body.innerHTML=html+ "<style>"+ css+'</style>'
    output.contentWindow.eval(js);
}