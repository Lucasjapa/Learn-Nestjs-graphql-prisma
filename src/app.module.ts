import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UserResolver } from "./graphql/resolver/user.resolver";
import { StudentRestModule } from './modules/student-rest/student-rest.module';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            typePaths: ['./**/*.graphql'],
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault]
        }),
        StudentRestModule,
    ],
    controllers: [],
    providers: [
        UserResolver,
    ],
})
export class AppModule {
}
