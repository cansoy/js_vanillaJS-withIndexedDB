let controlledOrdersUniqeCrewCodes=[]
let controlledOrdersYGOrders=[]
let mainDataUniqeCrewCodes=[]
let mainDataYGOrders=[]

const getAllDataFromControlledDB=async()=>{
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
        const allControlledOrders=store.getAll()
        allControlledOrders.onsuccess=(e)=>{
            // Crew codes
            const crewCodes=allControlledOrders.result.map(item=>item.sanalEkipKodu)
            const uniqeCrewCodes=[... new Set(crewCodes)]
            const uniqeCrewCodesSorted=uniqeCrewCodes.sort()
            controlledOrdersUniqeCrewCodes=uniqeCrewCodesSorted
            // YG orders
            const ygOrders=allControlledOrders.result.filter(item=>item.calismaTuru_agyg=='YG')
            const ygOrdersNo=ygOrders.map(item=>item.siparisNumarasi)
            controlledOrdersYGOrders=ygOrdersNo
        }
    } 
}
const getDataFromMainDataDB=async()=>{
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
        const allMainData=store.getAll()
        allMainData.onsuccess=(e)=>{
            // Crew codes
            const crewCodes=allMainData.result.map(item=>item.SanalEkipKodlari)
            const uniqeCrewCodes=[... new Set(crewCodes)]
            const uniqeCrewCodesSorted=uniqeCrewCodes.sort()
            // YG ordes
            const ygOrders=allMainData.result.filter(item=>item.GercekIsGerilimSeviyesi=='YG')
            const ygOrdersNo=ygOrders.map(item=>item.SiparisNo)
            // Check at least one crew checked ! and allYG orders checked
            // Crew Controls
            if (controlledOrdersUniqeCrewCodes.length <=0 ) {
                alert('Değerlendirme Yapmadığınız Ekip/Ekipler Var !')
                return
            }
            if (controlledOrdersUniqeCrewCodes.length != uniqeCrewCodesSorted.length) {
               alert('Değerlendirme Yapmadığınız Ekip/Ekipler Var !')
               return
            }
            // YG orders Controls
            if (ygOrdersNo.length>0) {
                if (controlledOrdersYGOrders.length<=0) {
                    alert('Değerlendirme Yapmadığınız YG İşler Var !')
                    return
                }
                if (controlledOrdersYGOrders.length != ygOrdersNo.length ) {
                    alert('Değerlendirme Yapmadığınız YG İşler Var !')
                    return
                }
            }
            // Confirm to send ok mail
            const answer=confirm('Azami Kontrolleri Sağladınız ! Mail Göndermek İstiyormusunuz !')
            if (answer) {
                alert('Mail Gönderildi Veri tabanını Düzenle !')
                deleteAllDB()
            }
            else{
                return
            }
        }
    }
}


const toSendEmailCheckConditions=async()=>{
    await getAllDataFromControlledDB()
    await getDataFromMainDataDB()
}