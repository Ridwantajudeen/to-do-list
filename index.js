let input = document.getElementById("input")
let addBtn = document.getElementById("addBtn")
let render = document.getElementById("myRender")
let myDate = document.getElementById("theDate")
let myTime = document.getElementById("theTime")
const todoFromLocalStorage = JSON.parse(localStorage.getItem("toDO"))
let toDO = []

if (todoFromLocalStorage){
    toDO = todoFromLocalStorage
    view(toDO)
}



let deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    toDO = []
    view(toDO)
})


addBtn.addEventListener("click", function () {
    localStorage.setItem("toDO", JSON.stringify(toDO))


   
   
    
     toDO.push(input.value + " " + myDate.value + " " + myTime.value )
    view()
    console.log(toDO)
    input.value = ""
    myDate.value = ""
    myTime.value = ""

  
   
})

function view(){
    hate =""
    listItem = ""
    for (let i=0; i<toDO.length; i++){
        listItem += ` 
        <li>
         ${toDO[i]}
         </li>
         `
        console.log(listItem)
        
     }
    // listDate = ""
    // for (let i=0; i<theDate.length; i++){
    //     listDate = theDate[i]  
                
    //     console.log(listDate)
        
    // }
    //  me = listItem + listDate
    // hate = ` <li>
    //               ${listItem}  ${listDate}
    //           </li>
    //           `

    render.innerHTML = listItem
    }
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
         
            addBtn.click();
          
        }
      })

      const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();
    console.log(todoFromLocalStorage)