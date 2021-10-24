function Job(
    name,
    lastName,
    age,
    gender
){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    //Methods
    //usando el block scoupe
    this.getName = () =>{
        console.log(`${this.name}`)
    }
    this.setName = (name) =>{
        this.name = name;
        console.log(`${this.name}`)
    }
}







export default Job;