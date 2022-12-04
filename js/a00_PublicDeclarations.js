//Global primative data types
// ////////////////////////////////////////////////////////////////////////
let countError =0
let objGottenOrderDetail
let objcompletedOrderControl
let cnfirmNoNeedPassIt=false
const indexedDBAPIMainData='APIMainDataDB'
const indexedDBAPIMainDataVersion=1
const indexedDBMainDataObject='objMainData'
const indexedDBMainDataIndexMain='SanalEkipKodlari'
const indexedDBMainDataIndex='SanalEkipKodlariIDX'
const indexedDBAPIUnmatchedLinks='APIUnmatchedLinksDB'
const indexedDBAPIUnmatchedLinksVersion=1
const indexedDBUnmathcedLinksObject='objUnmatchedLinks'
const indexedDBControlledOrders='ControlledOrdersDB'
const indexedDBControlledOrdersVersion=1
const indexedDBControlledOrdersObject='objControlledOrders'
const indexedDBControlledOrdersIndexMain='timeStamp'
const indexedDBControlledOrdersIndex='timeStampIDX'
// ////////////////////////////////////////////////////////////////////////
//send email buttons
const sendEmailBtn=document.querySelector('#sendEmailButton')
// Search inputs
const searchOperationCenter=document.querySelector('#searchOperationCenter')
const searchDate=document.querySelector('#searchDate')
const searchListButton=document.querySelector('#searchListButton')
const countOrderNumber=document.querySelector('#countOrderNumber')
const tableBody=document.querySelector('tbody')
const filteredBadgeOrderNoNumber=document.querySelector('#filteredBadgeOrderNoNumber')
const filteredBadgeOrderTypeNumber=document.querySelector('#filteredBadgeOrderTypeNumber')
const filteredBadgeOrderVoltageNumber=document.querySelector('#filteredBadgeOrderVoltageNumber')
const filteredBadgeOrderTimeNumber=document.querySelector('#filteredBadgeOrderTimeNumber')
const filteredBadgeOrderCrewNumber=document.querySelector('#filteredBadgeOrderCrewNumber')
// HTML Main sections
const orderMoreDetailHeads=document.querySelectorAll('.order-more-detail-head')
const orderMoreDetailInner=document.querySelectorAll('.order-more-detail-inner')
const siparisAciklamasiInnerBody=document.querySelector('#siparis-aciklamasi-inner>.accordion-body')
const siparisTeyitVerenlerInnerBody=document.querySelector('#siparis-teyitverenisimler-inner>.accordion-body')
const siparisIsyerikoduInnerBody=document.querySelector('#siparis-isyerikodu-inner>.accordion-body')
const orderVideoLinkSection=document.querySelector('#orderVideoLinkSection')
const orderMediaPlayerSection=document.querySelector('#orderMediaPlayerSection')
const formLinkCheckList=document.querySelectorAll('input.link-check-list')
const controlFormVideoLinkExist=document.querySelectorAll('.link-exist')
const explanationsAndWarnings=document.querySelectorAll('.explanation')
// order completed button and clean form button
const orderCompletedBtn=document.querySelector('#orderCompleted')
const cleanCOntrolFormBtn=document.querySelector('#clearMyAllControlForm')
// CheckList
const linkControlCheckBoxes=document.querySelectorAll('.link-check-list')
const enjKesmeChecked=document.querySelector('#enjKesmeChecked')
const dokChecked=document.querySelector('#dokChecked')
const enjVermeChecked=document.querySelector('#enjVermeChecked')
const cikisChecked=document.querySelector('#cikisChecked')
const inisChecked=document.querySelector('#inisChecked')
const ekedChecked=document.querySelector('#ekedChecked')
const toprakChecked=document.querySelector('#toprakChecked')
const yolChecked=document.querySelector('#yolChecked')
// Confirm is needed
const goruntuluTeyitGerekli=document.querySelector('#goruntuluTeyitGerekli')
const goruntuluTeyitGerekYok=document.querySelector('#goruntuluTeyitGerekYok')
// Confirm labels
const enjKesmeLabel=document.querySelector('.enj-kesme-label')
const dokLabel=document.querySelector('.dok-label')
const enjVermeLabel=document.querySelector('.enj-verme-label')
const cikisLabel=document.querySelector('.cikis-label')
const inisLabel=document.querySelector('.inis-label')
const topraklamaLabel=document.querySelector('.topraklama-label')
const ekedLabel=document.querySelector('.eked-label')
const yolLabel=document.querySelector('.yol-label')
// Confirm stuation
const enjKesmeTeyitBilgisi=document.querySelector('#enjKesmeTeyitBilgisi')
const dokTeyitBilgisi=document.querySelector('#dokTeyitBilgisi')
const enjVermeTeyitBilgisi=document.querySelector('#enjVermeTeyitBilgisi')
const cikisTeyitBilgisi=document.querySelector('#cikisTeyitBilgisi')
const inisTeyitBilgisi=document.querySelector('#inisTeyitBilgisi')
const topraklamaTeyitBilgisi=document.querySelector('#topraklamaTeyitBilgisi')
const ekedTeyitBilgisi=document.querySelector('#ekedTeyitBilgisi')
const yolTeyitBilgisi=document.querySelector('#yolTeyitBilgisi')
// Confirming person
const enjKesmeTeyitVerenKisi=document.querySelector('#enjKesmeTeyitVerenKisi')
const dokTeyitVerenKisi=document.querySelector('#dokTeyitVerenKisi')
const enjVermeTeyitVerenKisi=document.querySelector('#enjVermeTeyitVerenKisi')
const cikisTeyitVerenKisi=document.querySelector('#cikisTeyitVerenKisi')
const inisTeyitVerenKisi=document.querySelector('#inisTeyitVerenKisi')
const toprakTeyitVerenKisi=document.querySelector('#toprakTeyitVerenKisi')
const ekedTeyitVerenKisi=document.querySelector('#ekedTeyitVerenKisi')
const yolTeyitVerenKisi=document.querySelector('#yolTeyitVerenKisi')
// confirm link
const enjKesmeLinki=document.querySelector('#enjKesmeLinki')
const dokLinki=document.querySelector('#dokLinki')
const enjVermeLinki=document.querySelector('#enjVermeLinki')
const cikisLinki=document.querySelector('#cikisLinki')
const inisLinki=document.querySelector('#inisLinki')
const topraklamaLinki=document.querySelector('#topraklamaLinki')
const ekedLinki=document.querySelector('#ekedLinki')
const yolLinki=document.querySelector('#yolLinki')
// Control of explanation
const enjKesmeAciklama=document.querySelector('#enjKesmeAciklama')
const dokAciklama=document.querySelector('#dokAciklama')
const enjVermeAciklama=document.querySelector('#enjVermeAciklama')
const cikisAciklama=document.querySelector('#cikisAciklama')
const inisAciklama=document.querySelector('#inisAciklama')
const toprakAciklama=document.querySelector('#toprakAciklama')
const ekedAciklama=document.querySelector('#ekedAciklama')
const yolAciklama=document.querySelector('#yolAciklama')
// Last points
const geriBildirimYapilmali=document.querySelector('#geriBildirimYapilmali')
const geriBildirimGerekYok=document.querySelector('#geriBildirimGerekYok')
const teyitlerTam=document.querySelector('#teyitlerTam')
const teyitlerEksik=document.querySelector('#teyitlerEksik')

