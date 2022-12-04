const createMainDataIndexedDb=async(apiQuery)=>{
    const APIMainDataResponse=await fetch('./fakeAPI/mainData.json')
    const APIMainData=await  APIMainDataResponse.json()
    const APIMainDataQuery=APIMainData.filter(item=>item.JSApiQuery==apiQuery)
    if (APIMainDataQuery.length==0) {
        countError=countError+1
        return
    }
    const request=indexedDB.open(indexedDBAPIMainData,indexedDBAPIMainDataVersion)
    request.onerror=(e)=>{
        alert(e.target.error)
        return
    }
    request.onupgradeneeded=async(e)=>{
        const objStore= request.result.createObjectStore(indexedDBMainDataObject,{keyPath:'SiparisNo',autoIncrement:false})
        const index=objStore.createIndex(indexedDBMainDataIndex,indexedDBMainDataIndexMain)
    }
    request.onsuccess=async(e)=>{
        const tx= request.result.transaction(indexedDBMainDataObject,'readwrite')
        const store= tx.objectStore(indexedDBMainDataObject)
        const index=store.index(indexedDBMainDataIndex)
        APIMainDataQuery.forEach(item => {
            store.add(item)
        });
        const count=store.count()
        count.onsuccess=()=>{
            countOrderNumber.textContent=count.result
            countOrderNumber.style.visibility="hidden"
        }
    }
}
