abstract class ProductCategory {
    protected imgPath = "img/";
    name:string = "";
    abstract getImageUrl(): string;
}
class SodaCategory extends ProductCategory {
    name = "Soda";
    getImageUrl() {
        return this.imgPath + "SodaCan.png";
    }
}
class ChipsCategory extends ProductCategory {
    name = "Potato Chips";
    getImageUrl() {
        return this.imgPath + "Chips.png";
    }
}
class CandyCategory extends ProductCategory {
    name = "Candy";
    getImageUrl() {
        return this.imgPath + "Candy.png";
    }
}
class CandyBarCategory extends ProductCategory {
    name = "Candy bar";
    getImageUrl() {
        return this.imgPath + "CandyBar.png";
    }
}

export { ProductCategory, SodaCategory, ChipsCategory, CandyCategory as KidsCategory, CandyBarCategory }