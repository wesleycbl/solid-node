import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public  name: string;
    public email: string;
    public password: string;

    //passar todos os atributos de users, e o id como opcional
    constructor(props: Omit<User, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id){
            this.id = uuid();
        }
    }
}