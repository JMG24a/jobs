import Job from './Job'

function Doctor({
    name,
    lastName,
    age,
    gender,
    horasTurno,
    numeroPacientes,
    pacientesRecuperados = [],
    title,
}){
    Job.call(this, name, lastName, age, gender);
    this.horasTurno = horasTurno;
    this.numeroPacientes = numeroPacientes;
    this.pacientesRecuperados = pacientesRecuperados;
    this.title = title;
    //Methods
    //aprovechando el block scope
    
    this.horasTrabajo = (horasTrabajadas, atendidos) =>{
        this.horasTurno = this.horasTurno - horasTrabajadas;
        this.numeroPacientes = this.numeroPacientes - atendidos;
    };
    this.salvar = (paciente) =>{
        this.pacientesRecuperados.push(paciente);
    } 
};


Doctor.prototype = new Job;
Doctor.prototype.constructor = Doctor;

export default Doctor;
