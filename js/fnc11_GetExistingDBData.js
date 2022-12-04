const getExistingDBData=async()=>{
    await checkExistingAnyDB()
    if (countError==1) {
        countError=0
        return
    }
    const request=indexedDB.open(indexedDBAPIMainData,indexedDBAPIMainDataVersion)
    request.onerror=async (e)=>{
        alert(e.target.error)
        return
    }
    request.onupgradeneeded=async(e)=>{
        const objStore= request.result.createObjectStore(indexedDBMainDataObject,{keyPath:'SiparisNo',autoIncrement:false})
        const index=objStore.createIndex(indexedDBMainDataIndex,indexedDBMainDataIndexMain)
    }
    request.onsuccess=async (e)=>{
        const tx =request.result.transaction(indexedDBMainDataObject,'readwrite')
        const store=tx.objectStore(indexedDBMainDataObject)
        const index=store.index(indexedDBMainDataIndex)

        const existingData=index.getAll()
        existingData.onsuccess=(e)=>{
            const data=existingData.result[0]
            const year=data.JSTarihFormati.substring(0,4)
            const month=data.JSTarihFormati.substring(4,6)
            const day=data.JSTarihFormati.substring(6,8)
            const searchedDate=`${year}-${month}-${day}`
            searchOperationCenter.value=data.JSOperasyonIsmi
            searchDate.value=searchedDate
            countOrderNumber.textContent=existingData.result.length
            countOrderNumber.style.visibility="hidden"
        }
    }
    await fillTableWithDBData()
}

