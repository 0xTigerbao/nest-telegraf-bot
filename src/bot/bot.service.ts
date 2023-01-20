import { Injectable } from '@nestjs/common';
import {
  Action,
  Command,
  Ctx,
  Help,
  InjectBot,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { Buttons } from './classes/buttons';
import { PostgresService } from '../postgres/postgres.service';
import { Currencies } from '../postgres/entities/currencies';

@Injectable()
@Update()
export class BotService {
  private _postgres: PostgresService;
  constructor(
    @InjectBot() private bot: Telegraf<Context>,
    postgres: PostgresService,
  ) {
    this._postgres = postgres;
  }

  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply('bot', Buttons.createButtons());
  }
  @Help()
  async help(@Ctx() ctx: Context) {
    await ctx.replyWithHTML(
      '<b>Добро пожаловать в справку бота подсчета расходов</b> \n' +
        '1. <i>/commands</i> Получение списка команд бота \n' +
        '2. ..... \n' +
        '3. ..... \n',
    );
  }
  @Command('commands')
  async getCommands(@Ctx() ctx: Context) {
    await ctx.reply('Вот основные команды:', Buttons.showCommandsMenu());
  }
  @Command('hello')
  async hey(@Ctx() ctx: Context) {
    await ctx.reply('Добро пожаловать в бот по расчету расходов');
  }
  /*  @Hears('currencies')
  async hears(@Ctx() ctx: Context) {
    await ctx.reply('вот курсы');
  }
   @On('callback_query')
  async on(@Ctx() ctx: Context) {
    await ctx.reply('👍');
  }*/

  @Action('currencies')
  async getCurrencies(@Ctx() ctx: Context) {
    await ctx.deleteMessage();
    await ctx.reply('Вот актуальные курсы:');
    return await this._postgres
      .fetchData()
      .then(async (value: Currencies[]) => {
        value.map(async (val: Currencies) => {
          return await ctx.reply(`Валютная пара: ${val.couple}
        Курс: ${val.price}
        `);
        });
      });
  }

  @Action('currencies_sum')
  async getCurrenciesSum(@Ctx() ctx: Context) {
    await ctx.deleteMessage();
    await ctx.reply('Введите текущюю валюту:', Buttons.showValuteMenu());
    // await ctx.sendMessage('');
  }

  /* @On('text')
  async getEcho(@Ctx() ctx: Context) {
    await ctx.reply(`${ctx.message['text']}`);
  }*/
}
