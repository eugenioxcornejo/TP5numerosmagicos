const numeroaleatorio = (min, max) => {
    console.log('numero aleatorio generado');
    
    min= Math.ceil(1);
    max= Math.floor(100);
   
    return Math.floor(Math.random()*(max-min)+min);
    

};

const numerogenerado = numeroaleatorio();

const enviar = ( ) => {
    console.log(`nuemro generado= ${numerogenerado}`);
    const numerodelusuario = document.querySelector('#numeroingresado').value;
    
    if(numerodelusuario==numerogenerado){
        alert('Adivinaste!!!')
        console.log('adivinaste')
    } else if(numerodelusuario<numerogenerado){
        alert('Tu numero es menor')
    } else if(numerodelusuario>numerogenerado){
        alert('tu numero es mayor')
    }
    
   console.log (numerodelusuario)
 
};

