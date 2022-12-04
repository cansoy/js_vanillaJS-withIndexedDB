// table advanced query section


const advencedOrderNoFilter=()=>{
    const orderNo=document.querySelectorAll('.order-no')
    orderNo.forEach(item=>{
        if (item.textContent.includes(advencedOrderNo.value)) {
            item.parentElement.removeAttribute('style')
        }
        else{
            item.parentElement.style.display="none"
        }
        const foundedOrder=document.querySelectorAll('tr[style*=display]')
        const foundedOrderNumber=parseInt(foundedOrder.length)
        const existingNumberOfOrder=parseInt(countOrderNumber.textContent)
        const filteredBadgeOrderNoNumberCount=existingNumberOfOrder-foundedOrderNumber
        filteredBadgeOrderNoNumber.textContent=filteredBadgeOrderNoNumberCount
    })
}
const advencedOrderTypeFilter=()=>{
    const orderType=document.querySelectorAll('.order-type')
    orderType.forEach(item=>{
        if (item.textContent.includes(advencedOrderType.value)) {
            item.parentElement.removeAttribute('style')
        } 
        else {
            item.parentElement.style.display="none"
        }
        const foundedOrder=document.querySelectorAll('tr[style*=display]')
        const foundedOrderNumber=parseInt(foundedOrder.length)
        const existingNumberOfOrder=parseInt(countOrderNumber.textContent)
        const filteredBadgeOrderTypeNumberCount=existingNumberOfOrder-foundedOrderNumber
        filteredBadgeOrderTypeNumber.textContent=filteredBadgeOrderTypeNumberCount
    })
}
const advencedOrderVoltageFilter=()=>{
    const orderVoltage=document.querySelectorAll('.order-voltage')
    orderVoltage.forEach(item=>{
        if (item.textContent.includes(advencedOrderVoltage.value)) {
            item.parentElement.removeAttribute('style')
        } 
        else {
            item.parentElement.style.display="none"
        }
        const foundedOrder=document.querySelectorAll('tr[style*=display]')
        const foundedOrderNumber=parseInt(foundedOrder.length)
        const existingNumberOfOrder=parseInt(countOrderNumber.textContent)
        const filteredBadgeOrderVoltageNumberCount=existingNumberOfOrder-foundedOrderNumber
        filteredBadgeOrderVoltageNumber.textContent=filteredBadgeOrderVoltageNumberCount
    })
}
const advencedOrderWorkTimeFilter=()=>{
    const orderTime=document.querySelectorAll('.order-time')
    orderTime.forEach(item=>{
        if (item.textContent.includes(advencedOrderWorkTime.value)) {
            item.parentElement.removeAttribute('style')
        } 
        else {
            item.parentElement.style.display="none"
        }
        const foundedOrder=document.querySelectorAll('tr[style*=display]')
        const foundedOrderNumber=parseInt(foundedOrder.length)
        const existingNumberOfOrder=parseInt(countOrderNumber.textContent)
        const filteredBadgeOrderTimeNumberCount=existingNumberOfOrder-foundedOrderNumber
        filteredBadgeOrderTimeNumber.textContent=filteredBadgeOrderTimeNumberCount
    })

}
const advencedOrderCrewFilter=()=>{
    const orderCrewCode=document.querySelectorAll('.order-crew-code')
    orderCrewCode.forEach(item=>{
        if (item.textContent.includes(advencedOrderCrew.value)) {
            item.parentElement.removeAttribute('style')
        } 
        else {
            item.parentElement.style.display="none"
        }
        const foundedOrder=document.querySelectorAll('tr[style*=display]')
        const foundedOrderNumber=parseInt(foundedOrder.length)
        const existingNumberOfOrder=parseInt(countOrderNumber.textContent)
        const filteredBadgeOrderCrewNumberCount=existingNumberOfOrder-foundedOrderNumber
        filteredBadgeOrderCrewNumber.textContent=filteredBadgeOrderCrewNumberCount
    })
}


