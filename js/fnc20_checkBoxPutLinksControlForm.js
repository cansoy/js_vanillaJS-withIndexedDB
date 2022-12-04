const enjKesmeCheckedChecked=(e)=>{
    if (orderMediaPlayerSection.childElementCount==0) {
        enjKesmeChecked.checked=false
        return
    }
    if (orderVideoLinkSection.childElementCount==0) {
        enjKesmeChecked.checked=false
        return
    }
    const videoSrc=document.querySelector('video source[src]')
    const videoSrcLink=videoSrc.getAttribute('src')
    enjKesmeLinki.innerHTML=`<i class="bi bi-shield-x delete-link" id="enjKesmeLinkIcon"></i>`
    enjKesmeLinki.classList.remove('bg-danger')
    enjKesmeLinki.classList.add('bg-success')
    enjKesmeLinki.setAttribute('src',videoSrcLink)
    enjKesmeTeyitBilgisi.value="kayitVar"

    const enjKesmeDeleteLink=(e)=>{
        e.target.remove()
        enjKesmeLinki.classList.remove('bg-success')
        enjKesmeLinki.setAttribute('src','')
        enjKesmeLinki.classList.add('bg-danger')
        enjKesmeLinki.textContent="YOK"
        enjKesmeChecked.checked=false
        enjKesmeTeyitBilgisi.value="gerekYok"
        enjKesmeTeyitVerenKisi.value="kime"
        enjKesmeAciklama.value=""
    }
    const enjKesmeLinkIcon=document.querySelector('#enjKesmeLinkIcon')
    enjKesmeLinkIcon.addEventListener('click',enjKesmeDeleteLink)
}

const dokCheckedChecked=(e)=>{
    if (orderMediaPlayerSection.childElementCount==0) {
        dokChecked.checked=false
        return
    }
    if (orderVideoLinkSection.childElementCount==0) {
        dokChecked.checked=false
        return
    }
    const videoSrc=document.querySelector('video source[src]')
    const videoSrcLink=videoSrc.getAttribute('src')
    dokLinki.innerHTML=`<i class="bi bi-shield-x delete-link" id="dokLinkIcon"></i>`
    dokLinki.classList.remove('bg-danger')
    dokLinki.classList.add('bg-success')
    dokLinki.setAttribute('src',videoSrcLink)
    dokTeyitBilgisi.value="kayitVar"

    const dokDeleteLink=(e)=>{
        e.target.remove()
        dokLinki.classList.remove('bg-success')
        dokLinki.setAttribute('src','')
        dokLinki.classList.add('bg-danger')
        dokLinki.textContent="YOK"
        dokChecked.checked=false
        dokTeyitBilgisi.value="gerekYok"
        dokTeyitVerenKisi.value="kime"
        dokAciklama.value=""
    }
    const dokLinkIcon=document.querySelector('#dokLinkIcon')
    dokLinkIcon.addEventListener('click',dokDeleteLink)
}

const enjVermeCheckedChecked=(e)=>{
    if (orderMediaPlayerSection.childElementCount==0) {
        enjVermeChecked.checked=false
        return
    }
    if (orderVideoLinkSection.childElementCount==0) {
        enjVermeChecked.checked=false
        return
    }
    const videoSrc=document.querySelector('video source[src]')
    const videoSrcLink=videoSrc.getAttribute('src')
    enjVermeLinki.innerHTML=`<i class="bi bi-shield-x delete-link" id="enjVermeLinkIcon"></i>`
    enjVermeLinki.classList.remove('bg-danger')
    enjVermeLinki.classList.add('bg-success')
    enjVermeLinki.setAttribute('src',videoSrcLink)
    enjVermeTeyitBilgisi.value="kayitVar" 
    
    const enjVermeDeleteLink=(e)=>{
        e.target.remove()
        enjVermeLinki.classList.remove('bg-success')
        enjVermeLinki.setAttribute('src','')
        enjVermeLinki.classList.add('bg-danger')
        enjVermeLinki.textContent="YOK"
        enjVermeChecked.checked=false
        enjVermeTeyitBilgisi.value="gerekYok"
        enjVermeTeyitVerenKisi.value="kime"
        enjVermeAciklama.value=""
    }
    const enjVermeLinkIcon=document.querySelector('#enjVermeLinkIcon')
    enjVermeLinkIcon.addEventListener('click',enjVermeDeleteLink)
}

const cikisCheckedChecked=(e)=>{
    if (orderMediaPlayerSection.childElementCount==0) {
        cikisChecked.checked=false
        return
    }
    if (orderVideoLinkSection.childElementCount==0) {
        cikisChecked.checked=false
        return
    }
    const videoSrc=document.querySelector('video source[src]')
    const videoSrcLink=videoSrc.getAttribute('src')
    cikisLinki.innerHTML=`<i class="bi bi-shield-x delete-link" id="cikisLinkIcon"></i>`
    cikisLinki.classList.remove('bg-danger')
    cikisLinki.classList.add('bg-success')
    cikisLinki.setAttribute('src',videoSrcLink)
    cikisTeyitBilgisi.value="kayitVar"
    
    const cikisDeleteLink=(e)=>{
        e.target.remove()
        cikisLinki.classList.remove('bg-success')
        cikisLinki.setAttribute('src','')
        cikisLinki.classList.add('bg-danger')
        cikisLinki.textContent="YOK"
        cikisChecked.checked=false
        cikisTeyitBilgisi.value="gerekYok"
        cikisTeyitVerenKisi.value="kime"
        cikisAciklama.value=""
    }
    const cikisLinkIcon=document.querySelector('#cikisLinkIcon')
    cikisLinkIcon.addEventListener('click',cikisDeleteLink)
}

const inisCheckedChecked=(e)=>{
    if (orderMediaPlayerSection.childElementCount==0) {
        inisChecked.checked=false
        return
    }
    if (orderVideoLinkSection.childElementCount==0) {
        inisChecked.checked=false
        return
    }
    const videoSrc=document.querySelector('video source[src]')
    const videoSrcLink=videoSrc.getAttribute('src')
    inisLinki.innerHTML=`<i class="bi bi-shield-x delete-link" id="inisLinkIcon"></i>`
    inisLinki.classList.remove('bg-danger')
    inisLinki.classList.add('bg-success')
    inisLinki.setAttribute('src',videoSrcLink)
    inisTeyitBilgisi.value="kayitVar"
    
    const inisDeleteLink=(e)=>{
        e.target.remove()
        inisLinki.classList.remove('bg-success')
        inisLinki.setAttribute('src','')
        inisLinki.classList.add('bg-danger')
        inisLinki.textContent="YOK"
        inisChecked.checked=false
        inisTeyitBilgisi.value="gerekYok"
        inisTeyitVerenKisi.value="kime"
        inisAciklama.value=""
    }
    const inisLinkIcon=document.querySelector('#inisLinkIcon')
    inisLinkIcon.addEventListener('click',inisDeleteLink)
}

const ekedCheckedChecked=(e)=>{
    if (orderMediaPlayerSection.childElementCount==0) {
        ekedChecked.checked=false
        return
    }
    if (orderVideoLinkSection.childElementCount==0) {
        ekedChecked.checked=false
        return
    }
    const videoSrc=document.querySelector('video source[src]')
    const videoSrcLink=videoSrc.getAttribute('src')
    ekedLinki.innerHTML=`<i class="bi bi-shield-x delete-link" id="ekedLinkIcon"></i>`
    ekedLinki.classList.remove('bg-danger')
    ekedLinki.classList.add('bg-success')
    ekedLinki.setAttribute('src',videoSrcLink)
    ekedTeyitBilgisi.value="kayitVar"
    
    const ekedDeleteLink=(e)=>{
        e.target.remove()
        ekedLinki.classList.remove('bg-success')
        ekedLinki.setAttribute('src','')
        ekedLinki.classList.add('bg-danger')
        ekedLinki.textContent="YOK"
        ekedChecked.checked=false
        ekedTeyitBilgisi.value="gerekYok"
        ekedTeyitVerenKisi.value="kime"
        ekedAciklama.value=""
    }
    const ekedLinkIcon=document.querySelector('#ekedLinkIcon')
    ekedLinkIcon.addEventListener('click',ekedDeleteLink)
}

const toprakCheckedChecked=(e)=>{
    if (orderMediaPlayerSection.childElementCount==0) {
        toprakChecked.checked=false
        return
    }
    if (orderVideoLinkSection.childElementCount==0) {
        toprakChecked.checked=false
        return
    }
    const videoSrc=document.querySelector('video source[src]')
    const videoSrcLink=videoSrc.getAttribute('src')
    topraklamaLinki.innerHTML=`<i class="bi bi-shield-x delete-link" id="toprakLinkIcon"></i>`
    topraklamaLinki.classList.remove('bg-danger')
    topraklamaLinki.classList.add('bg-success')
    topraklamaLinki.setAttribute('src',videoSrcLink)
    topraklamaTeyitBilgisi.value="kayitVar"
    
    const topraklamaDeleteLink=(e)=>{
        e.target.remove()
        topraklamaLinki.classList.remove('bg-success')
        topraklamaLinki.setAttribute('src','')
        topraklamaLinki.classList.add('bg-danger')
        topraklamaLinki.textContent="YOK"
        toprakChecked.checked=false
        topraklamaTeyitBilgisi.value="gerekYok"
        toprakTeyitVerenKisi.value="kime"
        toprakAciklama.value=""
    }
    const toprakLinkIcon=document.querySelector('#toprakLinkIcon')
    toprakLinkIcon.addEventListener('click',topraklamaDeleteLink)

}

const yolCheckedChecked=(e)=>{
    if (orderMediaPlayerSection.childElementCount==0) {
        yolChecked.checked=false
        return
    }
    if (orderVideoLinkSection.childElementCount==0) {
        yolChecked.checked=false
        return
    }
    const videoSrc=document.querySelector('video source[src]')
    const videoSrcLink=videoSrc.getAttribute('src')
    yolLinki.innerHTML=`<i class="bi bi-shield-x delete-link" id="yolLinkIcon"></i>`
    yolLinki.classList.remove('bg-danger')
    yolLinki.classList.add('bg-success')
    yolLinki.setAttribute('src',videoSrcLink)
    yolTeyitBilgisi.value="kayitVar"
    
    const yolDeleteLink=(e)=>{
        e.target.remove()
        yolLinki.classList.remove('bg-success')
        yolLinki.setAttribute('src','')
        yolLinki.classList.add('bg-danger')
        yolLinki.textContent="YOK"
        yolChecked.checked=false
        yolTeyitBilgisi.value="gerekYok"
        yolTeyitVerenKisi.value="kime"
        yolAciklama.value=""
    }
    const yolLinkIcon=document.querySelector('#yolLinkIcon')
    yolLinkIcon.addEventListener('click',yolDeleteLink)
}

