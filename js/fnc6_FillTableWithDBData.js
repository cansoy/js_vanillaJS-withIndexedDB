const fillTableWithDBData=async()=>{
    tableBody.innerHTML=""
    tableBody.innerHTML=`<tr>
                        <td class="bg-info"><input id="advencedOrderNo" class="form-control form-control-sm" type="text" placeholder="Sip. No" aria-label=".form-control-sm example"></td>
                        <td class="bg-info"><input id="advencedOrderType" class="form-control form-control-sm" type="text" placeholder="Y*" aria-label=".form-control-sm example"></td>
                        <td class="bg-info"><input id="advencedOrderVoltage" class="form-control form-control-sm" type="text" placeholder="AG/YG" aria-label=".form-control-sm example"></td>
                        <td class="bg-info"><input id="advencedOrderWorkTime" class="form-control form-control-sm" type="text" placeholder="Süre" aria-label=".form-control-sm example"></td>
                        <td class="bg-info"><input id="advencedOrderCrew"class="form-control form-control-sm" type="text" placeholder="Ekip" aria-label=".form-control-sm example"></td>
                    </tr>`
    const request=indexedDB.open(indexedDBAPIMainData,indexedDBAPIMainDataVersion)
    request.error=(e)=>{
        console.log(e.target.error)
        alert(e.target.error)
    }
    request.onsuccess=(e)=>{
    const tx=request.result.transaction(indexedDBMainDataObject,'readwrite')
    const store=tx.objectStore(indexedDBMainDataObject)
    const index=store.index(indexedDBMainDataIndex)
    const allData=index.getAll()
        allData.onsuccess=(e)=>{
            const queryResult=allData.result
            const tr=queryResult.map(item=>{
                return `<tr>
                            <td class="order-info order-no">${item.SiparisNo}</td>
                            <td class="order-info order-type">${item.SiparisTuru}</td>
                            <td class="order-info order-voltage">${item.GercekIsGerilimSeviyesi}</td>
                            <td class="order-info order-time">${item.CalsSuresi} DK </td>
                            <td class="order-info order-crew-code">${item.SanalEkipKodlari}</td>
                        </tr>`
            }).join("")
            tableBody.innerHTML+=tr
            ////////////////////////////////////////////////////////////////////////////////////////////////
                const advencedOrderNo=document.querySelector('#advencedOrderNo')
                const advencedOrderType=document.querySelector('#advencedOrderType')
                const advencedOrderVoltage=document.querySelector('#advencedOrderVoltage')
                const advencedOrderWorkTime=document.querySelector('#advencedOrderWorkTime')
                const advencedOrderCrew=document.querySelector('#advencedOrderCrew')
                advencedOrderNoFilter()
                advencedOrderTypeFilter()
                advencedOrderVoltageFilter()
                advencedOrderWorkTimeFilter()
                advencedOrderCrewFilter()
                advencedOrderNo.addEventListener('input',advencedOrderNoFilter)
                advencedOrderType.addEventListener('input',advencedOrderTypeFilter)
                advencedOrderVoltage.addEventListener('input',advencedOrderVoltageFilter)
                advencedOrderWorkTime.addEventListener('click',advencedOrderWorkTimeFilter)
                advencedOrderCrew.addEventListener('input',advencedOrderCrewFilter)
            // ////////////////////////////////////////////////////////////////////////////////////////////////
            getControlledOrdersOrderNoMakeGreen()
            // ////////////////////////////////////////////////////////////////////////////////////////////////
            orderHVBackgroundColorRed()
            orderCLickActions()
            searchListButton.classList.remove('bg-danger')
        }
    }
}