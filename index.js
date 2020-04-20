//160. Intersection of Two Linked Lists

//Write a program to find the node at which the intersection of two singly linked lists begins.

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8

//Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
//Output: Reference of the node with value = 2

//Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2

//2 1
//6 5
//4 null
//null 2
//1 6
//5 4
//null null


//Output: null

//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }

///


//6
//2 
//1


//[3,2,0,-4]
// slow = 3 , 2, 0, -4, 3, 2, 0, -4
// fast = 3,  0, 3,  0, 3, 0

var getIntersectionNode = function(headA, headB) {
  let seen = new Set()
  let dum1 = headA
  let dum2 = headB

  while (dum1) {
    seen.add(dum1)
    dum1 = dum1.next
  }

  while (dum2) {
    if (dum2 in seen) return dum2.val
    dum2 = dum2.next
  }

  return null



   let seen = new Set()
  let dum1 = headA
  let dum2 = headB

  while (dum1) {
    seen.add(dum1)
    dum1 = dum1.next
  }
   
  while (dum2) {
    if (dum2 in seen) return dum2
      dum2 = dum2.next
  }

  return null
///////////////////////////////////////////////////

    if(headA===null || headB===null){return null}
    let a = headA;
    let b = headB;
    while(a !== b){
        if(a === null){
            a = headB
        }else{
            a = a.next;
        }
        if(b === null){
            b = headA;
        }else{
            b=b.next
        }
    }
    return a

};