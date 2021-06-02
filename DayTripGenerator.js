let cities = ["San Diego", "Flordia Keys", "Virginia Beach", "San Padre Island"];
let transportation = ["Car", "Bus", "Bike", "Tram"];
let resturant = ["Salt Grass Steack House", "Olive Garden", "Texas Road House", "Blaze Pizza"];
let entertainment = ["Surfing", "Scuba Diving", "Fishing", "Snorkling"];
function generateRandom(array) {
    let randomNumber = Math.floor(Math.random() * array.length)
    let myRandomGenerator = array[randomNumber]
    return myRandomGenerator
}
let rand_city = generateRandom(cities)
let rand_tran = generateRandom(transportation)
let rand_rest = generateRandom(resturant)
let rand_ent = generateRandom(entertainment)
console.log(rand_city)
console.log(rand_tran)
console.log(rand_rest)
console.log(rand_ent)