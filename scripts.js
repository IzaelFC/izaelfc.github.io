function segundaPagina(){
    document.getElementsByTagName('main')[0].innerHTML = 
    `<div>
        <p>Uma frase que pode ser importante feita em duas linhas</p>
        <p>Frase generica Frase generica Frase generica Frase generica Frase generica Frase generica Frase generica Frase generica Frase generica Frase generica Frase generica Frase generica Frase generica</p>
    </div>
    <div  class="imagem_e_botao">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhyXArOTbCXDRVnE96M58P0c3MdyaMsZDDA&usqp=CAU" alt="">
        <button type="button" onclick="primeiraPagina()">CONTINUAR</button>
    </div>
    <footer>
        <audio controls>
            <source src="audio/audio.aac" type="audio/aac">
        </audio>
    </footer>`
}


function primeiraPagina(){
    document.getElementsByTagName('main')[0].innerHTML = 
    `<p class="texto">lorsjaojfsojfnon ndfdfdfasfaffdssfdgfdfdg sfdgfgsdarertrtrrtwhtggsgsdggsgsdgd sgsdgdgsdgsdgsdgsd gsdgsdgsdgsdgsdgsgd sdgsdgsdgsdsgdgs gsdggsdgsd gdsgsdgsdg sdgsdgsdgsdgsdggdgd sgdsgsdgsdgsdgsdgs dgssdgsgs dgsdsgsgdgds sgdgsgddfgsdgsgdsdg sdggggggggggggg dgdsgsdgsdgdgdsgsd gsdgdgdsgsdgsdgdgdsgsdg sdgdgdsgsdgsdgdgds gsdgsdg</p>
    <div class="imagem_e_botao">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJFBMVEX/+Nzw+P/////w////+vr///D19dzx+f719d7/+/r/+N7///JbBAkDAAABMUlEQVR4nO3Ptw0DARAEsZd3/ferChTcYYFVwKlgeJxz3XJdch2EhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEfyL8JIWnXNdcwSvCSYSEhLsIJxESEu4inERISLiLcBIhIeEuwkmEhIS7CCcREhLuIpxESEi4i3ASISHhLsJJhISEuwgnERIS7iKcREhIuItwEiEh4S7CSYSEhLsIJxESEu4inERYEj5yvWLAV/DqyPV+3lM938GvYEFhm/IjQkLCfoSEhP0ICQn7ERIS9iMkJOxHSEjYj5CQsB8hIWE/QkLCfoSEhP0ICQn7ERIS9iMkJOxHSEjYj5CQsB8hIWE/QkLCfoSEhP3+U/gFahDoSvNzk9YAAAAASUVORK5CYII=" alt="">
        <button type="button" onclick="segundaPagina()">CONTINUAR</button>
    </div>`
}
