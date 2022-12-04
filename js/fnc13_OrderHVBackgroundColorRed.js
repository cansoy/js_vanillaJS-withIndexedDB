const orderHVBackgroundColorRed=()=>{
    const tableTds=document.querySelectorAll('.table-group-divider td')
    tableTds.forEach(item=>{
        if (item.textContent=='YG') {
            item.classList.add('bg-danger')
        }
    })
}









