const nombre: string='nezzy';

const suma =(a:number, b:number)=>{
    return a+b;
}
suma(0,1)

class Person{
    constructor(public age:number, private lastname:string){}
}

const p=new Person(12,'a')