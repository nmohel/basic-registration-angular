export class User {
    constructor(
        public id: number = 0,
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public password: string = '',
        public address: Address = new Address(),
        public lucky: boolean = undefined,
      ) {}
}
class Address {
    constructor(
        public streetAddress: string ='',
        public city: string = '' ,
        public state: string = '',
        public unitNum?: number,        
    ) {}
}