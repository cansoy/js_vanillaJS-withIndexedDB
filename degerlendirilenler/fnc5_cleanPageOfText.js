const cleanPageOftext=()=>{
    const teyitGerekliMi=document.querySelectorAll('tbody td[class]:nth-child(4)')
    const enjKesmeTeyitText=document.querySelectorAll('tbody td[class]:nth-child(10)')
    const enjKesmeTeyitKimeVerdiText=document.querySelectorAll('tbody td[class]:nth-child(12)')
    const dokTeyitText=document.querySelectorAll('tbody td[class]:nth-child(14)')
    const dokTeyitKimeVerdiText=document.querySelectorAll('tbody td[class]:nth-child(16)')
    const enjVermeTeyitText=document.querySelectorAll('tbody td[class]:nth-child(18)')
    const enjVermeTeyitKimeVerdiText=document.querySelectorAll('tbody td[class]:nth-child(20)')
    const cikisTeyitText=document.querySelectorAll('tbody td[class]:nth-child(22)')
    const cikisTeyitKimeVerdiText=document.querySelectorAll('tbody td[class]:nth-child(24)')
    const inisTeyitText=document.querySelectorAll('tbody td[class]:nth-child(26)')
    const inisTeyitKimeVerdiText=document.querySelectorAll('tbody td[class]:nth-child(28)')
    const toprakTeyitText=document.querySelectorAll('tbody td[class]:nth-child(30)')
    const toprakTeyitKimeVerdiText=document.querySelectorAll('tbody td[class]:nth-child(32)')
    const ekedTeyitText=document.querySelectorAll('tbody td[class]:nth-child(34)')
    const ekedTeyitKimeVerdiText=document.querySelectorAll('tbody td[class]:nth-child(36)')
    const yolTeyitText=document.querySelectorAll('tbody td[class]:nth-child(38)')
    const yolTeyitKimeVerdiText=document.querySelectorAll('tbody td[class]:nth-child(40)')

    const geribildirimGereklimi=document.querySelectorAll('tbody td[class]:nth-child(42)')
    const teyitlerTammi=document.querySelectorAll('tbody td[class]:nth-child(43)')

const conditionOfTextteyitGerekliMi=(item)=>{
    if (item.textContent=='false') {
        item.textContent="TEYİT GEREK YOK"
    } else {
        item.textContent="TEYİT GEREKLİ" 
    }
}

const conditionOfTextgeribildirimGereklimi=(item)=>{
    if (item.textContent=='false') {
        item.textContent="GERİ BİLDİRİM GEREK YOK"
    } else {
        item.textContent="GERİ BİLDİRİM GEREKLİ"
        item.classList.add('bg-warning')
        item.classList.add('bg-opacity-100')
    }
}
const conditionOfTextteyitlerTammi=(item)=>{
    if (item.textContent=='false') {
        item.textContent="TEYİT EKSİK"
        item.classList.add('bg-info')
        item.classList.add('bg-opacity-100')
    } else {
        item.textContent="TEYİT TAM"
    }
}
const conditionOfTextTeyit=(item)=>{
    if (item.textContent=="gerekYok") {
        item.textContent="GEREK YOK"
        item.classList.add('bg-secondary')
        item.classList.add('bg-opacity-100')
    } 
    else if(item.textContent=="kayitVar") {
        item.textContent="KAYIT VAR"
    }
    else if(item.textContent=="eslesmeyenlerde") {
        item.textContent="EŞLEŞMEYENLERDE"
        item.classList.add('bg-primary')
        item.classList.add('bg-opacity-100')
    }
    else if(item.textContent=="teyitVerilmedi") {
        item.textContent="TEYİT VERİLMEMİŞ"
        item.classList.add('bg-danger')
        item.classList.add('bg-opacity-100')
    }
    else if(item.textContent=="sistemeDusmemis") {
        item.textContent="SİSTEME DÜŞMEMİŞ"
        item.classList.add('bg-dark')
        item.classList.add('bg-opacity-100')
    }
}
const contionOfTextTeyitKimVerdi=(item)=>{
    if (item.textContent=="gerekYok") {
        item.textContent="GEREK YOK"
    } 
    else if(item.textContent=="telsiz") {
        item.textContent="TELSİZ"
    }
    else if(item.textContent=="isgKapatani") {
        item.textContent="İSG KAPTANI"
    }
    else if(item.textContent=="scada") {
        item.textContent="SCADA"
    }
    else if (item.textContent=="offline") {
        item.textContent="OFFLİNE"
    }
}

    teyitGerekliMi.forEach(item=>{conditionOfTextteyitGerekliMi(item)})
    enjKesmeTeyitText.forEach(item=>{conditionOfTextTeyit(item)})
    enjKesmeTeyitKimeVerdiText.forEach(item=>{contionOfTextTeyitKimVerdi(item)})
    dokTeyitText.forEach(item=>{conditionOfTextTeyit(item)})
    dokTeyitKimeVerdiText.forEach(item=>{contionOfTextTeyitKimVerdi(item)})
    enjVermeTeyitText.forEach(item=>{conditionOfTextTeyit(item)})
    enjVermeTeyitKimeVerdiText.forEach(item=>{contionOfTextTeyitKimVerdi(item)})
    cikisTeyitText.forEach(item=>{conditionOfTextTeyit(item)})
    cikisTeyitKimeVerdiText.forEach(item=>{contionOfTextTeyitKimVerdi(item)})
    inisTeyitText.forEach(item=>{conditionOfTextTeyit(item)})
    inisTeyitKimeVerdiText.forEach(item=>{contionOfTextTeyitKimVerdi(item)})
    toprakTeyitText.forEach(item=>{conditionOfTextTeyit(item)})
    toprakTeyitKimeVerdiText.forEach(item=>{contionOfTextTeyitKimVerdi(item)})
    ekedTeyitText.forEach(item=>{conditionOfTextTeyit(item)})
    ekedTeyitKimeVerdiText.forEach(item=>{contionOfTextTeyitKimVerdi(item)})
    yolTeyitText.forEach(item=>{conditionOfTextTeyit(item)})
    yolTeyitKimeVerdiText.forEach(item=>{contionOfTextTeyitKimVerdi(item)})
    geribildirimGereklimi.forEach(item=>{conditionOfTextgeribildirimGereklimi(item)})
    teyitlerTammi.forEach(item=>{conditionOfTextteyitlerTammi(item)})
}