const orderCLickActions=()=>{
    const tableTr=document.querySelectorAll('.order-info')
    tableTr.forEach(item=>{
        item.addEventListener('click',(e)=>{
            cleanHtmlDocWindow()
            orderOneSecondChangeBackgroundColor(e)
            const orderNumber=e.path[1].firstElementChild.innerText
            getOrderDetails(orderNumber)
        })
    })
}
