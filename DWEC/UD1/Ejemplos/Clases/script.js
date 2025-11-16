class Persona {

    // Constructor
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

// const ego = new Persona("Stefan");

// ego.saludar();

// Herencia - extends

class Empleado extends Persona {

    constructor(nombre, salario) {
        super(nombre);
        this.salario = salario;
    }

    trabajar() {
        const mensaje = `${this.nombre} está trabajando y gana ${this.salario}€.`;
        console.log(mensaje);

        // Para mostrarlo en HTML.
        document.getElementById("resultado").textContent = mensaje;
    }
}

const maria = new Empleado("Maria", 2000);

maria.saludar();
maria.trabajar();

