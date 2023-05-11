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
let newPassword;
let currType = ''
const reseteo = () => {
    access = false;
    accessPassword = false;
    currType = "";
    startProgram();
};



const startProgram = () => {
    while (!access) {
        newUser = Number(prompt('Ingrese usuario'));

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

    //3. Solicitar la cantidad de billetes de 5,
    // 10, 20, 50 y 100 mil pesos COP.

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

    // 4. Almacenar esta información en un array de objetos.
    // 5. Una vez tenga la información, debe mostrar en consola
    // la suma por cada denominación y el total general.
    let billinput = 0;
    let billoutput = 0;
    let totalValor = 0
    for (let index = 0; index < bills.length; index++) {
        totalValor = totalValor + (bills[index].valor * bills[index].cantidad)

    }
    let temporalbill = 0
    // Funcion para redondear billetes
    let redondeo = () => {
        let rounded = Math.floor(billoutput);
        if (rounded % 5 !== 0) { rounded -= rounded % 5; }; return rounded
    }

    if (accessPassword === true) {

        if (currType == 'admin') {
            for (let i = 0; i < billchange.length; i++) {
                billchange[i].cantidad = Number(prompt(`Ingrese la cantiddad de billetes de ${bills[i].valor} a ingresar`))

            }
            for (let index = 0; index < bills.length; index++) {
                bills[index].cantidad = bills[index].cantidad + billchange[index].cantidad
                console.log(`La cantidad de billetes de ${bills[index].valor} es de ${bills[index].cantidad}`);
                totalValor = totalValor + (bills[index].valor * bills[index].cantidad)
            }
            console.log("La cantidad total del dinero dentro del cajero es " + totalValor);
            for (let i = 0; i < billchange.length; i++) {
                billchange[i].cantidad = 0
            }
            reseteo()

        }
        // PARA LOS CLIENTES 
        else if (currType == 'client') {

            if (totalValor != 0) {

                billoutput = Number(prompt('Ingresa la cantidad de dinero que deseas retirar'))
                billinput = billoutput
                if (billoutput < totalValor) {
                    console.log(`Ya ingrese el dinero`);
                    for (let i = 0; i < billchange.length; i++) {
                        while (billoutput >= bills[i].valor && bills[i].cantidad != 0) {

                            billoutput = billoutput - bills[i].valor;
                            bills[i].cantidad = bills[i].cantidad - 1;
                            temporalbill = temporalbill + bills[i].valor;
                            billchange[i].cantidad = billchange[i].cantidad + 1;
                        }
                    }


                    // while (billoutput => 100 && bills[0].cantidad != 0) {
                    //     billoutput = billoutput - 100;
                    //     bills[0].cantidad = bills[0].cantidad - 1;
                    //     temporalbill = temporalbill + bills[0].valor;
                    //     billchange[0].cantidad = billchange[0].cantidad + 1;

                    // }
                    // while (billoutput => 50 && bills[1].cantidad != 0) {
                    //     billoutput = billoutput - 50;
                    //     bills[1].cantidad = bills[1].cantidad - 1;
                    //     temporalbill = temporalbill + bills[1].valor;
                    //     billchange[1].cantidad = billchange[1].cantidad + 1;
                    // }
                    // while (billoutput => 20 && bills[2].cantidad != 0) {
                    //     billoutput = billoutput - 20;
                    //     bills[2].cantidad = bills[2].cantidad - 1;
                    //     temporalbill = temporalbill + bills[2].valor;
                    //      billchange[2].cantidad = billchange[2].cantidad + 1;
                    // }
                    // while (billoutput => 10 && bills[3].cantidad != 0) {
                    //     billoutput = billoutput - 10;
                    //     bills[3].cantidad = bills[3].cantidad - 1;
                    //     temporalbill = temporalbill + bills[3].valor;
                    //      billchange[3].cantidad = billchange[3].cantidad + 1;
                    // }
                    // while (billoutput => 5 && bills[4].cantidad != 0) {
                    //     billoutput = billoutput - 5;
                    //     bills[4].cantidad = bills[4].cantidad - 1;
                    //     temporalbill = temporalbill + bills[4].valor;
                    //      billchange[4].cantidad = billchange[4].cantidad + 1;
                    // }
                    if (temporalbill == billinput) {
                        console.log(`Se le puede entregar ${temporalbill}`);
                    }
                    else {
                        console.log(`Solo se pudo sacar ${temporalbill} de los ${billinput} solicitados`);
                    }
                    for (let index = 0; index < bills.length; index++) {
                        console.log(`La cantidad de billetes de ${billchange[index].valor} entregados es de ${billchange[index].cantidad}`);
                    }
                    for (let index = 0; index < bills.length; index++) {
                        console.log(`La cantidad de billetes de ${bills[index].valor} en el cajero es de ${bills[index].cantidad}`);
                        billchange[index].cantidad = 0
                    }


                }
                else {
                    console.log('Lo sentimos, actualmente no tenemos la cantidad de dinero solicitada.');
                    reseteo()
                }
            }
            else {
                console.log(`Cajero en mantenimiento, vuelva pronto.`);
                reseteo()
            }
        }

    }
}
startProgram();
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

