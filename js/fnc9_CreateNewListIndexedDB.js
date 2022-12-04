const createNewListIndexedDB=async(e)=>{
    e.preventDefault()
    if (searchDate.value=="") {
        alert('Lütfen Tarih Bilgisi Giriniz !')
        return
    }
    searchListButton.classList.add('bg-danger')
    const operationCenter=searchOperationCenter.value
    const date=searchDate.value
    const dateFormat=date.replaceAll('-','')
    const apiQuery=`${operationCenter}_${dateFormat}`
    const step_2=await deleteAllDB()
    const step_3=await createMainDataIndexedDb(apiQuery)
    if (countError==1) {
        alert('Belirtiiğiniz Tarihte Operasyon Merkezine Ait İş Bulunmamaktadır !')
        countError=0
        return
    }
    const step_4=await createUnmatchedLinksIndexedDb(dateFormat)
    const step_5=await fillTableWithDBData()
    const step_6= cleanHtmlDocWindow()
}