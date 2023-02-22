
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export class CreateUserInput {
    email: string;
    name?: Nullable<string>;
    role: Role;
}

export class UpdateUserInput {
    email?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    id: number;
}

export class User {
    id: number;
    createdAt: DateTime;
    email: string;
    name?: Nullable<string>;
    role: Role;
}

export abstract class IQuery {
    abstract user(id: number): User | Promise<User>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
