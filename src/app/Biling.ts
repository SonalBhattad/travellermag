export class Biling {
    constructor(
        public firstname: string,
        public lastname : string,
        public email : string,
        public phoneno : number,
        public address : string,
        public country : string,
        public state : string,
        public zip: number
    ){}
}
export class Card {
   constructor(
       public cardnumber: number,
       public cardname: string,
       public expdate: string,
       public cvv: number
   ){}
}