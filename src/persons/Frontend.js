import Programmer from './Programmer';
/*
function project(tool, year){
    if(year >= 5){

        const j = {
            teamWork: true,
            project: 'animar',
            tools: [tool[0], tool[1]],
        } 

        return j;

    }
    if(year >= 3){

        const j = {
            teamWork: false,
            project: 'posicionar objetos',
            tools: [tool[0], tool[1]],
        } 

        return j;

    }
    if(year < 2){

        const j = {
            teamWork: false,
            project: 'esperar ordenes',
            tools: [tool[0], tool[1]],
        }

        return j;
    }

};
*/

function Frontend({
    name,
    lastName,
    age,
    gender, 
    experience,
    yearsWork,
    title,
    tools = [],
    asigDesing = undefined,
    asigLeguage = undefined,
    asigAPI = undefined,
    asigProject = undefined,
}){
    Programmer.call(this,
        name,
        lastName,
        age,
        gender,
        experience,
        yearsWork,
        title,
        tools,    
    );
    this.asigDesing = asigDesing;
    this.asigLeguage = asigLeguage;
    this.asigAPI = asigAPI;
    this.asigProject = asigProject;
    //Methods
    this.asignarTrabajo = () => {
        
        const Desing = Math.round((Math.random() * (100 - 1)) + 1);
        const contentDesing = `https://figma.com/testjavascript/${Desing}`
        this.asigDesing = contentDesing;
        console.log(`
            Encontraras el diseño en:
            https://figma.com/testjavascript/${Desing}`
        );
        
        const API = Math.round((Math.random() * (100 - 1)) + 1);
        const contentAPI = `https://rickandmorty.com/testjavascript/${API}`
        this.asigAPI = contentAPI;
        console.log(`
            API:
            https://rickandmorty.com/testjavascript/${API}`
        );

        const lenguage = Math.round((Math.random() * (3 - 1)) + 1);
        switch (lenguage){
            case 1: {
                this.asigLeguage = 'vanilla javaScript';
                console.log(`El lenguaje a trabajar es ${this.asigLeguage}`);
                break;
            }
            case 2: {
                this.asigLeguage = 'ReactJS';
                console.log(`El lenguaje a trabajar es ${this.asigLeguage}`);
                break;
            }
            case 3: {
                this.asigLeguage = 'AngularJS';
                console.log(`El lenguaje a trabajar es ${this.asigLeguage}`);
                break;
            }
            default: {
                this.asigLeguage = 'VueJS';
                console.log(`El lenguaje a trabajar es ${this.asigLeguage}`);
                break;
            }
        }
        const p = {
            teamWork: false,
            project: 'esperar ordenes',
            //tools: [tool[0], tool[1]],
        }
        this.asigProject = p;

        console.log(`${this.asigProject.project}`)
    }
}



Frontend.prototype = new Programmer;
Frontend.prototype.constructor = Frontend;

export default Frontend;