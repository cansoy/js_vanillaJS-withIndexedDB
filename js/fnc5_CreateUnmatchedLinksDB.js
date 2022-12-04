const  createUnmatchedLinksIndexedDb=async(dateFormat)=>{
    const APIUnmatchedLinksResponse=await fetch('./fakeAPI/unmatchedData.json')
    const APIUnmatchedLinks=await APIUnmatchedLinksResponse.json()
    const APIUnmatchedLinksQuery=APIUnmatchedLinks.filter(item=>item.JSTarihFormati==dateFormat)

    const request=indexedDB.open(indexedDBAPIUnmatchedLinks,indexedDBAPIUnmatchedLinksVersion)
    request.onerror=async(e)=>{
        alert(e.target.error)
        return
    }
    request.onupgradeneeded=async(e)=>{
        const objStore=request.result.createObjectStore(indexedDBUnmathcedLinksObject,{keyPath:'id',autoIncrement:true})
    }
    request.onsuccess=async(e)=>{
        const tx =request.result.transaction(indexedDBUnmathcedLinksObject,'readwrite')
        const store =tx.objectStore(indexedDBUnmathcedLinksObject)
        APIUnmatchedLinks.forEach(item=>{
            const addItem=store.add(item)
        })
    }
}