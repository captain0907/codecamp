import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Board2 extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}

export default Board2;
