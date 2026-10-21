function mostrarPestana(idPestana) {
    
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('problema').style.display = 'none';
    document.getElementById('solucion').style.display = 'none';
    document.getElementById('teoria').style.display = 'none';

    document.getElementById(idPestana).style.display = 'block';
}
