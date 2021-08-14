const Manager =require("./lib/Manger")
const Intern =require("./lib/Intern")
const Enginer =require("./lib/Enginer")
const inquirer =require("inquirer")
const path =require("path")
const fs =require("fs")
const managerArray=[]

function createManager(){
    inquirer.prompt([
        {
            type:"input",
            name:"managerName",
            message:"what is the managers name?",
    
        },
        {
            type:"input",
            name:"managerId",
            message:"what is the managers id?",
    
        },
        {
            type:"input",
            name:"managerEmail",
            message:"what is the managers email?",
    
        },
        {
            type:"input",
            name:"managerOffice",
            message:"what is the managers office number?",
    
        },
    ]).then(function(answers){
        const manager = new Manager (answers.managerName,answers.managerId,answers.managerEmail,answers.managerOffice)
        managerArray.push(manager)
        //call next funtion//
    })

}