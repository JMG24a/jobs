import Lawyer from './Lawyer';

function Environmental({
    name,
    lastName,
    age,
    gender,
    firma,
    casos = [],
    reputacion = 0,
    yearsWork = 0,
    title,
    asigCompany = undefined,
    asigCaso = undefined,
}){
    Lawyer.call(this,
        name,
        lastName,
        age,
        gender,
        firma,
        casos,
        reputacion,
        yearsWork,
        title,
    )
    this.asigCompany = asigCompany;
    this.asigCaso = asigCaso;
    //methods
    this.asigWork = ({
        company,
        casoDemanda,
    }) =>{
        this.asigCompany = company;
        this.asigCaso = casoDemanda;
        console.log(`La empresa a demandar es ${this.asigCompany} por motivos de ${this.asigCaso}`)
    }
}

Environmental.prototype = new Lawyer;
Environmental.prototype.constructor = Environmental;

export default Environmental;