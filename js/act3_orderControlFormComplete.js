orderCompletedBtn.addEventListener('click',()=>{
    orderFormControlsFunction()
    if (countError==1) {
        countError=0
        return
    }
    orderControlFormCreateObj()
    console.log(objcompletedOrderControl)
    afterFillOrderControlFormThenClean()
    colorGreenControlledOrder()
    createControlledOrderDB()
})