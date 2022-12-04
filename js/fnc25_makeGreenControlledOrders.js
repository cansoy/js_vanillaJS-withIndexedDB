const getControlledOrdersOrderNoMakeGreen=async()=>{
    const requestControlledOrders=indexedDB.open(indexedDBControlledOrders,indexedDBControlledOrdersVersion)
    requestControlledOrders.onerror=async(e)=>{
        alert(requestControlledOrders.result)
        return
    }
    requestControlledOrders.onupgradeneeded=async(e)=>{
        const objControlledOrders=requestControlledOrders.result.createObjectStore(indexedDBControlledOrdersObject,{keyPath:'siparisNumarasi'})
        const index=objControlledOrders.createIndex(indexedDBControlledOrdersIndex,indexedDBControlledOrdersIndexMain)
    }
    requestControlledOrders.onsuccess=async(e)=>{
        const tx=requestControlledOrders.result.transaction(indexedDBControlledOrdersObject,'readwrite')
        const store=tx.objectStore(indexedDBControlledOrdersObject)
        const allKeys=store.getAllKeys()
        allKeys.onsuccess=()=>{
            const controlledOrdersAllKeys=allKeys.result.map(item=>item).sort()
            const orderNo=document.querySelectorAll('.order-no')  
            orderNo.forEach(tableTd=>{
                const makeGreen=controlledOrdersAllKeys.find(fnd=>fnd==tableTd.textContent)
                if (makeGreen != undefined) {
                    tableTd.classList.add('bg-success')
                    tableTd.nextElementSibling.classList.add('bg-success')
                    tableTd.nextElementSibling.nextElementSibling.classList.add('bg-success')
                    tableTd.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('bg-success')
                    tableTd.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('bg-success')
                }
            })
        }
    }
}
