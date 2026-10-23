function sumar() { //aLgoritmo de suma con funciones
    let n1, n2, suma;

    alert("este algoritmo suma dos numeros ingresados por el usuario");
   
    n1 = parseFloat(prompt("ingrese el primer numero a sumar"));
    n2 = parseFloat(prompt("ingrese el segundo numero a sumar"));
    suma = n1 + n2;
    
    alert("EL RESULTADO DE LA SUMA ES: " + suma);
}


function operacionesBasicas() {
    let v1, v2, s, r, m, d;

    alert("este algoritmo suma, resta, multiplica y divide dos numeros ingresados por el usuario");

    v1 = parseFloat(prompt("ingrese el primer valor"));
    v2 = parseFloat(prompt("ingrese el segundo valor"));
    s = v1 + v2;
    r = v1 - v2;
    m = v1 * v2;
    d = v1 / v2;

    alert("EL RESULTADO DE LA SUMA ES: "+s+" EL DE LA RESTA ES: "+r+" EL DE LA MULTIPLICACION ES: "+m+" Y LA DIVISION ES: "+d);
}

function conversionUnidades () {
    let m, cm , km;

    alert("este algoritmo solicita una cantidad expresada en metros y la convierte en cm y km");

    m = parseFloat(prompt("ingrese la cantidad de metros"));
    cm = m * 100;
    km = m / 1000;

    alert ("el resultado en centimetros es: "+cm+" y en kilometros es: "+km);
}

function conversionTemperatura () {
    let c, k, f;

    alert("este algoritmo solicita una cantidad expresada en grados celcius y la convierte en grados kelvin y fahrenheit");

    c = parseFloat(prompt("ingrese los grados celcius"));
    k = c + 273,15;
    f = (c * 1,8)+32;

    alert("el resultado en grados kelvin es: "+ k +" y en grados fahrenheit es: "+ f);
}

function areaYPerimetroRectangulo () {
    let a,b, al, p;

    alert("este algoritmo solicita medida de base y altura de un rectangulo para hallar su area y su perimetro");

    b = parseFloat(prompt("ingrese la base del rectangulo"));
    al = parseFloat(prompt("ingrese la altura del rectangulo"));
    a = (b * al)/2;
    p = (2 * (b + al));

    alert("el area del rectangulo es de: "+ a +" y el perimetro es: "+ p );
}

function promedioDeTresNotas () {
    let  n1, n2, n3, suma, p;

    alert("algoritmo que solicita tres numeros y determina su suma y su promedio");

    n1 = parseFloat(prompt("ingrese el primer numero"));
    n2 = parseFloat(prompt("ingrese el segundo numero"));
    n3 = parseFloat(prompt("ingrese el tercer numero"));
    suma = n1 + n2 + n3;
    p = suma/3;

    alert("la suma de los numeros es de: "+ suma +" y el promedio es de: "+p);
}

function conversionDeTiempo () {
    let segundos, minutos, horas;

    alert("algoritmo que solicita una cantidad expresada en segundos y lo convierte en minutos y horas");

    segundos = parseFloat(prompt("ingrese los segundos"));
    minutos = segundos / 60;
    horas = segundos / 3600;

    alert("los segundos ingresados en minutos son: "+ minutos +" y en horas son: "+ horas);
}

function conversionDeUnidadesDePeso () {
    let kg, gr, lb, tn; 
    
    alert("algoritmo que solicita un peso expresado en kilogramos y lo convierte en gramos, libras y toneladas");

    kg = parseFloat(prompt("ingrese el peso en kilogramos"));
    gr = kg * 1000;
    lb = kg * 2,2;
    tn = kg / 1000;

    alert("el peso ingresado expresado en gramos son: "+ gr +" , en libras son: "+ lb +" y en toneladas son: "+ tn);
}

function pesoEnDiferentesPlanetas () {
    let p, ma, ne, me, ju, lu, ve, ti, sa, ur;

    alert("algortimo que determina el peso de una persona expresado en kg en diferentes planetas");

    p = parseFloat(prompt("ingrese el peso"));
    ma = p * 3,71;
    ne = p * 11,15;
    me = p * 3,70;
    ju = p * 24,79; 
    lu = p * 1,62;
    ve = p * 8,87;
    ti = p * 9,81;
    sa = p * 10,44;
    ur = p * 8,69;

    alert("el peso en Marte es de: "+ ma +" en Neptuno es de: "+ ne +" en Mercurio es de: "+ me +" en Jupiter es de: "+ ju +" en la Luna es de: "+ lu +" en Venus es de: "+ ve +" en la Tierra es de "+ ti +" en Saturno es de: "+ sa +" y en Urano es de: "+ ur);
}

function calculoDeUnaCompra () {
    let p1, c1, p2, c2, p3, c3, ct, vt;

    alert("algoritmo que determina el precio de una compra segun el precio y la cantidad de los productos ingresados");

    p1 = parseFloat(prompt("ingrese el valor del primer producto"));
    c1 = parseFloat(prompt("ingrese la cantidad del primer producto"));
    p2 = parseFloat(prompt("ingrese el valor del segundo producto"));
    c2 = parseFloat(prompt("ingrese la cantidad del segundo producto"));
    p3 = parseFloat(prompt("ingrese el valor del tercer producto"));
    c3 = parseFloat(prompt("ingrese la cantidad del tercer producto"));
    ct = c1 + c2 + c3;
    vt = (p1 + p2 + p3)* ct;

    alert("el primer producto con un valor de $"+ p1 +" se ingresaron "+ c1 +" y el segundo producto con un valor de $"+ p2 +" se ingresaron "+ c2 +" y el tercer producto con un valor de $"+ p3 +" se ingresaron "+ c3 +" lo que da un total a pagar de: $"+vt);
}
 function calculoDeSalario () {
    let sala, dt, sl, p, b, sf;

    alert("algoritmo que calcula el valor del pago de un trabajador a partir de informacion como salario, dias trabajados y otros valores");

    sala = parseFloat(prompt("ingrese el salario mensual del trabajador"));
    dt = parseFloat(prompt("ingrese los dias trabajados"));
    b = parseFloat(prompt("ingrese la bonificacion"));
    sl = sala * 0.04;
    p = sala * 0.04;
    sf = (sala - (sl + p)) + b;

    alert("el trabajador con un salario inicial de: $"+ sala +" los dias trabajados que son: "+ dt +" se le agrega una bonificacion de: $" + b +" se le descuenta la salud: $"+ sl +" y la pension: $"+ p +" lo que da un salario final de: $"+ sf);
 }

function facturaDeUnServicio () {
    let lg, im, sbt, tp;

    alert("algoritmo que a partir del consumo de un servicio, el valor por unidad y el porcentaje de impuesto, determine el subtotal el valor del impuesto y el total a pagar");
    lg = parseFloat(prompt("ingrese los litros de agua que se gasto en el mes"));
    sbt = lg * 30;
    im = sbt * 0.04;
    tp = sbt + im;

    alert("los litros gastados fueron: "+ lg +" teniendo en cuenta que cada litro tiene un costo de $30 el subtotal es de: "+ sbt +" mas el impuesto del 4% da: "+ im +" lo que da un total a pagar de: "+ tp);
}

function costoDeUnViajeEnVehiculo () {
    let d, cp, pc, dycp, pydycp;

    alert("algoritmo que determine el costo de un viaje en vehiculo segun la distancia recorrida, el costo promedio del combustible y el precio del combustible");

    d = parseFloat(prompt("ingrese la distancia recorrida"));
    cp = parseFloat(prompt("ingrese el consumo promedio de gasolina"));
    pc = parseFloat(prompt("ingrese el precio de la gasolina"));
    dycp = d / cp;
    pydycp = dycp*pc;

    alert("la distancia recorrida fue de: "+ d +"km, el consumo promedio del vehiculo fue de: "+ cp +" por litro y el precio del combustible es de: $"+ pc +" lo que da un costo total de: $"+ pydycp);
}

function calculoDeUnTiempoDeUnViaje () {
    let d, v, t;

    alert("algoritmo que calcula el tiempo de un viaje segun la distancia recorrida y la velocidad a la que viaja");
    
    d = parseFloat(prompt("ingrese la distancia recorrida"));
    v = parseFloat(prompt("ingrese la velocidad a la que viajan"));
    t = d / v;

    alert("la distancia del recorrido es de: "+ d +" con una velocidad promedio de: "+ v +" y el tiempo del viaje fue de: "+ t +"hrs");
}


function sistemaBasicoDeNotas () {
    let nt1, nt2, nt3, p1, p2, p3, nf;

    alert("algoritmo que calcula la nota final de un estudiante segun la nota de las actiividades y el porcentaje de cada una");

    nt1 = parseFloat(prompt("ingrese la primera nota"));
    nt2 = parseFloat(prompt("ingrese la segunda nota"));
    nt3 = parseFloat(prompt("ingrese la tercera nota"));
    p1 = nt1 * 0.20;
    p2 = nt2 * 0.30;
    p3 = nt3 * 0.50;
    nf = p1 + p2 +p3

    alert("la nota final del estudiante es de: "+ nf);
}

function conversorDeMonedas () {
    let pc, dl, eu;

    alert("algoritmo que solicita un valor en pesos colombianos y lo convierte en dolares y en euros");

    pc = parseFloat(prompt("ingrese el valor de pesos colombianos"));
    dl = pc / 3264,39;
    eu = pc / 3721,89;

    alert("el valor ingresado en pesos colombianos son: $"+ dl +" dolares, y : $"+ eu +" euros");
}



// algoritmos condicionales



function numeroPositivo() {
    let numero;
    
    alert("algoritmo que determina si un numero es positivo o negativo");

    numero = parseFloat(prompt("ingrese un numero"));

    if (numero > 0) {
        alert("el numero es positivo");
    }else {
        alert("el numero es negativo");
    }
}

function numeroParOImpar() {
    let numero;

    alert("algoritmo que determina si un numero es par o impar");

    numero = parseFloat(prompt("ingrese un numero"));

    if (numero % 2 == 0) {
        alert("el numero es par");
    }else {
        alert("el numero es impar");
    }
}

function mayorDeDosNumeros() {
    let n1, n2;

    alert("algoritmo que determina el mayor de dos numeros");

    n1 = parseFloat(prompt("ingrese el primer numero"));
    n2 = parseFloat(prompt("ingrese el segundo numero"));

    if (n1 > n2) {
        alert(n1 +" es mayor que "+ n2);
    }else if (n2 > n1) {
        alert(n2 +" es mayor que "+ n1);
    }else{
        alert ("los numeros son iguales");
    }
}

function descuentoPorCompra() {
    let vc, d, tp;

    alert("algoritmo que determina si se le aplica descuento a una compra segun el valor de la misma");

    vc = parseFloat(prompt("ingrese el valor de la compra"));

    if (vc >= 200000) {
        d = vc * 0.10;
        tp = vc - d;
        alert("obtuvo 10% de descuento por su compra, el total a pagar es de: $"+ tp);
    }else {
        tp = vc;
        alert("el total a pagar es de: $"+ tp);
    }
}

function temperaturaDeUnaCiudad() {
    let t;

    alert("algoritmo que determina si la temperatura el alta o no alta");

    t = parseFloat(prompt("ingrese la temoeratura"));

    if (t > 30) {
        alert("la temperatura es alta");
    }else {
        alert("la temperatura no es alta");
    }
}

function MayorDeEdad() {
    let edad;

    alert("algoritmo que determina si una persona es mayor de edad o no");

    edad = parseFloat(prompt("ingrese la edad"));

    if (edad >= 18) {
        alert("la persona es mayor de edad");
    } else {
        alert("la persona es menor de edad");
    }
}

function retiroDeDinero() {
    let sd, vr, sf;

    alert("algoritmo que determina si un retiro de dinero se puede realizar o no");

    sd = parseFloat(prompt("ingrese el saldo disponible en la cuenta"));
    vr = parseFloat(prompt("ingrese el valor del retiro que desea realizar"));

    if (vr <= sd) {
        sf = sd - vr;
        alert("el retiro se realizo con exito, el saldo final es de: $"+ sf);
    } else {
        alert("el retiro no se pudo realizar, intentelo de nuevo");
    }
}

function envioGratuito() {
    let vp, pf;

    alert("algoritmo que determine si el envio de un producto es gratuito o no segun su precio de compra");

    vp = parseFloat(prompt("ingrese el valor de la compra"));

    if (vp >= 150000) {
        alert("el envio del producto es gratis");
    } else {
        pf = vp + 12000;
        alert("se le aplico el costo del envio que son 12k lo que da un precio final de: $"+ pf);
    }
}

function numeroMayorOMenorQueOtro() {
    let n1, n2;

    alert("algoritmo que determina si un numero es mayor o menor que otro");

    n1 = parseFloat(prompt("ingrese el primer numero"));
    n2 = parseFloat(prompt("ingrese el segundo numero"));

    if (n1 > n2) {
        alert(n1 +" es mayor que "+ n2);
    }else if (n2 > n1) {
        alert(n1 +" es menor que "+ n2);
    }else {
        alert("los numeros son iguales");
    }
}

function tarifaDeParqueadero() {
    let t;

    alert("algoritmo que determina la tarifa de un parqueadero segun el tiempo de permanencia");

    t = parseFloat(prompt("ingrese el tiempo de permanencia en el parqueadero en horas"));

    if (t <= 1) {
        alert("la tarifa de parqueadero son 5k");
    }else if (t > 1 && t <=3) {
        alert("la tarifa del parqueadero son 10k");
    }else if (t > 3 && t <= 6) {
        alert("la tarifa del parqueadero son 18k");
    }else if (t > 6) {
        alert("la tarifa del parqueadero son 25k");
    }else {
        alert("la tarfia del parqueadero son 18k");
    }
}

function tarifaDeTransporte() {
    let edad;

    alert("algoritmo que determina la tarifa de transporte segun la edad ingresada");

    edad = parseFloat(prompt("ingrese la edad del pasajero"));

    if (edad <= 5) {
        alert("el valor de la tarifa de transporte es gratis");
    }else if (edad > 5 && edad <= 17) {
        alert("el valor de la tarifa de transporte es de 2k");
    }else if (edad > 17 && edad <= 59) {
        alert("el valor de la tarifa de transporte es de 3.5k");
    }else if (edad > 59) {
        alert("el valor de la tarifa de transporte es de 2.5k");
    }else {
        alert("el valor de la tarifa de transporte es de 3.5k");
    }
}

function clasificacionDeVelocidad() {
    let v;

    alert("algoritmo que determina la clasificacion de la velocidad ingresada");

    v = parseFloat(prompt("ingrese la velocidad"));

    if (v <= 30) {
        alert("la velocidad es baja");
    }else if (v > 30 && v <= 60) {
        alert("la velocidad es moderada");
    }else if (v > 60 && v <= 100) {
        alert("la velocidad es alta");
    }else if (v > 100) {
        alert("la velocidad es muy alta");
    }else {
        alert("la velocidad es alta");
    }
}

function mesYDias() {
    let nm;

    alert("algoritmo que determina cuantos dias tiene el mes que se ingrese segun su numero en el calendario");

    nm = parseInt(prompt("ingrese el numero del mes"));

    if (nm == 1) {
        alert("el mes tiene 31 dias");
    }else if (nm == 2) {
        alert("el mes tiene 28 dias");
    }else if (nm == 3) {
        alert("el mes tiene 31 dias");
    }else if (nm == 4) {
        alert("el mes tiene 30 dias");
    }else if (nm == 5) {
        alert("el mes tiene 31 dias");
    }else if (nm == 6) {
        alert("el mes tiene 30 dias");
    }else if (nm == 7) {
        alert("el mes tiene 31 dias");
    }else if (nm == 8) {
        alert("el mes tiene 31 dias");
    }else if (nm == 9) {
        alert("el mes tiene 30 dias");
    }else if (nm == 10) {
        alert("el mes tiene 31 dias");
    }else if (nm == 11) {
        alert("el mes tiene 30 dias");
    }else if (nm == 12) {
        alert("el mes tiene 31 dias");
    }else {
        alert("el mes no existe");
    }
}

function mesYDias2() {
    let m;

    alert("algoritmo que determina el nombre del mes segun su numero en el calendario");

    m = parseInt(prompt("ingrese el numero del mes"));

    switch (m) {
        case 1:
            console.log("enero");
            break;
        case 2:
            console.log("febrero");
            break;
        case 3:
            console.log("marzo");
            break;
        case 4:
            console.log("abril");
            break;
        case 5:
            console.log("mayo");
            break;
        case 6:
            console.log("junio");
            break;
        case 7:
            console.log("julio");
            break;
        case 8:
            console.log("agosto");
            break;
        case 9:
            console.log("septiembre");
            break;
        case 10:
            console.log("octubre");
            break;
        case 11:
            console.log("noviembre");
            break;
        case 12:
            console.log("diciembre");
            break;
        default:
            break;
    }
}

function accesoAUnaAtraccion() {
    let ed, est;

    alert("algoritmo que determina si una persona es apta para entrar a una atraccion dependiendo de la edad y la estatura");

    ed = parseInt(prompt("ingrese la edad"));
    est = parseFloat(prompt("ingrese la estatura"));
    
    if (ed >= 12 && est >= 140) {
        alert("la persona puede ingresar a la atraccion");
    }else {
        alert("la persona no puede ingresar a la atraccion");
    }
}

function descuentoSegunCliente() {
    let tcl, vp, ds, tp;

    alert("algoritmo que determine que descuento aplicar al valor de la compra segun el tipo de cliente");

    tcl = prompt("ingrese el tipo de cliente");

    if (tcl == "normal") {
        vp = parseFloat(prompt("ingrese el precio del pedido"));
    }else if (vp > 200000) {
        d = vp * 0.05;
        tp = vp - d;
        alert("por su compra superior a los 200k obtuvo un descuento del 5% que son: $"+ d +" y el total a pagar es de: "+ tp);
    }else {
        alert("el precio a pagar es de: $"+ vp);
    }

    if (tcl == "frecuente") {
        vp = parseFloat(prompt("ingrese el precio del pedido"));
    }else if (vp > 200000) {
        d = vp * 0.10;
        tp = vp - d;
        alert("por su compra superior a los 200k obtuvo un descuento del 10% que son: $"+ d +" y el total a pagar es de: $"+ tp);
    }else {
        alert("el precio a pagar es de: $"+ vp);
    }
}

function cajeroAutomatico() {
    let sd, vr;

    alert("algoritmo que determina si un retiro en un cajero se puede realizar segun 3 reglas");

    sd = parseFloat(prompt("ingrese el saldo disponible en la cuenta"));
    vr = parseFloat(prompt("ingrese el valor del retiro que desea hacer"));

    if (vr > 0 && vr % 2 == 0 && vr < sd) {
        alert("retiro realizado con exito");
    }else {
        alert("el retiro no se pudo realizar");
    }
}

function validacionDeContraseña() {
    let usuario, clave, usr, pss;

    alert("algoritmo que determina si el usuario y la contraseña es correcta para iniciar sesion en una pagina");

    usuario = "admin";
    clave = "123";
    usr = prompt("ingrese el usuario");
    ps = prompt("ingrese la contraseña");
    if (usr == usuario && ps == clave) {
        alert("bienvenido usuario");
    }else {
        alert("el usuario o la contraseña es incorrecta");
    }
}

function añoBisiesto() {
    let año;

    alert("algoritmo que determina si un año ingresado es bisiesto o no");

    año = parseInt(prompt("ingrese el año"));

    if ((año % 4 == 0 && !(año % 100 == 0)) || año % 400 == 0) {
        alert("el año "+ año +" es bisiesto");
    }else {
        alert("el año "+ año +" no es bisiesto");
    }
}

function clasificacionDeTriangulos() {
    let ld1, ld2, ld3;

    alert("algoritmo que determina el tipo de triangulo segun las medidas de sus lados");

    ld1 = parseFloat(prompt("ingrese la medida del primer lado"));
    ld2 = parseFloat(prompt("ingrese la medida del segundo lado"));
    ld3 = parseFloat(prompt("ingrese la medida del tercer lado"));

    if ((ld1 == ld2) && (ld2 == ld3)) {
        alert("el triangulo es equilatero");
    }else if ((ld1 == ld2) || (ld1 == ld3) || (ld2 == ld3)) {
        alert("el triangulo es isosceles");
    }else {
        alert("el triangulo es escaleno");
    }
}

function calculadora() {
    let n1, n2, o;

    alert("algoritmo que realiza una operacion segun el numero de la operacion que se ingrese la realiza con los numeros que se ingresen");

    n1 = parseFloat(prompt("ingrese el primer numero"));
    n2 = parseFloat(prompt("ingrese el segundo numero"));
    o = parseInt(prompt("ingrese la operacion que desea realizar: 1 = suma 2 = resta 3 = multiplicacion 4 = division"));

    if (o == 1) {
        o = n1 + n2;
        alert("el resultado de la suma es: "+ o);
    }else if (o == 2) {
        o = n1 - n2;
        alert("el resultado de la resta es: "+ o);
    }else if (o == 3) {
        o = n1 * n2;
        alert("el resultado de la multiplicacion es: "+ o);
    }else if (o == 4 && n2 > 0) {
        o = n1 / n2;
        alert("el resultado de la division es: "+ o);
    }else {
        alert("seleccione una de las operaciones dispuestas")
    }
}

function sitemaDeTarifasDeEquipaje() {
    let p;

    alert("algoritmo que determina la tarifa de transporte de una maleta segun su peso ingresado");

    p = parseFloat(prompt("ingrese el peso de la maleta"));

    if (p < 23) {
        alert("el transporte de la maleta es gratis");
    }else if (p > 23 && p <= 30) {
        alert("la tarifa de transporte de la maleta es de: $50k");
    }else if (p > 30 && p <= 40) {
        alert("la tarifa de transporte de la maleta es de: $100k");
    }else {
        alert("no se puede transportar la maleta");
    }
}

function facturaDeCompra() {
    let vc, d, vd, tp;
    const iva = 0.19

    alert("algoritmo que determina la factura de una compra con el valor de la compra, el descuento, el iva y el total a pagar");

    vc = parseFloat(prompt("ingrese el valor de la compra"));

    if (vc < 100000) {
        alert("no obtuvo ningun descuento, total a pagar: $"+ vc);
    }else if (vc > 100000 && vc <= 299999) {
        d = vc * 0.05;
        vd = vc - d;
        tp = vd - (vd * iva);
        alert("por su compra de: $"+ vc +" obtuvo un descuento del 5% que son: $"+ d +", lo que da un valor con descuento de: $"+ vd +", se le cobro el iva que es el 19% lo que da un total a pagar de: $"+ tp);
    }else if (vc >= 300000 && vc <= 499999) {
        d = vc * 0.10;
        vd = vc - d;
        tp = vd - (vd * iva);
        alert("por su compra de: $"+ vc +" obtuvo un descuento del 10% que son: $"+ d +", lo que da un valor con descuento de: $"+ vd +", se le cobro el iva que es el 19% lo que da un total a pagar de: $"+ tp);
    }else {
        d = vc * 0.15;
        vd = vc - d;
        tp = vd - (vd * iva);
        alert("por su compra de: $"+ vc +" obtuvo un descuento del 15% que son: $"+ d +", lo que da un valor con descuento de: $"+ vd +", se le cobro el iva que es el 19% lo que da un total a pagar de: $"+ tp);
    }
}

function sistemaDeRiesgo() {
    let ed, im;

    alert("algoritmo que determina si una persona es apta para una solicitud de credito");

    ed = parseFloat(prompt("ingrese la edad de la persona"));
    im = parseFloat(prompt("ingrese los ingresos mensuales de la persona"));

    if (ed >= 18 && ed <= 25 && im >= 2000000) {
        alert("es elegible para el credito");
    }else if (ed > 25 && im >= 1500000) {
        alert("es elegible para el credito");
    }else {
        alert("no es elegible para el credito");
    }
}

function mayorMenorIgualdad3Numeros() {
    let n1, n2, n3;

    alert("algoritmo que determina el numero mayor, el numero menor o si hay igualdad entre 3 numeros");

    n1 = parseFloat(prompt("ingrese el primer numero"));
    n2 = parseFloat(prompt("ingrese el segundo numero"));
    n3 = parseFloat(prompt("ingrese el tercer numero"));

    if (n1 == n2 || n1 == n3 || n2 == n3) {
        alert("existen numeros iguales");
    }else if (n1 < n2 && n1 < n3) {
        alert(n1 +" es el menor y "+ n2 +" el mayor");
    }else if (n2 < n1 && n2 < n3) {
        alert(n2 +" es el menor y "+ n2 +" el mayor");
    }else if (n3 < n1 && n3 < n2) {
        alert(n3 +" es el menor y "+ n2 +" el mayor");
    }else {
        alert("no existen valores iguales");
    }
}



// algoritmos de Bucles



function contarNumeros() {
    let ni, nl;

    alert("bucle que cuenta desde un numero inicial ingresado hasta un numero limite ingresado");

    ni = parseFloat(prompt("ingrese el numero inicial"));
    nl = parseFloat(prompt("ingrese el numero limite"));
 
    for (let i = ni; i <= nl; i ++) {
        console.log(i);
    }
}

function cuentaRegresiva() {
    let ni;

    alert("bucle que hace una cuenta regresiva desde el numero inicial hasta 0");

    ni = parseFloat(prompt("ingrese el numero inicial"));

    for (let i = ni; i >= 0; i --) {
        console.log(i);
    }
}

function numerosPares() {
    let lim, contador;

    alert("bucle que cuenta desde el 1 hasta un numero limite y muestra los numeros pares");

    lim = parseFloat(prompt("ingrese el numero limite"));
    contador = 1

    while (contador < lim) {
        if (contador % 2 == 0) {
            contador =  contador + 2;
            console.log(contador);
        }else {
            contador = contador + 1;
            console.log(contador);
        }
    }
}

function numerosImpares() {
    let lim, contador;

    alert("bucle que cuenta desde el 1 un numero limite y muestra los numeros impares");

    lim = parseFloat(prompt("ingrese el numero limite"));
    contador = 0

    while (contador < lim) {
        if (contador % 2 == 0) {
            contador = contador + 1;
            console.log(contador);
        }else {
            contador = contador + 2;
            console.log(contador);
        }
    }
}

function sumaNumeros() {
    let lim, sm, contador;

    alert("bucle que solicita un numero limite y hace la suma de esos numeros desde 1 hasta el numero limite");

    lim = parseFloat(prompt("ingrese el numero limite"));
    contador = 1
    sm = 0

    while (contador <= lim) {
        sm = sm + contador;
        contador = contador + 1;
    }alert("el resultado de la suma es: "+ sm);
}

function tablaDeMultiplicar() {
    let n;

    alert("bucle que solicita un numero y da su tabla de multiplicar hasta 10");

    n = parseFloat(prompt("ingrese un numero"));
    
    for (let i = 1; i <= 10; i ++) {
        console.log(n +" * "+ i +" = "+  (n*i));
    }
}

function paresEImpares() {
    let nl, contador, np, ni;

    alert("bucle que solicita un numero limite y muestras la cantidad de numeros pares e impares que hay entre 1 y el limite");

    nl = parseFloat(prompt("ingrese el numero limite"));
    contador = 1
    np = 0
    ni = 0

    while (contador <= nl) {
        if (contador % 2 == 0) {
            np = np + 1;
            contador = contador + 1;
        }else {
            ni = ni + 1
            contador = contador + 1;
        }
    }
    alert("la cantidad de pares que hay es: "+ np +" y la cantidad de impares es: "+ ni);
}

function promedioDeNumeros() {
    let cn, n, sm, contador, p, nbn;

    alert("bucle que solicita la cantidad de numeros que se va a ingresar y con los valores ingresados los suma y hace su promedio");

    cn = parseFloat(prompt("ingrese la cantidad de numeros que desea ingresar"));
    sm = 0
    contador = 1
    nbn = 1

    while (contador <= cn) {
        n = parseFloat(prompt("ingrese el "+ nbn +" numero"));
        sm = sm + n;
        p = sm / cn;
        contador = contador + 1;
        nbn = nbn + 1;
    }
    alert("se ingreso un total de: "+ cn +" numeros, la suma de los numeros es de: "+ sm +" y su promedio es de: "+ p);
}

function numeroMayor() {
    let cn, n, nm, contador, nbn;

    alert("bucle que solicita la cantidad de numeros que se va a ingresar y los compara uno por uno para hallar el mayor de todos");

    cn = parseFloat(prompt("ingrese la cantidad de numeros que desea ingresar"));
    contador = 1;
    nbn = 1;
    nm = 0;

    while (contador <= cn) {
        n = parseFloat(prompt("ingrese el "+ nbn +" numero"));
        nbn = nbn + 1;
        contador = contador + 1; 

        if (n > nm) {
            nm = n;
        }
    }alert("el numero mayor es: "+ nm);
}

function numeroMenor() {
    let cn, n, n1, nm, nm1, contador, nbn;

    alert("bucle que solicita la cantidad de numeros que se va a ingresar y los compara uno por uno para hallar el menor de todos");

    cn = parseFloat(prompt("ingrese la cantidad de numeros que desea ingresar"));
    contador = 1;
    nbn = 2;
    n1 = parseFloat(prompt("ingrese el 1 numero"));

    while (contador < cn) {
        n = parseFloat(prompt("ingrese el "+ nbn +" numero"));
        nbn = nbn + 1;
        contador = contador + 1;
        nm1 = n1;

        if (n < nm1) {
            nm = n;
        }
    }alert("el numero menor es: "+ nm);
}

function clasificacinNumeros() {
    let cn, n, contador, np, ng, nic, nbn; 

    alert("bucle que solicita una cantidad de numeros y los recorre desde 1 hasta el limite, al final muestra la cantidad de numeros positivos, negativos o igual a cero");

    cn = parseFloat(prompt("ingrese la cantidad de numeros que desea ingresar"));
    contador = 1;
    nbn = 1;
    np = 0;
    ng = 0;
    nic = 0;

    while (contador <= cn) {
        n = parseFloat(prompt("ingrese el "+ nbn +" numero"));
        nbn = nbn + 1;
        contador = contador + 1;

        if (n > 0) {
            np = np + 1;
        }else if (n < 0) {
            ng = ng + 1;
        }else if (n == 0) {
            nic = nic + 1;
        }
    }
    alert("hay "+ np +" numeros positivos, "+ ng +" numeros negativos y "+ nic +" numeros iguales a cero");
}

function estadisticasDeVentas() {
    let cv, vv, vv1, tv, vy, vm, p, nv;

    alert("bucle que recibe el numero de ventas y solicita cada una, al final determina el total de las ventas, venta mas alta, la mas baja y el promedio");

    cv = parseFloat(prompt("ingrese la cantidad de ventas que desea ingresar"));
    vv1 = parseFloat(prompt("ingrese el valor de la 1 venta"));
    tv = vv1; 
    vy = 0;
    vm = vv1;
    p = 0;
    nv = 2;

    while (nv <= cv) {
        vv = parseFloat(prompt("ingrese el valor de la "+ nv +" venta"));
        nv = nv + 1;
        tv = tv + vv;

        if (vv > vy) {
            vy = vv;
        }else if (vv < vv1) {
            vm = vv;
        }
    }
    p = tv / cv;
    alert("el valor total de las ventas es de: "+ tv +", el promedio de las ventas es de: "+ p +", la venta mayor es de: $"+ vy +" y la menor es de: $"+ vm);
}

function ingresarNumerosHastaCero() {
    let n, sm, c, p;

    alert("bucle que solicita numeros hasta que se ingrese un cero, al final muestra la cantidad de numeros, su suma y el promedio");

    n = parseFloat(prompt("ingrese un numero"));
    sm = 0;
    c = 0;

    while (n != 0) {
        c = c +1;
        sm = sm + n;
        n = parseFloat(prompt("ingrese otro numero"));
    }
    p = sm / c;

    alert("se ingresaron un total de "+ c +" numeros, su suma es de: "+ sm +" y el promedio es de: "+ p);
}

function validacionDeContraseña() {
    let cg, ci;

    alert("bucle que valida una contraseña ingresada y verifica si es correcta o incorrecta");

    cg = "222709";
    ci = prompt("ingrese la contraseña");

    while (ci != cg) {
        alert("la contraseña es incorrecta");
        ci = prompt("vuela a ingresar la contraseña");
    }
    alert("la contraseña es correcta, bienvenido!");
}

function menuDeOpciones() {
    let op, p;

    alert("bucle que muestra un menu de opciones que se muestra frecuentemente y solo finaliza cuando el usuario eliga salir");

    op = 0;

    while (op != 4) {
        alert("bienvenido, echale un vistazo a nuestro menu: 1. mostrar mensaje   2. mostrar informacion   3. realizar una operacion   4. salir");

        op = parseInt(prompt("seleccione una opcion"));

        if (op == 1) {
            alert("bienvenido a EduTrace IA, en que le podemos servir");
        }else if (op == 2) {
            alert("somos una multiplataforma para facilitar el trabajo escolar");
        }else if (op == 3) {
            alert("haciendo operacion matematica..");
        }else if (op == 4) {
            alert("gracias por su atencion nos vemos luego");
        }else {
            alert("opcion no valida intente de nuevo");
        }
    }
}

function cajeroAutomatico2() {
    let op, sd, mt;

    alert("bucle de cajero con un saldo inicial de 500k, usuario puede escojer entre opciones y finaliza cuando escoja salir");

    sd = 500000
    op = 0;

    while (op != 4) {
        alert("bienvenido al cajero automatico, su saldo es de 500k, seleccione una opcion a realizar: 1. consultar saldo   2. retirar dinero   3. depositar dinero   4. salir");

        op = parseInt(prompt("seleccione una opcion"));

        if (op == 1) {
            alert("su saldo es de: $"+ sd);
        }else if (op == 2) {
            mt = parseFloat(prompt("ingrese la cantidad de dinero que desea retirar"));
            if (mt > 0 && mt <= sd) {
                sd = sd - mt;
                alert("retiro realizado con exito, saldo: $"+ sd);
            }else {
                alert("error del retiro, el monto que desea retirar debe ser mayor de 0 y menor que el saldo disponible");
            }
        }else if (op == 3) {
            mt = parseFloat(prompt("ingrese la cantidad de dinero que desea depositar"));
            sd = sd + mt;
            alert("deposito realizado con exito, saldo: $"+ sd); 
        }else if (op == 4) {
            alert("gracias por su atencion, nos vemos luego");
        }else {
            alert("opcion no valida, intente de nuevo");
        }
    }
}

function sistemaDenotas() {
    let ce, nt, nt1, ne, sm, ap, rp, my, mn, p; 

    alert("bucle que solicita un numero de estudiantes de un grupo, solcita las notas y al final muestra los aprobados, los reprobados, nota mayor, nota menor y el promedio");

    ce = parseInt(prompt("ingrese la cantidad de estudiantes del grupo"));
    nt1 = parseFloat(prompt("ingrese la nota final del 1 estudiante"));
    sm = nt1; 
    ne = 2;
    mn = nt1;
    my = nt1;
    ap = 0;
    rp = 0;

    if (nt1 >= 3.0){
        ap = ap + 1;
    }else {
        rp = rp + 1;
    }

    while (ne <= ce) {
        nt = parseFloat(prompt("ingrese la nota final del "+ ne +" estudiante"));
        sm = sm + nt; 
        ne = ne +1;

        if (nt >= 3.0) {
            ap = ap + 1;
        }else {
            rp = rp + 1;
        }if (nt > my) {
            my = nt;
        }else if (nt < mn) {
            mn = nt;
        }
    }
    p = sm / ce;
    alert("se ingresaron las notas de "+ ce +" estudiantes, aprobaron "+ ap +" estudiantes, reprobaron "+ rp +" estudiantes, promedio de grupo de "+ p +" la nota mas alta fue de "+ my +" y la menor de "+ mn);
}

function adivinarElNumero() {
    let ns, op, n;

    alert("bucle que solicita un numero y lo compara con el numero secreto y determina si acierta o no, saca el numero de intentos");

    ns = 77;
    n = 0; 
    op = 0;

    while (n != ns) {
        n = parseFloat(prompt("ingrese un numero para tratar de adivinar el numero secreto"));
        op = op + 1;

        if (n < ns) {
            alert("el numero secreto es mas alto");
        }else if (n > ns) {
            alert("el numero secreto es mas bajo");
        }else if (n == ns) {
            alert("felicidades!!, acerto al numero, se lo gano");
        }
    }alert("tuvo un total de "+ op +" intentos");
}

function registroDeProductos() {
    let cp, cd, np, pp, nbp, vti, pm, pmn, pdm, pdmn; 

    alert("bucle de un registro de productos en una compra, solicita el nombre del producto y el precio, al final muestra la cantidad de productos  registrados, valor total del inventario, producto mayor y producto menor");
    
    cp = parseFloat(prompt("ingrese la cantidad de productos que desea registrar"));
    np = prompt("ingrese el nombre del 1 producto");
    pp = parseFloat(prompt("ingrese el precio del 1 producto"));
    cd = parseFloat(prompt("ingrese la cantidad del 1 producto"));
    vti = pp * cd;
    pm = pp; 
    pmn = pp; 
    pdm = np;
    pdmn = np; 
    nbp = 2;

    while (nbp <= cp) {
        np = prompt("ingrese el nombre del "+ nbp +" producto");
        pp = parseFloat(prompt("ingrese el precio del "+ nbp +" producto"));
        cd = parseFloat(prompt("ingrese la cantidad del "+ nbp +" producto"));
        vti = vti + (pp * cd);

        if (pp > pm) {
            pm = pp
            pdm = np; 
        }else if (pp < pm) {
            pmn = pp; 
            pdmn = np; 
        }
        nbp = nbp + 1;
    }
    alert("resumen de la compra:  total de productos registrados: "+ cp +", valor total del inventario: $"+ vti +", producto con mayor precio: "+ pdm +" ( $"+ pm +" ), producto con menor precio: "+ pdmn +" ( $"+ pmn +" )");
}

function acumuladorHastaLimite() {
    let cd, n, sm, p;

    alert("bucle que solcita numeros hasta llegar a 100 y determina la cantidad de numeros que se ingresaron, su suma y su promedio");
    sm = 0;
    cd = 0;

    while (sm < 100) {
        n = parseFloat(prompt("ingrese un numero"));
        sm = sm + n;
        cd = cd + 1; 
    }
    p = sm / cd;
    alert("cantidad de numeros ingresados: "+ cd +", suma de los numeros: "+ sm +" y el promedio de los numeros: "+ p);
}

function sistemaDeCompras() {
    let cd, pp, sbt, d, tp, ct, c, sbtd, np, viva;
    const iva = 0.19 

    alert("bucle de un sistema de compras, solicita valor y nombre del producto, y determina el total a pagar segun impuestos y descuentos aplicados");

    viva = 0;
    sbt = 0; 
    ct = 0; 
    c = "si";

    while (c == "si") {
        np = prompt("ingrese el nombre del producto");
        pp = parseFloat(prompt("ingrese el precio del producto"));
        cd = parseFloat(prompt("ingrese la cantidad de productos que desea"));
        sbt = sbt + (pp * cd);
        ct = ct + cd;
        c = (prompt("¿desea agregar otro producto? (si / no)"));
    }
    if (sbt <= 299999) {
        d = sbt * 0.05;
    }if (sbt <= 499999) {
        d = sbt * 0.10;
    }else {
        d = sbt * 0.15;
    }
    sbtd = sbt - d;
    viva = sbtd * iva
    tp = sbtd + viva;
    alert("factura: unidades en total: "+ ct +"    subtotal: $"+ sbt +"    descuento: $"+ d +"    iva (19 %): $"+ viva +"    total a pagar: $"+ tp);
}