export class UserModel {
    constructor(
        public username: string,
        public password: string,
        // TODO(PPavlov): Refactor name!
        public created_at: Date
    ){}
}