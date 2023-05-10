// 1. Escribir una lista de usuarios con los siguientes 
// datos: nombre, número de documento, contraseña y tipo de usuario. 
// El tipo de usuario será: 1: administrador, 
// 2: cliente. Guardarla en un array de objetos.

const users = [{
    username: 'armelio123',
    password: 13245,
    Id: 435362738,
    type: 'admin',
},
{
    username: 'aureliano873',
    password: 13245,
    Id: 4353612324,
    type: 'admin',
},
{
    username: 'sapodermo27',
    password: 13245,
    Id: 5536108941,
    type: 'client',
},
{
    username: 'usquiano51',
    password: 13245,
    Id: 34536167456,
    type: 'client',
},
{
    username: 'pepinillo421',
    password: 13245,
    Id: 5653611234,
    type: 'client',
}
    ,
{
    username: 'sapote41',
    password: 13245,
    Id: 756536123134,
    type: 'client',
}
]


// 2. Realizar un programa que al inicio solicite ingresar 
// documento y contraseña, si el usuario no existe debe indicar 
// que no existe y volver a preguntar usuario y contraseña, 
// si el usuario es administrador, 
// debe permitir cargar el cajero de la siguiente manera:



let access = false;
let accessPassword = false
let newUser;
let newPassword ;


while (!access) {
    newUser = Number(prompt('Ingrese usuario'));
    
    for (let index = 0; index < users.length; index++) {
        if (newUser === users[index].Id ) 
        {  
            access = true;     
            console.log(`Bienvenido ${users[index].username}`)
            break;
        }
        
    }


    if (!access) {  
            console.log('Ingresaste mal el ID ');
        
        }
}
while (!accessPassword) {
    newPassword = Number(prompt('Ingrese contrasena'));
    for (let index = 0; index < users.length; index++) {
        if (newPassword === users[index].password) 
        {  
            accessPassword = true;     
            console.log(` Te has logeado`)
        break;
        }
    }

    if (!accessPassword) {  
            console.log('Ingresaste mal la contrasena');
        
        }
}





//3. Solicitar la cantidad de billetes de 5,
// 10, 20, 50 y 100 mil pesos COP.




// 4. Almacenar esta información en un array de objetos.
// 5. Una vez tenga la información, debe mostrar en consola
// la suma por cada denominación y el total general.
// 6. Una vez el cajero esté cargado, debe volver a
// solicitar usuario y contraseña, si es administrador,
// se repite el mismo proceso, sumar a la cantidad actual,
// si es cliente debe proseguir de la siguiente manera:
// 7. Si el cajero no tiene dinero cargado, debe aparecer
// un mensaje en consola: “Cajero en mantenimiento, vuelva
// pronto.” Y reiniciar desde el inicio.
// 8. Si el cajero ya tiene dinero cargado, debe preguntar
// la cantidad deseada a retirar. Una vez obtenida la información,
// debe indicar cuánto dinero puede entregar basado en la
// cantidad disponible y los tipos de billetes. Luego debe
// mostrar en consola cuántos billetes de cada denominación entregó.
// Priorizando siempre las denominaciones más altas para valores altos
// y redondeando a la cifra más cercana menor a la solicitada.
// 9. Posteriormente, debe aparecer en consola, el dinero
// restante en el cajero, por cada denominación.

