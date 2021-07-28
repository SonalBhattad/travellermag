 export class Magazine {
    constructor(
        public magid: number,
        public coverimage: File,
        public magname : string,
        public magprice : number,
        public magtype : string,
        public discountprice: number,
    ){}
}