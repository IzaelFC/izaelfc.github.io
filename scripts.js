function continuar(){
    switch (location.href){
        case location.origin + '/index.html':
            location.replace('index2.html')
            break
        case location.origin + '/index2.html':
            location.replace('index.html')
            break
        default:
            break
    }
}


function voltar(){
    switch (location.href){
        case location.origin + '/index.html':
            location.replace('index2.html')
            break
        case location.origin + '/index2.html':
            location.replace('index.html')
            break
        default:
            break
    }
}