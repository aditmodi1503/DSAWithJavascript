class Stack{
    constructor(){
        this.items = [];
    }

    push(data){
        this.items.push(data);
    }

    pop(){
        if(this.items.length == 0){
            console.log('Underflow')
        }
        else{
            console.log(this.items.pop());
        }
    }

    top(){
        console.log(this.items[this.items.length - 1])
    }

    getSize(){
        console.log(this.items.length);
    }

    isEmpty(){
        if(this.items.length == 0){
            console.log('Stack is empty')
        }
        else{
            console.log('Stack is not empty')
        }
    }

    isFull(){
        //Doesnt matter for javascript array
    }

    printStack(){
        let len = this.items.length;
        for(let i=0; i < len; i++){
            console.log(this.items[i]);
        }
    }
}

let s = new Stack();

s.isEmpty();
s.push(10);
s.push(20);
s.push(30);
s.printStack();
s.pop();
s.top();