class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(data){
        this.items.push(data);
    }

    dequeue(){
        if(this.items.length == 0){
            console.log('Underflow');
        }
        else{
            console.log(this.items.shift());
        }
    }

    front(){
        console.log(this.items[0])
    }

    isEmpty(){
        console.log(this.items.length);
    }

    printQueue(){
        for(let i=0; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.printQueue();
q.dequeue();
q.front();