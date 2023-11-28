const numeroaleatorio = (min, max) => {
    console.log('numero aleatorio generado');
    
    min= Math.ceil(1);
    max= Math.floor(100);
   
    return Math.floor(Math.random()*(max-min)+min);
    

};

const numerogenerado = numeroaleatorio();

enviar = ( ) => {
    console.log(numerogenerado);
    const numerodelusuario = document.querySelector('#numeroingresado').value;
   console.log (numerodelusuario)
    //if 
//alert()
};

