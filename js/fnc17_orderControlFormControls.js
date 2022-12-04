const orderFormControlsFunction=()=>{
    if (objGottenOrderDetail==undefined) {
        alert('Hangi Sipariş İçin Formu Dolduruyorsunuz !')
        countError=1
        return
    }

    if ( goruntuluTeyitGerekli.checked==false && goruntuluTeyitGerekYok.checked == false) {
        alert('Görüntülü Teyit Gerekli Mi ?')
        countError=1
        return
    }

    if (goruntuluTeyitGerekYok.checked==true) {
        const answer=confirm('Görüntülü Teyit Gerekli Değil Mi ?')
        if (answer) {
            orderControlConfirmNoNeed()
            cnfirmNoNeedPassIt=false
            return
        }
    }
    if (enjKesmeTeyitVerenKisi.value=='kime') {
        alert('Enerji Kesmeye Kim Teyit Verdi !')
        enjKesmeLabel.classList.add('one-second-background-label')
        setTimeout(()=>{enjKesmeLabel.classList.remove('one-second-background-label')},1000)
        countError=1
        return
    }
    if (dokTeyitVerenKisi.value=='kime') {
        alert('Dokunmadan Önce Kontrole Kim Teyit Verdi !')
        dokLabel.classList.add('one-second-background-label')
        setTimeout(()=>{dokLabel.classList.remove('one-second-background-label')},1000)
        countError=1
        return
    }
    if (enjVermeTeyitVerenKisi.value=='kime') {
        alert('Enerji Vermeye Kim Teyit Verdi !')
        enjVermeLabel.classList.add('one-second-background-label')
        setTimeout(()=>{enjVermeLabel.classList.remove('one-second-background-label')},1000)
        countError=1
        return
    }
    if (cikisTeyitVerenKisi.value=='kime') {
        alert('Çıkış Çalışmasına Kim Teyit Verdi !')
        cikisLabel.classList.add('one-second-background-label')
        setTimeout(()=>{cikisLabel.classList.remove('one-second-background-label')},1000)
        countError=1
        return
    }
    if (inisTeyitVerenKisi.value=='kime') {
        alert('İniş Çalışmasına Kim Teyit Verdi !')
        inisLabel.classList.add('one-second-background-label')
        setTimeout(()=>{inisLabel.classList.remove('one-second-background-label')},1000)
        countError=1
        return
    }
    if (toprakTeyitVerenKisi.value=='kime') {
        alert('Topraklamaya Kim Teyit Verdi !')
        topraklamaLabel.classList.add('one-second-background-label')
        setTimeout(()=>{topraklamaLabel.classList.remove('one-second-background-label')},1000)
        countError=1
        return
    }
    if (ekedTeyitVerenKisi.value=='kime') {
        alert('EKED\'e Kim Teyit Verdi !')
        ekedLabel.classList.add('one-second-background-label')
        setTimeout(()=>{ekedLabel.classList.remove('one-second-background-label')},1000)
        countError=1
        return
    }
    if (yolTeyitVerenKisi.value=='kime') {
        alert('Yol Çalışmasına Kim Teyit Verdi !')
        yolLabel.classList.add('one-second-background-label')
        setTimeout(()=>{yolLabel.classList.remove('one-second-background-label')},1000)
        countError=1
        return
    }
    if ( geriBildirimYapilmali.checked==false && geriBildirimGerekYok.checked==false ) {
        alert('Geri Bildirim Yapılmalı Mı ?')
        countError=1
        return
    }
    if ( teyitlerTam.checked==false && teyitlerEksik.checked==false ) {
        alert('Teyitler Tam Mı ?')
        countError=1
        return
    }
}