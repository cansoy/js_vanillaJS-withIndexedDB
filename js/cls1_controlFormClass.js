class controlFormClass{
    constructor(
        kayitTarihi,
        operasyonMerkezi,
        calismaTuru_agyg,
        goruntuluTeyitGereklimi,
        siparisNumarasi,
        siparisAciklamasi,
        ekipKodu,
        sicilNumaralari,
        teyitVerenIsim,
        enjKesmeTeyitVarmi,
        enjKesmeVideoLink,
        enjKesmeyeTeyitVeren,
        enjKesmeAciklama,
        dokTeyitVarmi,
        dokVideoLink,
        dokyeTeyitVeren,
        dokAciklama,
        enjVermeTeyitVarmi,
        enjVermeVideoLink,
        enjVermeyeTeyitVeren,
        enjVermeAciklama,
        cikisTeyitVarmi,
        cikisVideoLink,
        cikisyeTeyitVeren,
        cikisAciklama,
        inisTeyitVarmi,
        inisVideoLink,
        inisyeTeyitVeren,
        inisAciklama,
        topraklamaTeyitVarmi,
        topraklamaVideoLink,
        topraklamayeTeyitVeren,
        topraklamaAciklama,
        ekedTeyitVarmi,
        ekedVideoLink,
        ekedyeTeyitVeren,
        ekedAciklama,
        yolTeyitVarmi,
        yolVideoLink,
        yolyeTeyitVeren,
        yolAciklama,
        geribildirimGereklimi,
        teyitlerTammi,
        sanalEkipKodu
    )
    {
        this.kayitTarihi=kayitTarihi
        this.operasyonMerkezi=operasyonMerkezi
        this.calismaTuru_agyg=calismaTuru_agyg
        this.goruntuluTeyitGereklimi=goruntuluTeyitGereklimi
        this.siparisNumarasi=siparisNumarasi
        this.siparisAciklamasi=siparisAciklamasi
        this.ekipKodu=ekipKodu
        this.sicilNumaralari=sicilNumaralari
        this.teyitVerenIsim=teyitVerenIsim
        this.enjKesmeTeyitVarmi=enjKesmeTeyitVarmi
        this.enjKesmeVideoLink=enjKesmeVideoLink
        this.enjKesmeyeTeyitVeren=enjKesmeyeTeyitVeren
        this.enjKesmeAciklama=enjKesmeAciklama
        this.dokTeyitVarmi=dokTeyitVarmi
        this.dokVideoLink=dokVideoLink
        this.dokyeTeyitVeren=dokyeTeyitVeren
        this.dokAciklama=dokAciklama
        this.enjVermeTeyitVarmi=enjVermeTeyitVarmi
        this.enjVermeVideoLink=enjVermeVideoLink
        this.enjVermeyeTeyitVeren=enjVermeyeTeyitVeren
        this.enjVermeAciklama=enjVermeAciklama
        this.cikisTeyitVarmi=cikisTeyitVarmi
        this.cikisVideoLink=cikisVideoLink
        this.cikisyeTeyitVeren=cikisyeTeyitVeren
        this.cikisAciklama=cikisAciklama
        this.inisTeyitVarmi=inisTeyitVarmi
        this.inisVideoLink=inisVideoLink
        this.inisyeTeyitVeren=inisyeTeyitVeren
        this.inisAciklama=inisAciklama
        this.topraklamaTeyitVarmi=topraklamaTeyitVarmi
        this.topraklamaVideoLink=topraklamaVideoLink
        this.topraklamayeTeyitVeren=topraklamayeTeyitVeren
        this.topraklamaAciklama=topraklamaAciklama
        this.ekedTeyitVarmi=ekedTeyitVarmi
        this.ekedVideoLink=ekedVideoLink
        this.ekedyeTeyitVeren=ekedyeTeyitVeren
        this.ekedAciklama=ekedAciklama
        this.yolTeyitVarmi=yolTeyitVarmi
        this.yolVideoLink=yolVideoLink
        this.yolyeTeyitVeren=yolyeTeyitVeren
        this.yolAciklama=yolAciklama
        this.geribildirimGereklimi=geribildirimGereklimi
        this.teyitlerTammi=teyitlerTammi
        this.sanalEkipKodu=sanalEkipKodu
        this.sureciDegerlendiren="NodeJs UserName"
        this.degerlendirmeZamani=`${new Date().toLocaleDateString()}_${new Date().toLocaleTimeString()}`
        this.timeStamp=`${new Date().getTime()}`

    }
}