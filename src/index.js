/*
const jose = new Programmer({
    name: 'Jose',
    lastName: 'morales',
    age: '21',
    gender: 'masculino',
    experience: '1 año',
    yearsWork: '0 años',
    title: 'platzi',
    tools: ['jS', 'webpack', 'css', 'sass']
});*/

/*
import Lawyer from './Lawyer'

const victor = new Lawyer({
    name: 'victor',
    lastName: 'morales',
    age: '22',
    gender: 'masculino',
    yearsWork: '2 años',
    title: 'Colegio de abogados',
    casos: [true,false,true,true],
    reputacion: 5,
    firma: 'victorandasocieted',
});*/

/*
const yoana = new Doctor({
    name: 'Yoana',
    lastName: 'Morales',
    age: 48,
    gender: 'female',
    horasTurno: 8,
    numeroPacientes: 5,
    pacientesRecuperados: [true,false,true,true],
    title: "FactoriaDeMedicina",
});*/

import Backend from "./Backend";

const jose = new Backend({
    name: 'Jose',
    lastName: 'morales',
    age: '21',
    gender: 'masculino',
    experience: '1 año',
    yearsWork: '0 años',
    title: 'platzi',
    tools: ['jS', 'webpack', 'css', 'sass'],
    asigServer: 'port',
    asigLeguage: 'go',
    asigBaseData: 2,
    asigProject: 2,
});
jose.project();
console.log(jose)