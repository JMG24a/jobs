import Programmer from './Programmer';

function Backend({
    name,
    lastName,
    age,
    gender,
    experience,
    yearsWork,
    title,
    tools = [],
    asigServer,
    asigLeguage,
    asigBaseData,
    asigProject,
}){
    
    Programmer.call(
        this,   
        name,
        lastName,
        age,
        gender,
        experience,
        yearsWork,
        title,
        tools,
    ); 
    this.asigServer = asigServer;
    this.asigLeguage = asigLeguage;
    this.asigBaseData = asigBaseData;
    this.asigProject = asigProject;
    //Methods
    //asignar donde va a trabajar el programador
    
    this.server = () =>{
        const port = Math.round((Math.random() * (100 - 1)) + 1);
        this.asigServer = port;
        console.log(`https://server.com/aleatorio-javascript/${this.asigServer}`)
    };

    //asignar lenguaje al programador
    this.lenguage = () => {
        const l = Math.round((Math.random() * (3 - 1)) + 1);
        switch (l){
            case 1: {
                this.asigLeguage = 'Go';
                console.log(`El lenguaje a trabajar es ${this.asigLeguage}`);
                break;
            }
            case 2: {
                this.asigLeguage = 'python';
                console.log(`El lenguaje a trabajar es ${this.asigLeguage}`);
                break;
            }
            case 3: {
                this.asigLeguage = 'javaScript';
                console.log(`El lenguaje a trabajar es ${this.asigLeguage}`);
                break;
            }
            default: {
                this.asigLeguage = 'Estas de vacaciones';
                console.log(`El lenguaje a trabajar es ${this.asigLeguage}`);
                break;
            }
        }
    };
    //asignar el lenguaje a trabajar en la base de datos
    this.dataBase = () =>{
        const db = Math.round((Math.random() * (3 - 1)) + 1);
        switch (db){
            case 1: {
                this.asigBaseData = 'sql';
                console.log(`Las tablas seran trabajadas en: ${this.asigBaseData}`);
                break;
            }
            case 2: {
                this.asigBaseData = 'mongoDB';
                console.log(`Las tablas seran trabajadas en: ${this.asigBaseData}`);
                break;
            }
            case 3: {
                this.asigBaseData = 'posgre';
                console.log(`Las tablas seran trabajadas en: ${this.asigBaseData}`);
                break;
            }
            default: {
                this.asigBaseData = 'Estas de vacaciones';
                console.log(`Las tablas seran trabajadas en: ${this.asigBaseData}`);
                break;
            }
        }
    };
    //asignar projecto al programador
    this.project = () => {
        if(this.yearsWork >= 5){

            const senior = {
                teamWork: true,
                project: 'diseñar schemas, y despegar API',
                tools: [this.asigLeguage, this.asigBaseData],
                Area: this.asigServer
            } 

            this.asigProject = senior;
            console.log(`${this.asigProject.Area}`)
            return this.asigProject;

        }else if(this.yearsWork >= 3){

            const semiSenior = {
                teamWork: false,
                project: 'Documentar schemas y testear schemas,',
                tools: [this.asigLeguage, this.asigBaseData],
                Area: this.asigServer
            } 

            this.asigProject = semiSenior;
            console.log(`${this.asigProject.Area}`)
            return this.asigProject;

        }else{

            const junior = {
                teamWork: false,
                project: 'esperar ordenes',
                tools: [this.asigLeguage, this.asigBaseData],
                Area: this.asigServer
            }

            this.asigProject = junior;
            console.log(`${this.asigProject.tools[2]}`)
            return this.asigProject;
        }

    };
}

Backend.prototype = new Programmer;
Backend.prototype.constructor = Backend;  

export default Backend;