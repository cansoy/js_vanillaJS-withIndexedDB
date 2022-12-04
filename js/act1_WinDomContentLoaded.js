
window.addEventListener('DOMContentLoaded',()=>{
    domContentAttributes()
    loadOperationCenters()
    warningDontHaveAnyDB()
    getExistingDBData()
    searchListButton.addEventListener('click',createNewListIndexedDB)
    clearMyAllControlForm.addEventListener('click',cleanAllFormControls)
    document.body.style.zoom = "90%";
})