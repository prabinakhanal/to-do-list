List1=document.getElementById('list1');
List2=document.getElementById('list2');
List3=document.getElementById('list3');
List4=document.getElementById('list4');
Input=document.getElementById('input');
Create=document.getElementById('create');
NotCreated=document.getElementById('notcreated');




List1.addEventListener("click",function(){
    List1.style.textDecoration="line-through";
})

List1.removeEventListener("click",function(){
    List1.style.textDecoration="none";  //
})


List2.addEventListener("click",function(){
    List2.style.textDecoration="line-through";
})


List3.addEventListener("click",function(){
    List1.style.textDecoration="line-through";
})

List4.removeEventListener("click",function(){
    List1.style.textDecoration="none";  //
})


List4.addEventListener("click",function(){
    List2.style.textDecoration="line-through";
})


Input=addEventListener('click',() =>{
Create.classList.remove('hidden')
NotCreated.classList.add('hidden')
})