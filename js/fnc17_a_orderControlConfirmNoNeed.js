const orderControlConfirmNoNeed=()=>{
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
    enjKesmeTeyitVerenKisi.value="gerekYok"
    dokTeyitVerenKisi.value="gerekYok"
    enjVermeTeyitVerenKisi.value="gerekYok"
    cikisTeyitVerenKisi.value="gerekYok"
    inisTeyitVerenKisi.value="gerekYok"
    toprakTeyitVerenKisi.value="gerekYok"
    ekedTeyitVerenKisi.value="gerekYok"
    yolTeyitVerenKisi.value="gerekYok"
    // Control of explanation
    enjKesmeAciklama.value=""
    dokAciklama.value=""
    enjVermeAciklama.value=""
    cikisAciklama.value=""
    inisAciklama.value=""
    toprakAciklama.value=""
    ekedAciklama.value=""
    yolAciklama.value=""
    //  cnfirmNoNeedPassIt make it true
    cnfirmNoNeedPassIt=true
}