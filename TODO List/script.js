var inputEL= document.getElementById("iteminput");
var inputBtn= document.getElementById("additem");
var itemDest= document.getElementById("itemlist");
var clearOne= document.getElementById("done");
var clearAll= document.getElementById("clearAll");
var clearAll= document.querySelector(".container");



var tempInput;
var itemcount = 0;
var lastItem={};
inputBtn.addEventListener("click",addItemm);
inputBtn.addEventListener("click",AddInItemList);
// clearOne.addEventListener("click",DeleteOneItem);


function addItemm(){
    tempInput= inputEL.value;
   inputEL.value="";
}

function AddInItemList(){
    
       if(tempInput===""){
           return;
       }else{
           itemDest.innerHTML +=` <li>${tempInput}
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

function DeleteOneItem(){

     
     itemDest.innerHTML -=` <li>${tempInput}
                         <div> 
                         <img src="../Media/circle-xmark.svg" class="iconn1" id="done" alt="">
                         <img src="../Media/circle-check.svg" class="iconn" id="done" alt="">
                         </div>
                         </li>`;
           clearAll.style.visibility="visible"; 


}
 