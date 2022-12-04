const checkExistingAnyDB=async()=>{
    const existingDBs=await indexedDB.databases()
    if (existingDBs.length>1) {
        if (existingDBs[0].name!=indexedDBAPIMainData && existingDBs[1].name!=indexedDBAPIUnmatchedLinks) {
            deleteAllDB()
            alert('Lütfen Tekrar Verinizi Yükleyiniz !')
            countError=1
        }
    }
    else {
        countError=1
    }

}
