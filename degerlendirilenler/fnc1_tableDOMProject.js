const tableDOMProject=(tableInnerData)=>{
    tableBody.innerHTML=""
    tableBody.innerHTML=`<tr>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text" aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text" aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text" aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                            <td><input class="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"></td>
                        </tr>`
    const tableInner=tableInnerData.map(item=>{
        return  `<tr>
                    <td class="text-break border-bottom border-end">${item.kayitTarihi}</td>
                    <td class="text-break border-bottom border-end">${item.operasyonMerkezi}</td>
                    <td class="text-break border-bottom border-end">${item.calismaTuru_agyg}</td>
                    <td class="text-break border-bottom border-end">${item.goruntuluTeyitGereklimi}</td>
                    <td class="text-break border-bottom border-end">${item.siparisNumarasi}</td>
                    <td class="text-break border-bottom border-end">${item.siparisAciklamasi}</td>
                    <td class="text-break border-bottom border-end">${item.ekipKodu}</td>
                    <td class="text-break border-bottom border-end">${item.sicilNumaralari}</td>
                    <td class="text-break border-bottom border-end">${item.teyitVerenIsim.split('@tvisim@')[0]}</td>
                    <td class="text-break border-bottom border-end">${item.enjKesmeTeyitVarmi}</td>
                    <td class="text-break border-bottom border-end">
                        <a href="${item.enjKesmeVideoLink}" target="_blank">
                            <i class="bi bi-play-circle display-6 bg-warning bg-opacity-75 rounded-circle"></i>
                        </a>
                    </td>
                    <td class="text-break border-bottom border-end">${item.enjKesmeyeTeyitVeren}</td>
                    <td class="text-break border-bottom border-end">${item.enjKesmeAciklama}</td>
                    <td class="text-break border-bottom border-end">${item.dokTeyitVarmi}</td>
                    <td class="text-break border-bottom border-end">
                        <a href="${item.dokVideoLink}" target="_blank">
                            <i class="bi bi-play-circle display-6 bg-warning bg-opacity-75 rounded-circle"></i>
                        </a>
                    </td>
                    <td class="text-break border-bottom border-end">${item.dokyeTeyitVeren}</td>
                    <td class="text-break border-bottom border-end">${item.dokAciklama}</td>
                    <td class="text-break border-bottom border-end">${item.enjVermeTeyitVarmi}</td>
                    <td class="text-break border-bottom border-end">
                        <a href="${item.enjVermeVideoLink}" target="_blank">
                            <i class="bi bi-play-circle display-6 bg-warning bg-opacity-75 rounded-circle"></i>
                        </a>
                    </td>
                    <td class="text-break border-bottom border-end">${item.enjVermeyeTeyitVeren}</td>
                    <td class="text-break border-bottom border-end">${item.enjVermeAciklama}</td>
                    <td class="text-break border-bottom border-end">${item.cikisTeyitVarmi}</td>
                    <td class="text-break border-bottom border-end">
                        <a href="${item.cikisVideoLink}" target="_blank">
                            <i class="bi bi-play-circle display-6 bg-warning bg-opacity-75 rounded-circle"></i
                        </a>
                    </td>
                    <td class="text-break border-bottom border-end">${item.cikisyeTeyitVeren}</td>
                    <td class="text-break border-bottom border-end">${item.cikisAciklama}</td>
                    <td class="text-break border-bottom border-end">${item.inisTeyitVarmi}</td>
                    <td class="text-break border-bottom border-end">
                        <a href="${item.inisVideoLink}" target="_blank">
                            <i class="bi bi-play-circle display-6 bg-warning bg-opacity-75 rounded-circle"></i>
                        </a>
                    </td>
                    <td class="text-break border-bottom border-end">${item.inisyeTeyitVeren}</td>
                    <td class="text-break border-bottom border-end">${item.inisAciklama}</td>
                    <td class="text-break border-bottom border-end">${item.topraklamaTeyitVarmi}</td>
                    <td class="text-break border-bottom border-end">
                        <a href="${item.topraklamaVideoLink}" target="_blank">
                            <i class="bi bi-play-circle display-6 bg-warning bg-opacity-75 rounded-circle"></i>
                        </a>
                    </td>
                    <td class="text-break border-bottom border-end">${item.topraklamayeTeyitVeren}</td>
                    <td class="text-break border-bottom border-end">${item.topraklamaAciklama}</td>
                    <td class="text-break border-bottom border-end">${item.ekedTeyitVarmi}</td>
                    <td class="text-break border-bottom border-end">
                        <a href="${item.ekedVideoLink}" target="_blank">
                            <i class="bi bi-play-circle display-6 bg-warning bg-opacity-75 rounded-circle"></i>
                        </a>
                    </td>
                    <td class="text-break border-bottom border-end">${item.ekedyeTeyitVeren}</td>
                    <td class="text-break border-bottom border-end">${item.ekedAciklama}</td>
                    <td class="text-break border-bottom border-end">${item.yolTeyitVarmi}</td>
                    <td class="text-break border-bottom border-end">
                        <a href="${item.yolVideoLink}" target="_blank">
                            <i class="bi bi-play-circle display-6 bg-warning bg-opacity-75 rounded-circle"></i>
                        </a>
                    </td>
                    <td class="text-break border-bottom border-end">${item.yolyeTeyitVeren}</td>
                    <td class="text-break border-bottom border-end">${item.yolAciklama}</td>
                    <td class="text-break border-bottom border-end">${item.geribildirimGereklimi}</td>
                    <td class="text-break border-bottom border-end">${item.teyitlerTammi}</td>
                    <td class="text-break border-bottom border-end">${item.sureciDegerlendiren}</td>
                    <td class="text-break border-bottom border-end">${item.degerlendirmeZamani}</td>
                    <td class="text-break border-bottom">
                        <i class="bi bi-trash display-6 bg-danger delete-me-icon" data-order="${item.siparisNumarasi}"></i>
                    </td>
                </tr>`
    }).join("")
    tableBody.innerHTML+=tableInner
    aHrefIsBlank()
    cleanPageOftext()
    deleteMeIconAction()

}
