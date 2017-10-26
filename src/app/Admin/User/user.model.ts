export class UserModel {
    constructor(
        public username: string,
        public password: string,
        public passwordConfirm: string,
        public passwordMatch: boolean,
        public createdAt: Date
    ){}
}