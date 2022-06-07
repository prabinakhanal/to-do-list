
List1 = document.getElementById('list1');
List2 = document.getElementById('list2');
Input = document.getElementById('input');
Create = document.getElementById('create');
notCreated = document.getElementById('notcreated');
newList = document.getElementById('newlist');
tick = document.getElementById('tick');
tick1 = document.getElementById('tick1');
untick = document.getElementById('untick');
untick1 = document.getElementById('untick1');
outside=document.getElementById('outside');


List1.addEventListener("click", () => {
    tick.classList.remove('hidden')
    untick.classList.add('hidden')
    List1.style.textDecoration = "line-through"
    List1.style.color = "#94A3B8"


})

List1.addEventListener("dblclick", () => {
    tick.classList.add('hidden')
    untick.classList.remove('hidden')
    List1.style.textDecoration = ""
    List1.style.color = ""

})


List2.style.textDecoration = "line-through"
List2.style.color = "#94A3B8"
List2.addEventListener("click", () => {
    tick1.classList.remove('hidden')
    untick1.classList.add('hidden')
    List2.style.textDecoration ="line-through"
    List2.style.color = "#94A3B8"

})
List2.addEventListener("dblclick", () => {
    tick1.classList.add('hidden')
    untick1.classList.remove('hidden')
    List2.style.textDecoration = ""
    List2.style.color = ""
})


Input.addEventListener('click', (e) => {
    e.stopPropagation();
    Create.classList.add('bg-emerald-600');
    Create.classList.remove('bg-emerald-100');
    Create.classList.remove('disabled')
    
})


outside.addEventListener('click', () => {
    Create.classList.remove('bg-emerald-600');
    Create.classList.add('bg-emerald-100');
    Create.classList.add('disabled')
})


Create.addEventListener('click', () => {
if (Input.value===""){
    alert('input is required');
}
else{
    const paragraph = document.createElement('p');
    paragraph.innerText = Input.value;
    //newlist.appendChild(paragraph);
    Input.value = '';
    paragraph.style.fontFamily = "outfit";
    paragraph.style.fontSize = "24px";
    paragraph.style.fontStyle = "normal";
    paragraph.style.fontWeight = "500";
    paragraph.style.lineHeight = "24px";
    paragraph.style.color="#334155";
    paragraph.style.marginLeft = "12px";

    const image = document.createElement('img');
    image.src = "/images/untick.svg"
    //newlist.appendChild(image);
    image.style.marginRight = "4px";
    image.style.marginLeft = "20px";
    image.addEventListener('click', () => {
        image.src = "/images/tick.svg"
        newlist.style.textDecoration = "line-through";
        newlist.style.color = "#94A3B8";
        newlist.paragraph.style.color="#94A3B8";
        
    })

    image.addEventListener('dblclick', () => {
        image.src = "/images/untick.svg"
        newlist.style.textDecoration = ""
        newlist.style.color = ""

    })

const div=document.createElement('div');
div.style.display="flex";
div.style.marginBottom="25px";
div.appendChild(image);
div.appendChild(paragraph);
newlist.appendChild(div);

}
})








