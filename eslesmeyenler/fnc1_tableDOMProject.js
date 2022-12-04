const tableDOMProject=(tableInnerData)=>{
    tableBody.innerHTML=""
    tableBody.innerHTML=`<tr>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text" aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text" aria-label=".form-control-sm example"></td>
                            <td></td>
                            <td></td>
                        </tr>`
    const tableInner=tableInnerData.map(item=>{
        return  `<tr>
                    <td class="text-break border-bottom border-end">${item.SicilId}</td>
                    <td class="text-break border-bottom border-end">${item.SicilIsim}</td>
                    <td class="text-break border-bottom border-end">${item.TeyitKanali}</td>
                    <td class="text-break border-bottom border-end">${item.GerilimTuru}</td>
                    <td class="text-break border-bottom border-end">${item.OnlineOffline}</td>
                    <td class="text-break border-bottom border-end">${item.VideoSaati}</td>
                    <td class="text-break border-bottom border-end d-flex-column justify-content-center align-items-stretch"><a class="p-4" href="${item.VideoLinki}" target="_blank"><i class="bi bi-file-play"></i></a></td>
                </tr>`
    }).join("")
    tableBody.innerHTML+=tableInner
}
