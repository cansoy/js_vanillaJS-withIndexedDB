const getTableFromIndexedDB=async()=>{
    const request=indexedDB.open(indexedDBControlledOrders,indexedDBControlledOrdersVersion)
    request.onerror=(e)=>{
        alert(e.target.error)
        return
    }
    request.onupgradeneeded=async(e)=>{
        const objStore= request.result.createObjectStore(indexedDBControlledOrdersObject,{keyPath:'SiparisNo',autoIncrement:false})
        const index=objControlledOrders.createIndex(indexedDBControlledOrdersIndex,indexedDBControlledOrdersIndexMain)
    }
    request.onsuccess=async(e)=>{
        const tx= request.result.transaction(indexedDBControlledOrdersObject,'readonly')
        const store= tx.objectStore(indexedDBControlledOrdersObject)
        const index=store.index(indexedDBControlledOrdersIndex)
        const getAllData=index.getAll()
        getAllData.onsuccess=(e)=>{
            const tableInner=getAllData.result
            tableDOMProject(tableInner)
        }
    }
}