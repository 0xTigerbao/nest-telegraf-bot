import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BotModule } from './bot/bot.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { I18nTranslateModule } from './i18n/i18n.module';
import { loggingMiddleware, PrismaModule } from './prisma';

import appConfig from './configs/app.config';
import jwtConfig from './configs/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, jwtConfig],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware()],
      },
    }),
    BotModule,
    CurrenciesModule,
    I18nTranslateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
