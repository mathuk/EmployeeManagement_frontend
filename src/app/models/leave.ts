export class Leave{
    constructor(
        public reason:string,
        public dates:string[],
        public requestedBy:Employee,
        public checked:boolean
    ){}
}