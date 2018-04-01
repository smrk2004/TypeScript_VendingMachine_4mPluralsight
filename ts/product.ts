// /// <reference path="./productCategory.ts" />

import * as categories from "./productCategory"

interface Product {
    name: string
    price: number
    displayPrice: number
    category?: categories.ProductCategory
}

class Initial implements Product {
    name = "Please select a product"
    price = 0
    displayPrice = 0
}

class CocaCola implements Product {
    name = "Coca-Cola"
    price = 230
    displayPrice = 2.30
    category = new categories.SodaCategory()
}

class Fanta implements Product {
    name = "Fanta"
    price = 240
    displayPrice = 2.40
    category = new categories.SodaCategory()
}

class Sprite implements Product {
    name = "Sprite"
    price = 220
    displayPrice = 2.20
    category = new categories.SodaCategory()
}

class Peanuts implements Product {
    name = "Peanuts"
    price = 100
    displayPrice = 1.00
    category = new categories.KidsCategory()
}

class Cashews implements Product {
    name = "Cashews"
    price = 110
    displayPrice = 1.10
    category = new categories.KidsCategory()
}

class Plain implements Product {
    name = "Plain"
    price = 210
    displayPrice = 2.10
    category = new categories.ChipsCategory()
}

class Cheddar implements Product {
    name = "Cheddar"
    price = 250
    displayPrice = 2.50
    category = new categories.ChipsCategory()
}

class Mints implements Product {
    name = "Mints"
    price = 120
    displayPrice = 1.20
    category = new categories.KidsCategory()
}

class Gummies implements Product {
    name = "Gummies"
    price = 190
    displayPrice = 1.90
    category = new categories.KidsCategory()
}

class Hershey implements Product {
    name = "Hershey's"
    price = 130
    displayPrice = 1.30
    category = new categories.CandyBarCategory()
}

class MilkyWay implements Product {
    name = "Milky Way"
    price = 180
    displayPrice = 1.80
    category = new categories.CandyBarCategory()
}

export { Product, Initial, CocaCola, Fanta, Sprite, Peanuts, Cashews, Plain, Cheddar, Mints, Gummies, Hershey, MilkyWay}