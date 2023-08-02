import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { User } from './User'

@Entity({ name: 'user_profiles' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  firstname: string
  @Column()
  lastname: string
  @Column()
  age: number
  @Column()
  dob: string

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}