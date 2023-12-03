import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 255 })
  name: string

  // select:true 进行查询时隐藏此列
  @Column({ select: true, comment: '注释', default: '213', nullable: true })
  password: string

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date

  @Generated('uuid')
  uuid: string

  // 枚举类
  @Column({ type: 'enum', enum: [1, 2, 3], default: 1 })
  sxc: number

  @Column('simple-array')
  names: string[]

  @Column('simple-json')
  json: { name: string; age: number }
}
