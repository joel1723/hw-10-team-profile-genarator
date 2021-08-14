const Employee = require("./Employee")



class Manager extends Employee{
    constructor(name,id,email,office,){
        super(name,id,email,)
        this.office=office
    }


    

        
        getoffice(){
            return this.office
        
        }
        getRoll(){
            return "Intern"
        }
    }
    module.exports=Manager