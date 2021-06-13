export default class User{
    constructor(
        public readonly id: String,
        public readonly name: String,
        public readonly email: String,
        public readonly password: String,
        public readonly type: String,
        ){}
}