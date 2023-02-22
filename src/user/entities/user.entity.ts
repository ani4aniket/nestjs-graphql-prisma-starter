import {
  ObjectType,
  Field,
  Int,
  GraphQLISODateTime,
  registerEnumType,
} from '@nestjs/graphql';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Role, { nullable: false })
  role: Role;
}
