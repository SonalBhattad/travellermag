export class User {
    paginator: any;
    sort: any;
    filter: string;
    
    constructor(
        public empid: string,
        public username : string,
        public dob : string,
        public email : string,
        public password : string,
        public gender : string,
        public profile_id : number,
    ){}
}
