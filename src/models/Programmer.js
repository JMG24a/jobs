import Job from "./Job";

function Programmer(
    name,
    lastName,
    age,
    gender, 
    experience,
    yearsWork,
    title,
    tools = [],
){
    Job.call(this,name,lastName,age,gender);
    this.experience = experience;
    this.yearsWork = yearsWork;
    this.title = title;
    this.tools = tools;
    //Methods
    this.programar = () => {
        console.log(`${this.title}`);
    };
}


Programmer.prototype = new Job;
Programmer.prototype.constructor = Programmer;

export default Programmer;