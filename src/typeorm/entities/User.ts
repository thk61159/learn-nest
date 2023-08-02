import { Column, Entity, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Profile } from './Profile'
import { Post } from './Post'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ unique: true })
  username: string
  @Column()
  password: string
  @Column()
  createdAt: Date
  @Column({ nullable: true })
  authStrategy: string

  

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]
}