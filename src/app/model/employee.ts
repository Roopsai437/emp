export class Employee{
    id:number;
    name:string;
   age:number;
  
    constructor(id:number,name : string,age:number){
      this.id=id;
      this.name=name;
    this.age=age;
      
    }
   
    getName():string{
      return this.name;
    }
  
   getAge():number{
     return this.age;
   }
  
  }