import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn(
        {
            type: 'bigint',
            name: 'id'
        }
    )
    id: number;

    @Column(
        {
            nullable: true
        }
    )
    username: string;

    @Column(
        {
            nullable: false,
            default: ''
        }
    )
    email: string;

    @Column()
    password: string;


}