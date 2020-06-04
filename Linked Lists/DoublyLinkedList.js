class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleList{
    constructor(){
        this.head = null;
        this.size = null;
    }

    insertFirst(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    insertLast(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
        this.size++;
    }

    insertAt(data, index){
        let newNode = new Node(data);
        if(index == 0){
            this.insertFirst(data);
            return;
        }
        else if(index > this.size){
            return;
        }
        else{
            let current = this.head;
            let previous, count = 0;
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.prev = previous;
            newNode.next = current;
            current.prev = newNode;
        }
        this.size++;
    }

    getAt(index){
        if(index == 0){
            console.log(`Data at ${index}:`, this.head.data);
        }
        else{
            let current = this.head;
            let count = 0;
            while(count < index){
                count++;
                current = current.next;
            }
            console.log(`Data at ${index}:`, current.data)
        }
    }

    deleteAt(index){
        if(index == 0){
            this.head.next.prev = null;
            this.head = this.head.next;
        }
        else{
            let current = this.head;
            let count = 0;
            while(count < index){
                count++;
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
    }

    clearList(){
        this.head = null;
        this.size = null;
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

let l1 = new DoubleList();

l1.insertFirst(100);
l1.insertFirst(200);
l1.insertFirst(300);
l1.insertLast(400);
l1.insertLast(500);
l1.insertAt(600, 3);
l1.printList();
l1.getAt(0);
l1.getAt(3);
l1.deleteAt(2);
l1.deleteAt(3);
l1.printList();