const Employee = require("./Employee")



class Enginer extends Employee{
    constructor(name,id,email,github,){
        super(name,id,email,)
        this.github=github
    }


    

        
        getGithub(){
            return this.github
        
        }
        getRoll(){
            return "Enginer"
        }
    }
    module.exports=Enginer