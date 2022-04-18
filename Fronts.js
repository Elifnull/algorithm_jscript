class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    addToFront(data) {
        const new_node = new Node(data, this.head);
        this.head = new_node;
        ++length;
    }
}

class Node {
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}




