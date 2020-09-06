console.log('alcohol delivery :')
var zibert = {
    abv: 4.9,
    l: 2.5,
    isBeer: true,
    price: 40
}
var threeAxes = {
    abv: 17.5,
    l: 1,
    isBeer: false,
    price: 49
}
var revo = {
    abv: 8.5,
    l: 0.5,
    isBeer: false,
    price: 35
}
var teteriv = {
    abv: 8,
    l: 0.5,
    isBeer: true,
    price: 22
}
buyAll = zibert.l + threeAxes.l + revo.l + teteriv.l
averagePrice = (zibert.price + threeAxes.price + revo.price + teteriv.price) / 4
var light = { // создаем переменную, для отбора по крепости
    abv: 5
}

console.log('zibert')
console.log(zibert)
console.log('threeAxes')
console.log(threeAxes)
console.log('revo')
console.log(revo)
console.log('teteriv')
console.log(teteriv)

numOfL = 'Number of liters for tasting is' + ' ' + buyAll + 'l'
console.log(numOfL)
avp = 'Average beer price is' + ' ' + averagePrice + ' ' + 'UAH'
console.log(avp)
lightRevo = revo.abv < light.abv
lightAlcoholRevo = 'Is Revo light ?' + ' ' + lightRevo
console.log(lightAlcoholRevo)
lightZibert = zibert.abv < light.abv
lightAlcoholZibert = 'Is Zibert light ?' + ' ' + lightZibert
console.log(lightAlcoholZibert)
lightThreeAxes = threeAxes.abv < light.abv
lightAlcoholThreeAxes = 'Is ThreeAxes light ?' + ' ' + lightThreeAxes
console.log(lightAlcoholThreeAxes)
lightTeteriv = teteriv.abv < light.abv
lightAlcoholTeteriv = 'Is Teteriv light ?' + ' ' + lightTeteriv
console.log(lightAlcoholTeteriv)
extr = teteriv.price > revo.price
moreExpensive_tr = 'Is Teteriv more expensive than Revo ?' + ' ' + extr
console.log(moreExpensive_tr)
exthr = threeAxes.price > revo.price
moreExpensive_thr = 'Is ThreeAxes more expensive than Revo ?' + ' ' + exthr
console.log(moreExpensive_thr)
leftZibert = zibert.l*2 % 4
leftText = 'My three friends and I like to take maximum form this life. We bought 2 bottles of Zibert. How much beer will left tomorrow ?' + ' ' + leftZibert + 'l'
console.log(leftText)
teteriv.price += 5
newPrice = 'New Teteriv price after the elections is' + ' ' + teteriv.price + ' ' + 'UAH'
console.log(newPrice)
wantTeteriv = 'Girls say that they do not want beer. They do not like Teteriv ?' + ' ' + teteriv.isBeer
console.log(wantTeteriv)
wantThreeAxes = 'Girls say that they do not want beer. They do not like Three Axes ?' + ' ' + threeAxes.isBeer
console.log(wantThreeAxes)