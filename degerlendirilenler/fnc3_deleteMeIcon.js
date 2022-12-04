
const deleteMeIconAction=()=>{
    const deleteMeIcon=document.querySelectorAll('.delete-me-icon')
    const deleteEveluatedOrder=(icon)=>{
        const orderNumber=icon.target.dataset.order
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
            const tx= request.result.transaction(indexedDBControlledOrdersObject,'readwrite')
            const store= tx.objectStore(indexedDBControlledOrdersObject)
            const deleteItem=store.delete(orderNumber)
            icon.target.parentElement.parentElement.remove()
        }
    }
    deleteMeIcon.forEach(item=>{
        item.addEventListener('click',deleteEveluatedOrder)
    })
}
