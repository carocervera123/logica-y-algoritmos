class stack{
    constructor(){
        this.stack= [];
    } 

    push(data){
        this.stack = [...this.stack, data];
    }

    pop(){
        let newStack = [];
       for(let i = 0; i < this.stack.length -1; i++){
        newStack = [...newStack, this.stack[i]];
       } 
       this.stack = newStack;
       return
     }
    }


