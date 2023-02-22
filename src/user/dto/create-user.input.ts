import { Role } from './../entities/user.entity';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Role, { nullable: false })
  role: Role;
}
