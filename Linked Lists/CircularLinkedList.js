class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularList{
    constructor(){
        this.head = null;
        this.size = null;
    }

    insertFirst(data){
        let newNode = new Node(data);
        if(!this.head){
            newNode.next = newNode;
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next != this.head){
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
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

            while(current.next != this.head){
                current = current.next;
            }

            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    insertAt(data, index){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            let count = 0, previous;
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.next = current;
        }
        this.size++;
    }

    deleteAt(index){
        if(!this.head){
            console.log('List is empty');
        }
        else if(index == 0){
            this.head = this.head.next
        }
        else{
            let current = this.head;
            let previous;
            let count = 0;
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    getAt(index){
        if(!this.head){
            console.log('List empty')
        }
        else if(index > this.size){
            console.log('Index not found')
        }
        else{
            let current = this.head;
            let count = 0;
            while(count < index){
                count++;
                current = current.next;
            }
            console.log(current.data);
        }
    }

    clearList(){
        this.head = null;
        this.size = null;
    }

    printList(){
        if(!this.head){
            console.log('List is empty');
        }
        else{
            let current = this.head;
            
            do{
                console.log(current.data);
                current = current.next;
            }while(current != this.head)
        }
    }
}

let l1 = new CircularList();

l1.insertFirst(100);
l1.insertLast(300);
l1.insertFirst(200);
l1.insertAt(400, 2);
l1.printList();
l1.deleteAt(1);
console.log('--------');
l1.printList();
l1.getAt(2);
// console.log(l1);