function numeroaleatorio(min, max) {
    console.log('nuemro aleatorio generado')
    min= Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min)

}


