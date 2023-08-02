import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    expression: `
      SELECT u.id AS id, po.title AS title, pr.age AS age
      FROM users u
      LEFT JOIN user_posts po ON po.userId = u.id
      LEFT JOIN user_profiles pr ON pr.id = u.profileId
    `,
})
export class Table {
    @ViewColumn()
    id: number

    @ViewColumn()
    title: string

    @ViewColumn()
    age: number
}