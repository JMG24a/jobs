import Doctor from './Doctor';

function Surgeon({
    name,
    lastName,
    age,
    gender,
    horasTurno,
    numeroPacientes,
    pacientesRecuperados = [],
    title,
    asigSala = undefined,
    asigPaciente = undefined,
    asigProcedimiento = [],
}){
    Doctor.call(this,
        name,
        lastName,
        age,
        gender,
        horasTurno,
        numeroPacientes,
        pacientesRecuperados,
        title,
    );
    this.asigSala = asigSala;
    this.asigPaciente = asigPaciente;
    this.asigProcedimiento = asigProcedimiento;
    //methods para despues mijoooo
    this.asigWork = ({
        nameP,
        lastNameP,
        sintomaP,
    }) =>{ 
        const sala = Math.round((Math.random() * (96 - 1)) + 1);
        this.asigSala = sala;
        console.log(`La operacion es en la sala: ${sala} `);

        const paciente = {
            nameP,
            lastNameP,
        }
        this.asigPaciente = paciente;
        console.log(`El paciente a atender es: ${paciente.nameP} ${paciente.lastNameP}`);

        const proceso = sintomaP;

        switch(proceso){
            case 'cerebro', 'cerebelo', 'craneo': {
                console.log(`hacer una operacion al paciente ${paciente.nameP} en el ${proceso}`);
                this.asigProcedimiento.push(paciente);
                this.numeroPacientes = this.numeroPacientes + 1;
                this.horasTurno = this.horasTurno - 7;
                break;
            }
            case 'pierna','brazos','tobillo': {
                console.log(`Al paciente se le mutilo la ${proceso} necesita una amputacion`)
                this.asigProcedimiento.push(paciente);
                this.numeroPacientes = this.numeroPacientes + 1;
                this.horasTurno = this.horasTurno - 3;
                break;
            }
            case 'corazon': {
                console.log(`El paciente necesita un transplante de ${proceso}`)
                this.asigProcedimiento.push(paciente);
                this.numeroPacientes = this.numeroPacientes + 1;
                this.horasTurno = this.horasTurno - 5;
                break;
            }
            default: {
                console.log('este paciente no se puede operar no esta en condiciones optimas')
            }
        }
        console.log(this.asigProcedimiento[0])
    }
}

Surgeon.prototype = new Doctor;
Surgeon.prototype.constructor = Surgeon;

export default Surgeon;