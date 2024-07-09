export class LoginDto {
    idUtilisateur:number
    password:string
}
export class ChangePasswordDto {
    
    password:string
    newPassword:string
    newPasswordConfirm:string
}
