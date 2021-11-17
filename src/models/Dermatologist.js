import Doctor from './Doctor'

function Dermatologist({
    name,
    lastName,
    age,
    gender,
    horasTurno,
    numeroPacientes,
    pacientesRecuperados = [],
    title,
    asigConsult,
    asigPaciente,

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
    )
    this.asigConsult = asigConsult;
    this.asigPaciente = asigPaciente;
    //methods para despues xs
    this.asigWork = ({
        nameP,
        lastNameP,
        malestarp
        }) =>{
        
            const person = {
                nameP,
                lastNameP,
            };

            this.asigPaciente = person;

            const consultori = Math.round((Math.random() * (50 - 1)) + 1); 
            this.asigConsult = consultori;
            console.log(`Al Doctor ${this.name} hoy le toca atender en el consultorio: ${consultori}`);

            console.log(`El paciente a atender es: ${person.nameP} ${person.lastNameP}`);

            const recuperado = Math.round((Math.random() * (1 - 0)) + 0); 

            switch(malestarp){
                case 'abne': {
                    console.log(`Al paciente se le asigno un jabon especial ${person.namep}`);
                    this.pacientesRecuperados.push(recuperado);
                    this.numeroPacientes = this.numeroPacientes + 1;
                    this.horasTurno = this.horasTurno - 1;
                    break;
                }
                case 'caspa': {
                    console.log(`Al paciente ${person.nameP} se le asigno otro tipo de champu`)
                    this.pacientesRecuperados.push(recuperado);
                    this.numeroPacientes = this.numeroPacientes + 1;
                    this.horasTurno = this.horasTurno - 1;
                    break;
                }
                case 'hongos': {
                    console.log(`El paciente necesita una crema para ese tipo de hongo`)
                    this.pacientesRecuperados.push(recuperado);
                    this.numeroPacientes = this.numeroPacientes + 1;
                    this.horasTurno = this.horasTurno - 1;
                    break;
                }
                default: {
                    console.log(`Lo sentimos no el doctor ${this.name} no logro determinar que le aflige necesita hacer biopcia`);
                    recuperado = 0;
                    this.pacientesRecuperados.push(recuperado);
                    this.numeroPacientes = this.numeroPacientes + 1;
                    this.horasTurno = this.horasTurno - 1;
                }
            }
            
        }
}
Dermatologist.prototype = new Doctor;
Dermatologist.prototype.constructor = Dermatologist;

export default Dermatologist;