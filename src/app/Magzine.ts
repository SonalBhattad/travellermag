export class Magzine {
    paginator: any;
    sort: any;
    filter: string;

    
    constructor(
        public mag_id : string,
        public mag_name : string,
        public mag_price : number,
        public mag_type : string,
    ){}
}