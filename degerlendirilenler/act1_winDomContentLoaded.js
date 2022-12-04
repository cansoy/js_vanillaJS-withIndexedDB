window.addEventListener('DOMContentLoaded',()=>{
    const zoomWindow=document.querySelector('#zoomWindow')
    zoomWindow.addEventListener('click',(e)=>{
        document.body.style.zoom = "50%";
        e.target.classList.add("bg-info")
        e.target.classList.add("rounded-circle")
    })
    getTableFromIndexedDB()
})