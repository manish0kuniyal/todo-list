var input=document.getElementById('input')
var add=document.getElementById('btnAdd')
var remove=document.getElementById('btndelete')
var list=document.getElementById('listItems')
var content;

function run()
{
   var newList=document.createElement('li')
   content=input.value
   var elem=document.createTextNode(content)
console.log(content)
   console.log(elem)
if(content!="")
{ console.log("yes")
    newList.appendChild(elem)
    list.appendChild(newList)
}
}
function stop()
{
    list.removeChild(list.lastElementChild)
}