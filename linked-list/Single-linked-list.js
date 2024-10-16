
/**
 * -----Operations----
 * 1:Add at Start
 * 2:Add at End
 * 3:Add at specific location
 * 4:Delete at Start
 * 5:Delete at End
 * 6:Delete at specific location
 * 7:traverse from Start-end
 * 8:reverse linked List
 * 9:Searching Data in linked List
 * 10:Updating data in linked List
 * 11:Sorting.
 * 12: Merging two linked List
 */



// structure of node
class Node{
    constructor(data) {
        this.data=data
        this.next=null
    }
}


class SingleLinkedList{
    
    constructor() {
        this.head = null;
        this.tail=null
    }


    add_at_first_location(data) {
        //first check if there is list already created
        const New_node = new Node(data)

        if (this?.head) {
            New_node.next=this.head
            this.head = New_node;
            
        } else {
            this.head =New_node
            New_node.next=null

            
        }  
    }
    add_at_last_location(data) {
        //first check if there is list already created
        const New_node = new Node(data)

        if (this?.head) {
            let current = this.head
            while (current?.next !== null) {
                current=current.next
            }
            current.next = New_node;
            New_node.next=null
            
            
        } else {
            this.head =New_node
            New_node.next=null

            
        }  
    }

    traverse_from_start_to_end() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current=current.next
        }
    }
}


const List = new SingleLinkedList();

List.add_at_first_location(100);
List.add_at_first_location(101);
List.add_at_first_location(102);
List.add_at_first_location(103);

List.add_at_last_location("last node");
List.add_at_first_location("first node");
List.add_at_last_location("last node2");

List.traverse_from_start_to_end()