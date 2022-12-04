const afterFillOrderControlFormThenClean=()=>{

    orderVideoLinkSection.innerHTML=""
    orderMediaPlayerSection.innerHTML=""
    explanationsAndWarnings.forEach(item=>{item.value=""})
    controlFormVideoLinkExist.forEach(item=>{
        item.classList.add('bg-danger')
        item.setAttribute('src','')
        item.textContent="YOK"
    })
    enjKesmeChecked.checked=false
    dokChecked.checked=false
    enjVermeChecked.checked=false
    cikisChecked.checked=false
    inisChecked.checked=false
    ekedChecked.checked=false
    toprakChecked.checked=false
    yolChecked.checked=false
    goruntuluTeyitGerekli.checked=false
    goruntuluTeyitGerekYok.checked=false
    // Last points
    geriBildirimYapilmali.checked=false
    geriBildirimGerekYok.checked=false
    teyitlerTam.checked=false
    teyitlerEksik.checked=false
    // Confirm stuation
    enjKesmeTeyitBilgisi.value="gerekYok"
    dokTeyitBilgisi.value="gerekYok"
    enjVermeTeyitBilgisi.value="gerekYok"
    cikisTeyitBilgisi.value="gerekYok"
    inisTeyitBilgisi.value="gerekYok"
    topraklamaTeyitBilgisi.value="gerekYok"
    ekedTeyitBilgisi.value="gerekYok"
    yolTeyitBilgisi.value="gerekYok"
    // Confirming person
    enjKesmeTeyitVerenKisi.value="kime"
    dokTeyitVerenKisi.value="kime"
    enjVermeTeyitVerenKisi.value="kime"
    cikisTeyitVerenKisi.value="kime"
    inisTeyitVerenKisi.value="kime"
    toprakTeyitVerenKisi.value="kime"
    ekedTeyitVerenKisi.value="kime"
    yolTeyitVerenKisi.value="kime"
    // Control of explanation
    enjKesmeAciklama.value=""
    dokAciklama.value=""
    enjVermeAciklama.value=""
    cikisAciklama.value=""
    inisAciklama.value=""
    toprakAciklama.value=""
    ekedAciklama.value=""
    yolAciklama.value=""
}