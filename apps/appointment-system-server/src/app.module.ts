import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { CategoryModule } from "./category/category.module";
import { ServiceModule } from "./service/service.module";
import { AccountModule } from "./account/account.module";
import { ClientModule } from "./client/client.module";
import { RatingModule } from "./rating/rating.module";
import { RatingResultModule } from "./ratingResult/ratingResult.module";
import { RequestModule } from "./request/request.module";
import { OwnerModule } from "./owner/owner.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserModule,
    CategoryModule,
    ServiceModule,
    AccountModule,
    ClientModule,
    RatingModule,
    RatingResultModule,
    RequestModule,
    OwnerModule,
    AppointmentModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
