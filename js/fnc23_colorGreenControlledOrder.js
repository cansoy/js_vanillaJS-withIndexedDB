const colorGreenControlledOrder=()=>{
    const orderNo=document.querySelectorAll('.order-no')
    orderNo.forEach(item=>{
        if (item.textContent==objGottenOrderDetail.SiparisNo) {
            item.classList.add('bg-success')
            item.nextElementSibling.classList.add('bg-success')
            item.nextElementSibling.nextElementSibling.classList.add('bg-success')
            item.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('bg-success')
            item.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('bg-success')
        }
    })
}