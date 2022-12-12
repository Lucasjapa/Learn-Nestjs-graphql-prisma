import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {CreateOneUsersArgs} from "../args/create-one-users.args";
import {UserObject} from "../objects/user.object";

@Resolver()
export class UserResolver {
    @Query(() => String)
    users() {
        return 'hello world'
    }

    @Mutation(() => UserObject)
    createOnUser(@Args() args: CreateOneUsersArgs) {
        console.log(args);
        return args.data;
    }
}