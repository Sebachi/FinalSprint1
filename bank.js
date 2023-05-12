//Base de datos usuarios
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
//Declaracion de variables
let access = false;
let accessPassword = false
let newUser;
let newPassword;
let currType = ''
// Creacion de una funcion reseteo
const reseteo = () => {
    access = false;
    accessPassword = false;
    currType = "";
    startProgram();
};
const bills = [
    {
        valor: 100,
        cantidad: 100,
    },
    {
        valor: 50,
        cantidad: 100,
    },
    {
        valor: 20,
        cantidad: 100,
    },
    {
        valor: 10,
        cantidad: 100,
    },
    {
        valor: 5,
        cantidad: 100,
    },
]
// Inicio del programa
const startProgram = () => {
    //Validacion de usuario y contrasena  
    while (!access) {
        newUser = Number(prompt('Ingrese tu numero de documento: '));
        for (let index = 0; index < users.length; index++) {
            if (newUser === users[index].Id) {
                access = true;
                console.log(`Bienvenido ${users[index].username}`)
                currType = users[index].type
                break;
            }
        }
        if (!access) {
            console.log('El usuario no existe ');
        }
    }
    while (!accessPassword) {
        newPassword = Number(prompt('Ingrese contrasena'));
        for (let index = 0; index < users.length; index++) {
            if (newPassword === users[index].password) {
                accessPassword = true;
                console.log(` Te has logeado`)
                break;
            }
        }
        if (!accessPassword) {
            console.log('Ingresaste mal la contrasena');

        }
    }

    // Declaracion de variables cache utilizadas para hacer operaciones
    const billchange = [{
        valor: 100,
        cantidad: 0,
    },
    {
        valor: 50,
        cantidad: 0,
    },
    {
        valor: 20,
        cantidad: 0,
    },
    {
        valor: 10,
        cantidad: 0,
    },
    {
        valor: 5,
        cantidad: 0,
    },
    ];
    let billinput = 0;
    let billoutput = 0;
    let temporalbill = 0;
    // Funcion para sumar todo el dinero en el cajero 
    const SumBillValue = (bills) => {
        let totalValor = 0
        for (let index = 0; index < bills.length; index++) {
            totalValor += (bills[index].valor * bills[index].cantidad)
        }
        return totalValor
    }
    let totalValor = SumBillValue(bills)
    console.log(`En el cajero hay ${totalValor}`);
    //Segunda validacion de contrasena correcta
    if (accessPassword) {
        // Operacion para ADMIN 
        if (currType == 'admin') {
            for (let i = 0; i < billchange.length; i++) {
                billchange[i].cantidad = Number(prompt(`Ingrese la cantidad de billetes de ${bills[i].valor} a ingresar`))
            }
            for (let index = 0; index < bills.length; index++) {
                bills[index].cantidad += billchange[index].cantidad
                console.log(`La cantidad de billetes de ${bills[index].valor} es de ${bills[index].cantidad}`);
            }
            totalValor = SumBillValue(bills)
            console.log("La cantidad total del dinero dentro del cajero es " + totalValor);
            //Reset del billchange
            for (let i = 0; i < billchange.length; i++) {
                billchange[i].cantidad = 0
            }
        }
        // PARA LOS CLIENTES 
        else if (currType == 'client') {
            //Si hay plata en el cajero
            if (totalValor != 0) {
                billoutput = Number(prompt('Ingresa la cantidad de dinero que deseas retirar'))
                billinput = billoutput
                //Si hay suficiente dinero en el cajero
                if (billoutput <= totalValor) {
                    console.log(`Ya ingrese el dinero`);
                    // Conteo de billetes a entregar adecuada a la cifra solicitada
                    for (let i = 0; i < billchange.length; i++) {
                        while (billoutput >= bills[i].valor && bills[i].cantidad != 0) {
                            billoutput -= bills[i].valor;
                            bills[i].cantidad -= 1;
                            temporalbill += bills[i].valor;
                            billchange[i].cantidad += 1;
                        }
                    }
                    // Si le entregara la cantidad total de la ingresada
                    if (temporalbill == billinput) {
                        console.log(`Se le puede entregar ${temporalbill}`);
                    }
                    // Si solo se pudo entregar una determinada cifra debido al redondeo
                    else {
                        console.log(`Solo se pudo sacar ${temporalbill} de los ${billinput} solicitados`);
                    }
                    //Avisa al usuario cuantos billetes de cada se entregaron
                    for (let index = 0; index < bills.length; index++) {
                        console.log(`La cantidad de billetes de ${billchange[index].valor} entregados es de ${billchange[index].cantidad}`);
                    }
                    //Avisa al usuario cuantos billetes de cada se quedaron
                    for (let index = 0; index < bills.length; index++) {
                        console.log(`La cantidad de billetes de ${bills[index].valor} en el cajero es de ${bills[index].cantidad}`);
                        billchange[index].cantidad = 0
                    }
                    //Se le resta al dinero total del cajero lo retirado y se muestra en consola
                    totalValor -= temporalbill
                    console.log("La cantidad total del dinero dentro del cajero es de " + totalValor);
                }
                //Si no hay suficiente dinero en el cajero
                else {
                    console.log('Lo sentimos, actualmente no tenemos la cantidad de dinero solicitada.');
                }
            }
            // Si no hay plata en el cajero
            else {
                console.log(`Cajero en mantenimiento, vuelva pronto.`);
            }
        }
    }
}
//Inicio del programa
startProgram();
//Boton para reset del programa
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reseteo);