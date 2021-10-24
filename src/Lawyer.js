import Job from "./Job";

function Lawyer({
    name,
    lastName,
    age,
    gender,
    firma,
    casos = [],
    reputacion = 0,
    yearsWork = 0,
    title,
}){
    Job.call(this, name, lastName, age, gender);
    this.firma = firma;
    this.casos = casos;
    this.yearsWork = yearsWork;
    this.title = title;
    this.reputacion = reputacion;
    //Methods
    //usando el block scoupe
    this.ganarCaso = (caso) =>{
        if(caso){
            this.reputacion += 1;
        }else{
            this.reputacion = this.reputacion - 1;
        }
        this.casos.push(caso);
    };
}

Lawyer.prototype = new Job;
Lawyer.prototype.constructor = Lawyer;

export default Lawyer;