class ListNode{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class ListBlock{
    constructor(){
        this.head = null;
        this.nodeCount = 4;
        this.nextBlock = null;
    }
}

class UnrolledList{
    constructor(){
        this.headBlock = null;
        this.count = null;
    }

    pushNewBlock(){
        let newBlock = new ListBlock();
        if(!this.headBlock){
            this.headBlock = newBlock;
        }
        else{
            let current = this.headBlock;
            while(current.nextBlock != null){
                current.nextBlock = current;
            }
            if(current.nodeCount <= 4){
                console.log('New block cannot be created as the previous block is not full yet');
            }
            else{
                current.nextBlock = newBlock;
            }
        }
    }

    insertAtEnd(data){
        let node = new ListNode(data);
        if(!this.headBlock){
            this.headBlock = new ListBlock();
            this.headBlock.head = node;
        }
        else{
            let currentBlock = this.headBlock;
            do{
                let current = currentBlock.head;
                let n = 0;
                while(n < 4){
                    n++;
                    if(current.next == null){
                        current.next = node;
                        node.prev = currentBlock.head;
                        node.next = currentBlock.head;
                        currentBlock.head.prev = node;
                    }
                    else if(current.next == currentBlock.head){
                        current.next = node;
                        node.prev = current;
                        node.next = currentBlock.head;
                        currentBlock.head.prev = node;
                    }
                    current = current.next;
                }
                currentBlock = currentBlock.nextBlock
            }while(currentBlock != null)

        }
        this.count++;
    }

    printList(){
        if(!this.headBlock){
            console.log('List empty');
        }
        else{
            let currentBlock = this.headBlock;
            do{
                console.log('------');
                let current = currentBlock.head;
                do{
                    console.log(current.data);
                    current = current.next;
                }while(current != currentBlock.head);

                currentBlock = currentBlock.nextBlock;
            }while(currentBlock != null)
        }
    }
}


let l1 = new UnrolledList();

l1.insertAtEnd(1);
l1.insertAtEnd(2);
l1.insertAtEnd(3);
l1.insertAtEnd(4);
l1.insertAtEnd(5);
l1.insertAtEnd(6);
// l1.printList();
// console.log(l1.headBlock.head.next);
// console.log(l1.headBlock.head.next.next);
// console.log(l1.headBlock.head.next.next.next);
console.log(l1.headBlock.nextBlock);