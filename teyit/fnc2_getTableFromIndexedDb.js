const getTableFromIndexedDB=async()=>{
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
        const tx= request.result.transaction(indexedDBMainDataObject,'readonly')
        const store= tx.objectStore(indexedDBMainDataObject)
        const index=store.index(indexedDBMainDataIndex)
        const getAllData=index.getAll()
        getAllData.onsuccess=(e)=>{
            const tableInner=getAllData.result
            tableDOMProject(tableInner)
        }
    }
}


