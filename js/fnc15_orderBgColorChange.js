const orderOneSecondChangeBackgroundColor=(tr)=>{
    const tableRows=document.querySelectorAll('.table-group-divider>tr')
    tableRows.forEach(item=>{
        item.classList.remove('one-second-background')
    })
    const row=tr.path[1]
    row.classList.add('one-second-background')
}
