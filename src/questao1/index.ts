class Usuario {
    
    email: string;
    senha: string;
    
    constructor(email: string, senha: string){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(): boolean{
        return false;
    }
}

class Admin extends Usuario{
    
    admin: boolean;

    constructor(email: string, senha: string, ehAdmin: boolean){
        super(email, senha);
        this.admin = ehAdmin;
    }

    isAdmin(): boolean{
        return this.admin
    }
}

const user = new Usuario('ricart.medeiros@academico.ifpb.edu.br', 'mudar123')
const admin = new Admin('ricart.medeiros@academico.ifpb.edu.br', 'mudar123', true)
console.log(user.isAdmin())
console.log(admin.isAdmin())