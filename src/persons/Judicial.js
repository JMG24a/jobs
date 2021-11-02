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
    asigPerson = undefined,
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
    this.asigPerson = asigPerson;
    this.asigCaso = asigCaso;
    //methods
    this.asigWork = ({
        nameP,
        lastNameP,
        casoP
    }) =>{
        const person = {
            nameP,
            lastNameP,
        }
        this.asigPerson = person;
        console.log(`La persona a defender es: ${this.asigPerson.nameP} ${this.asigPerson.lastNameP}`);

        this.asigCaso = casoP;
        console.log(`${this.asigCaso}`)
    }
}

Environmental.prototype = new Lawyer;
Environmental.prototype.constructor = Environmental;

export default Environmental;