// Kosullarla Calismak Bolum Sonu Egzersizi:
/*
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49
2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

const SMILE =``
const FROWN =``

if (examGrade >= 0 && examGrade <= 100) {
    // tum if yapilari buraya gelsin
    textInfo = SMILE
    info.classList.add('text-primary')
    if (examGrade >= 90) {
    textInfo += " AA"
    } } else if (exam Grade >= 85) {
    textInfo += " BA"
    } } else if (exam Grade >= 80) {
    textInfo += " BB"
    } } else if (exam Grade >= 75) {
    textInfo += " CB"
    } } else if (exam Grade >= 70) {
    textInfo += " CC"
    } } else if (exam Grade >= 65) {
    texinfo += " DC"
    } } else if (exam Grade >= 60) {
    textInfo += " DD"
    } } else if (exam Grade >= 50) {
    textInfo += " FD"
    } } else if (exam Grade < 50) {
    textInfo = ${FROWN} FF
    info.classList.remove('text-primary')
    info.classList.add('text-danger')
    else {