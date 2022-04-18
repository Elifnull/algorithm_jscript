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
        if (this.head == null){
            return this.head;
        }
    }
}

class Node {
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}




