const orderVideoLinkOneSecondChangeBackgroundColor=()=>{
    const eachLink=document.querySelectorAll('.order-video-link')
    eachLink.forEach(item=>{
        item.classList.remove('one-second-background')
    })
    eachLink.forEach(item=>{
        item.addEventListener('click',(e)=>{
            e.target.classList.add('one-second-background')
        })
    })
}