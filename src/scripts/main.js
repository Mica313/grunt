document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form').addEventListener('submit', function(evento){
        evento.preventDefault();
        let maxnum = document.getElementById('maxnum').value;
        maxnum = parseInt(maxnum);
        let numale = Math.random() * maxnum;
        numale = Math.floor(numale + 1);
        document.getElementById('resu_val').innerText = numale;
        document.querySelector('.resultado').style.display = 'block';
    })
})