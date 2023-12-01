import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import * as LocalSession from 'telegraf-session-local';
import { TelegrafModule } from 'nestjs-telegraf';
import { I18nTranslateModule } from '../i18n/i18n.module';
import { BotLanguage } from './scenes/bot_language';

const sessions = new LocalSession({ database: 'session.json' });

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [sessions.middleware()],
      }),
    }),
    I18nTranslateModule,
  ],
  providers: [BotService, BotLanguage],
})
export class BotModule {}
