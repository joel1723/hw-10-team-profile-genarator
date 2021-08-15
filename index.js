const Manager =require("./lib/Manger")
const Intern =require("./lib/Intern")
const Enginer =require("./lib/Enginer")
const inquirer =require("inquirer")
const path =require("path")
const fs =require("fs")
const managerArray=[]
const internArray=[]
const enginerArray=[]




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
function createIntern(){
    inquirer.prompt([
        {
            type:"input",
            name:"InternName",
            message:"what is the intern name?",
    
        },
        {
            type:"input",
            name:"internsId",
            message:"what is the intern id?",
    
        },
        {
            type:"input",
            name:"internEmail",
            message:"what is the intern email?",
    
        },
        {
            type:"input",
            name:"internSchool",
            message:"what is the interns school?",
    
        },
    ]).then(function(answers){
        const Intern = new Intern (answers.internName,answers.internId,answers.internEmail,answers.internSchool)
        internArray.push(intern)
        //call next funtion//
    })
}
function createEnginer(){
    inquirer.prompt([
        {
            type:"input",
            name:"enginerName",
            message:"what is the enginer name?",
    
        },
        {
            type:"input",
            name:"enginerId",
            message:"what is the enginer id?",
    
        },
        {
            type:"input",
            name:"enginerEmail",
            message:"what is the enginer email?",
    
        },
        {
            type:"input",
            name:"enginerGithub",
            message:"what is the enginer github?",
    
        },
    ]).then(function(answers){
        const manager = new Manager (answers.managerName,answers.managerId,answers.managerEmail,answers.managerOffice)
        managerArray.push(manager)
        //call next funtion//
    })
}