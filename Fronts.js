class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    addToFront(data) {
        const new_node = new Node(data, this.head);
        this.head = new_node;
        this.length++;
    }
    removeFromFront(){
        if (this.head == null){ //if the head is null then there is no node to remove
            return this.head;
        } else {
            removeNode = this.head;
            this.head = removeNode.next;
            removeNode.next = null;
            return this.head;
        }

    }
    frontData(){
        if (this.head == null){
            return null;
        } else {
        return this.head.data
        }
    }
}

class Node {
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}


