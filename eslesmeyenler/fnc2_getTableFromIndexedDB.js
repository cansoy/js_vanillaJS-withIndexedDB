const getTableFromIndexedDB=async()=>{
    const request=indexedDB.open(indexedDBAPIUnmatchedLinks,indexedDBAPIUnmatchedLinksVersion)
    request.onerror=(e)=>{
        alert(e.target.error)
        return
    }
    request.onupgradeneeded=async(e)=>{
        const objStore= request.result.createObjectStore(indexedDBUnmathcedLinksObject,{keyPath:'id',autoIncrement:true})
    }
    request.onsuccess=async(e)=>{
        const tx= request.result.transaction(indexedDBUnmathcedLinksObject,'readonly')
        const store= tx.objectStore(indexedDBUnmathcedLinksObject)
        const getAllData=store.getAll()
        getAllData.onsuccess=(e)=>{
            const tableInner=getAllData.result
            tableDOMProject(tableInner)
        }
    }
}