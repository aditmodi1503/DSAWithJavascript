class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.size = null;
    }

    //Inserts an element to the stack
    push(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        }
        else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //Removes the last element and return it
    pop(){
        if(!this.head){
            console.log('No item to pop. Underflow');
            return;
        }
        else{
            if(this.head.next == null){
                console.log('Popped element:', this.head.data);
                this.head = null;
            }
            else{
                let current = this.head;
                let previous;
                while(current.next != null){
                    previous = current;
                    current = current.next;
                }
                console.log('Popped element:', current.data);
                previous.next = null;
            }
        }
        this.size--;
    }

    //Returns the last inserted element without removing it
    top(){
        if(!this.head){
            console.log('List is empty')
        }
        else{
            let current = this.head;
            do{
                current = current.next;
            }while(current.next != null)
            console.log('Top element:', current.data);
        }
    }

    //Returns the size of the stack
    getSize(){
        console.log('Size:', this.size);
    }

    //Check if stack is empty
    isEmpty(){
        if(!this.head){
            console.log('Stack is empty');
        }
    }

    //Check if stack is full
    isFull(){
        //Doesnt matter for javascript
    }

    printStack(){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        else{
            let current = this.head;
            while(current != null){
                console.log(current.data);
                current = current.next;
            }
        }
    }
}

let s = new Stack();
s.isEmpty();
s.push(30);
s.push(20);
s.push(10);
s.printStack();
console.log('-----------------')
s.pop();
s.printStack();
s.top();
s.getSize();