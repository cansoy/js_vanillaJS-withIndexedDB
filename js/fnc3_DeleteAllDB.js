const deleteAllDB=async()=>{
    const existingDBs=await indexedDB.databases()
    for (let i = 0; i < existingDBs.length; i++) {
        indexedDB.deleteDatabase(existingDBs[i].name)
    }
}