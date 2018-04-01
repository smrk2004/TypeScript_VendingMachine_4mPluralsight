/*
namespace Money {
    export namespace Coins { // nested namespace!
*/
        export abstract class Coin {
            //value: number; // not necessary if we use 'public' access modifier in constructor below!
            constructor(public value: number) {
                this.value = value;
            }
            get Value() {
                return this.value;
            }

            imagePath:string = "img/"; // can't be accessed outside the namespace
            abstract getImageUrl(): string;
        }

        export class Quarter extends Coin {

            constructor() { super(25); };

            imageName = "Quarter";
            getImageUrl(): string {
                return this.imagePath + this.imageName + ".png"; // relative path
            }
        }
        export class Dime extends Coin {

            constructor() { super(10); };

            imageName = "Dime";
            getImageUrl(): string {
                return this.imagePath + this.imageName + ".png"; // relative path
            }
        }
        export class Half extends Coin {

            constructor() { super(50); };

            imageName = "Half";
            getImageUrl(): string {
                return this.imagePath + this.imageName + ".png"; // relative path
            }
        }
        export class Dollar extends Coin {

            constructor() { super(100); };

            imageName = "Dollar";
            getImageUrl(): string {
                return this.imagePath + this.imageName + ".png"; // relative path
            }
        }
/*
    }
}
*/