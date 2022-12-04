const aHrefIsBlank=()=>{
    const aHrefs=document.querySelectorAll('a[href]')
    aHrefs.forEach(item=>{
        if (item.getAttribute('href')==="") {
            console.log(item.getAttribute('href'))
           item.parentElement.innerHTML=""
        } 
    })
}