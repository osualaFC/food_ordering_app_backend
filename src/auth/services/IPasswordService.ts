export default interface IPasswordService {
    hash(password: string): Promise<string>
    compare(password: string, hash: String): Promise<boolean>
  }