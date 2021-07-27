export class Magzine {
    paginator: any;
    sort: any;
    filter: string;
 
    public mag_id: number;
    public coverimage: File;
    public mag_name : string;
    public mag_price : number;
    public mag_type : string;
    public active_offre: string;
    public discount_price: number;

    constructor(){}
}