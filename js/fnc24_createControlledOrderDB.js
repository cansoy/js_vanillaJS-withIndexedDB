const createControlledOrderDB=()=>{
    const request=indexedDB.open(indexedDBControlledOrders,indexedDBControlledOrdersVersion)
    request.onerror=(e)=>{
        alert(e.target.error)
        return
    }
    request.onupgradeneeded=(e)=>{
        const objControlledOrders=request.result.createObjectStore(indexedDBControlledOrdersObject,{keyPath:'siparisNumarasi'})
        const index=objControlledOrders.createIndex(indexedDBControlledOrdersIndex,indexedDBControlledOrdersIndexMain)
    }
    request.onsuccess=(e)=>{
        const tx=request.result.transaction(indexedDBControlledOrdersObject,'readwrite')
        const store=tx.objectStore(indexedDBControlledOrdersObject)
        const addNewRecord=store.add(objcompletedOrderControl)
    }
}

