const getOrderDetails=(orderNumber)=>{
    const request=indexedDB.open(indexedDBAPIMainData,indexedDBAPIMainDataVersion)
    request.onsuccess=(e)=>{
        const tx=request.result.transaction(indexedDBMainDataObject,'readwrite')
        const store=tx.objectStore(indexedDBMainDataObject)
        const orderDetail=store.get(orderNumber)
        orderDetail.onsuccess=(e)=>{
            const detail=orderDetail.result
            objGottenOrderDetail=detail
                // Accordion body text content
                siparisAciklamasiInnerBody.innerHTML=`<p class="text-break">
                                                    ${detail.SiparisAciklama}
                                                    <span class="bg-danger text-white">
                                                    OMS Bildirim Sayısı:${detail.BildirimSayisi}
                                                    </span></p>`
                const confirmingNames=detail.VideoVerenIsimler.split('@tvisim@')
                siparisTeyitVerenlerInnerBody.innerHTML=confirmingNames[0]
                siparisIsyerikoduInnerBody.innerHTML=`<p class="text-break">${detail.IsyeriKodu}</p>`
                // Order video links
                const orderVideoLinks=detail.VideoLinkleri.split('@tvlink@')
                if (orderVideoLinks[0] != 'TEYİT YOK') {
                    const orderVideoLinksHTML=orderVideoLinks.map(item=>{
                            const onlineOffline=item.includes('local:27080')
                            if (onlineOffline) {
                            var record="On"
                            }
                            else{
                                var record="Off"
                            }
                            if (item!="") {
                                return  `<div class="border p-1 order-video-link">
                                            <i class="bi bi-play-circle-fill" src="${item}">${record}</i>
                                        </div>`
                            }
                    }).join("")
                    orderVideoLinkSection.innerHTML=orderVideoLinksHTML
                    orderVideoLinkOneSecondChangeBackgroundColor()
                }else
                {
                    orderVideoLinkSection.innerHTML=""
                }
                // Order media player
                const playVideoLink=(e)=>{
                    cleanCheckList()
                    const playerSource=e.target.getAttribute('src')
                    orderMediaPlayerSection.innerHTML=""
                    const orderMediaPlayerSectionHTML=`<video controls id="newVideoMediaPlayerSource" autoplay></video>`
                    orderMediaPlayerSection.innerHTML=orderMediaPlayerSectionHTML
                    const  videoMediaPlayerSourceHTML=`<source src=${playerSource} type="video/mp4" controls>`
                    const newVideoMediaPlayerSource=document.querySelector('#newVideoMediaPlayerSource')
                    newVideoMediaPlayerSource.innerHTML=videoMediaPlayerSourceHTML
                }
                const orderVideoLinkItems=document.querySelectorAll('.order-video-link')
                orderVideoLinkItems.forEach(item=>{
                    item.addEventListener('click',playVideoLink)
                })
                // Order more detail usedmaterial, consumption....
                orderMoreDetailInner[0].textContent=detail.BoTuru
                orderMoreDetailInner[1].textContent=detail.GercekIsGerilimSeviyesi
                orderMoreDetailInner[2].textContent=detail.ArizaAltKoduTnm
                orderMoreDetailInner[3].textContent=detail.ArizaOlmaSebebi
                orderMoreDetailInner[4].textContent=detail.ArzBaslTrhSaat
                orderMoreDetailInner[5].textContent=detail.HrktBaslTrhSaat
                orderMoreDetailInner[6].textContent=detail.ArzMdhSuresi
                orderMoreDetailInner[7].textContent=detail.ClsBaslTrhSaat
                orderMoreDetailInner[8].innerHTML=` <span class="bg-primary">${detail.YolSuresi} DK</span>
                                                    <span class="bg-warning">${detail.CalsSuresi} DK</span>
                                                    <span class="bg-info">${detail.DnsSuresi} DK</span>`
                const orderIds=detail.TeyitVerenSiciller.split(';')
                const orderIdsHTML=orderIds.map(item=>`<p>${item}</p>`).join("")
                orderMoreDetailInner[9].innerHTML=orderIdsHTML
                const confirmVoltages=detail.TeyitGerilimSeviyesi.split('@tvonoff@')
                const voltageHTML=confirmVoltages.map(item=>`<span>${item}-</span>`).join('')
                orderMoreDetailInner[10].innerHTML=voltageHTML
                orderMoreDetailInner[11].textContent='On/off düzeltilecek'
                const confirmHours=detail.VideoVerilmeSaati.split('@tvsaat@')
                const confirmHoursHTML=confirmHours.map(item=>`<span>${item}-</span>`).join('')
                orderMoreDetailInner[12].innerHTML=confirmHoursHTML
                orderMoreDetailInner[13].innerHTML=`<span>${detail.EnerjiKesmTrh}-</span><span>${detail.EnerjiKesmeSaat}</span>` 
                orderMoreDetailInner[14].innerHTML=`<span>${detail.TahminiEnerjiVermeTrh}-</span><span>${detail.TahminiEnerjiVermeSaat}</span>`
                orderMoreDetailInner[15].innerHTML=`<span>${detail.GercekEnerjiVermeTrh}-</span><span>${detail.GercekEnerjiVermeSaat}</span>`
                orderMoreDetailInner[16].textContent=detail.OMSSiparisNo
                const usedMaterials=detail.DusumYapilanMalzemeler.split('@m@')
                const usedMaterialsHTML=usedMaterials.map(item=>`<span>${item}</span>`).join('')
                orderMoreDetailInner[17].innerHTML=usedMaterialsHTML
                orderMoreDetailInner[18].innerHTML=`${detail.DusulenMalzemeTutarıTplm} TL`
                orderMoreDetailInner[19].innerHTML=`<p class="text-break">${detail.IsAdresi}></p>`
        }
    }
}






