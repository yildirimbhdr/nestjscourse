import { Exclude } from "class-transformer";


//Serialized user diye ayrı bir class oluşturuyoruz çünkü yeni bir class türetmeden o classdan
//Bazı verileri gizlemeliyiz
export interface User {
    id: number;
    username: string;
    password: string;
}

export class SerializedUser {

    id: number;
    username: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }
}