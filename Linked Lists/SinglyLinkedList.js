class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SingleList{
    constructor(){
        this.head = null;
        // this.tail = null;
        this.size = null;
    }

    insertFirst(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode
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
            let previous, count=0;
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

    getAt(index){
        if(index == 0){
            console.log(`data at index ${index}:`, this.head.data);
        }
        else{
            let current = this.head;
            let count = 0;
            while(count < index){
                current = current.next;
                count++;
            }
            console.log(`data at index ${index}:`, current.data);
        }

    }

    deleteAt(index){
        if(index == 0){
            this.head = this.head.next;
        }
        else{
            let current = this.head;
            let count = 0, previous;
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--
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

const l1 = new SingleList();

l1.insertFirst(100);
l1.insertFirst(200);
l1.insertFirst(300);
l1.insertLast(400);
l1.insertAt(500, 3);
l1.insertAt(600, 0);
l1.getAt(0);
l1.getAt(2);
l1.printList();
l1.deleteAt(3);
console.log('--------');
l1.printList();
console.log('Size: ', l1.size);
l1.clearList();
console.log(l1);

