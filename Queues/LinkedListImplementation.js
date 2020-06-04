class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.size = null;
    }

    enqueue(data){
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
        this.size = null;
    }

    dequeue(){
        if(!this.head){
            console.log('Underflow');
        }
        else{
            console.log('Dequeued element: ', this.head.data);
            this.head = this.head.next;
        }
    }

    front(){
        console.log('Front element: ', this.head.data);
    }

    isEmpty(){
        if(!this.head){
            console.log('List empty')
        }
        else{
            console.log('List not empty')
        }
    }

    printQueue(){
        if(!this.head){
            console.log('List is empty');
        }
        else{
            let current = this.head;
            do{
                console.log(current.data);
                current = current.next;
            }while(current != null)
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
q.printQueue();
q.front();