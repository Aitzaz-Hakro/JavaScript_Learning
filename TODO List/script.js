var inputEL= document.getElementById("iteminput");
var inputBtn= document.getElementById("additem");
var itemDest= document.getElementById("itemlist");
var clearOne= document.getElementById("done");
var clearAll= document.getElementById("clearAll");
var clearAllIt= document.querySelector(".container");



var tempInput;
var itemcount = 0;
var lastItem={};
inputBtn.addEventListener("click",addItemm);
inputBtn.addEventListener("click",AddInItemList);
clearAll.addEventListener("click",ClearAllItems);
itemDest.addEventListener("click",DeleteOneItem);

function addItemm(){
    tempInput= inputEL.value;
   inputEL.value="";

}

function AddInItemList(){
    
       if(tempInput===""){
           return;
       }
       else{
           itemDest.innerHTML +=` <li class="hello${itemcount}">${tempInput}
                         <div> 
                         <img src="../Media/circle-xmark.svg" class="iconn1" id="done" alt="">
                         <img src="../Media/circle-check.svg" class="iconn" id="done" alt="">
                         </div>
                         </li>`;
           clearAll.style.visibility="visible"; 
        //    storing each item into and object with key
          lastItem[itemcount]= itemDest.innerHTML;
          console.log(lastItem);
       }
    itemcount++;
}

function DeleteOneItem(event){           
           if (event.target.classList.contains("iconn1") ||event.target.classList.contains("iconn")) { // iconn1 is your delete icon
        const li = event.target.closest("li");
        if (li) {
            li.remove();
        }
        // Optionally hide clearAll if no items left
        if (itemDest.children.length === 0) {
            clearAll.style.visibility = "hidden";
        }
    } 

}

function ClearAllItems(){
    itemDest.innerHTML="";  
    clearAll.style.visibility="hidden"; 
}