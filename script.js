const inputs=document.querySelector("input")
const addlist=document.querySelector(".add_btn")
const lists=document.querySelector(".lists")

addlist.addEventListener("click",()=>{
    if(inputs.value===""){
        alert("write anything")
        savedata()
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputs.value
        lists.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        
    }
    inputs.value=""
    savedata()
})
lists.addEventListener("click", function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked")
        savedata()
    }
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
},false)

function savedata(){
    localStorage.setItem("data",lists.innerHTML)
}
function showtask(){
    lists.innerHTML=localStorage.getItem("data")
}
showtask()