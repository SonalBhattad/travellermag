export class User {
    paginator: any;
    sort: any;
    filter: string;

    
    constructor(
        public empid: string,
        public username : string,
        public dob : any,
        public email : string,
        public password : string,
        public gender : string,
        public profile_id : number,
        public profile_name : string
    ){}
}
