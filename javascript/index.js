
var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var rowData =document.getElementById('rowData');
var btnOpen =document.querySelector('button');
 

localStorage.getItem('addlist')

var addList;
if(localStorage.getItem('addlist')!=null){
    addList=JSON.parse(localStorage.setItem('addlist',addList));
    disblaySite();
}
else{
    addList=[];
}

function addSite(){
    var bookMark={
        name: siteName.value,
        url: siteUrl.value
    }
    addList.push(bookMark)

    localStorage.setItem('addlist', JSON.stringify(addList))
    
    clearData()

    disblaySite()
}

function clearData(){
    siteName.value=null;
    siteUrl.value=null;
}
function deleteProduct(deleteIndex){
    addList.splice(deleteIndex,1)
    localStorage.setItem('bookMark' ,JSON.stringify(addList));
    disblaySite(addList);
}


function disblaySite(){
    var element= ``;
    for(var i=0; i<addList.length; i++){
        element +=`
        <table class="table text-center text-capitalize fw-bold" >
           <thead>
                <tr>
                    <td>index</td>
                    <td>website name</td>
                    <td>visit</td>
                    <td>delete</td>
                </tr>
        </thead>
        <tbody>
                <tr>
                  <td>${addList[i].length}</td>
                  <td>${addList[i].name}</td>
                  <td><button onclick="visit(${i})" class="btn btn-success">visit</button></td>
                  <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
                </tr>
        </tbody>
        </table> 
    `
    }
    rowData.innerHTML = element;
}                    
function visit(){
    window.open(siteUrl.value,'_blank');

}


// btnOpen.addEventListener('click',() =>{
//     window.open(siteUrl.value,'_blank');
// })

