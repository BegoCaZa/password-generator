
const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/</>';
const outputValueElement = document.getElementById('output-value'); //texto
const rangeLenghtElement = document.getElementById('range-length'); //valor del range
const generateButtonElement = document.getElementById('generate-button'); 
const passwordInputElement= document.getElementById('password'); //input de la contraseña

//CALLBACKS Y FUNCIONES
const changeRange = () => {
    outputValueElement.textContent = rangeLenghtElement.value; // Que el TEXTO sea igual al VALOR del rango
};
//generar password
const generatePassword = () => {
    const passwordLength = rangeLenghtElement.value; // el mismo VALOR que el rango
    let password = ""; //cada que termine de dar la vuelta al rango, aqui guardara la contraseña
    for (let i = 0; i < passwordLength; i++) { //va a meter numeros dependiendo del nuemero del RANGO
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex); //mete al STRING la letra en ese INDICE
    }
    
    passwordInputElement.value = password; // contraseña en el input
    console.log(password); //quiero ver contraseña en la consola :)
    console.dir(rangeLenghtElement.value); //valor del rango
    
};


//EVENTOS
rangeLenghtElement.addEventListener('input', changeRange);
generateButtonElement.addEventListener('click', generatePassword);





