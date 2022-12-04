const warningDontHaveAnyDB=async()=>{
    const existingDBs=await indexedDB.databases()
    if (existingDBs.length==0) {
        alert('Lütfen Öncelikle Verinizi Listeleyiniz !')
    } 
}