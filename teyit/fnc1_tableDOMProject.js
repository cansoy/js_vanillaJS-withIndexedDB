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
                        </tr>`
    const tableInner=tableInnerData.map(item=>{
        return  `<tr>
                    <td class="text-break border-bottom border-end">${item.SiparisAciklama}</td>
                    <td class="text-break border-bottom border-end">${item.BildirimSayisi}</td>
                    <td class="text-break border-bottom border-end">${item.SiparisNo}</td>
                    <td class="text-break border-bottom border-end">${item.SiparisTuru}</td>
                    <td class="text-break border-bottom border-end">${item.ArizaKesKesntzDssl}</td>
                    <td class="text-break border-bottom border-end">${item.GercekIsGerilimSeviyesi}</td>
                    <td class="text-break border-bottom border-end">${item.ArizaOlmaSebebi}</td>
                    <td class="text-break border-bottom border-end">${item.ArzMdhSuresi}</td>
                    <td class="text-break border-bottom border-end">${item.YolSuresi}</td>
                    <td class="text-break border-bottom border-end">${item.CalsSuresi}</td>
                    <td class="text-break border-bottom border-end">${item.DnsSuresi}</td>
                    <td class="text-break border-bottom border-end">${item.EnerjiKesmTrh} ${item.EnerjiKesmeSaat}</td>
                    <td class="text-break border-bottom border-end">${item.TahminiEnerjiVermeTrh} ${item.TahminiEnerjiVermeSaat}</td>
                    <td class="text-break border-bottom border-end">${item.GercekEnerjiVermeTrh} ${item.GercekEnerjiVermeSaat}</td>
                    <td class="text-break border-bottom border-end">${item.IsAdresi}</td>
                    <td class="text-break border-bottom border-end">${item.DusumYapilanMalzemeler}</td>
                    <td class="text-break border-bottom border-end">${item.DusulenMalzemeTutarıTplm}</td>
                    <td class="text-break border-bottom border-end">${item.OMSSiparisNo}</td>
                    <td class="text-break border-bottom border-end">${item.IsyeriKodu}</td>
                </tr>`
    }).join("")
    tableBody.innerHTML+=tableInner
}
