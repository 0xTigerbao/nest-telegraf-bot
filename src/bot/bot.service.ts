import {
  Command,
  Ctx,
  Hears,
  Help,
  InjectBot,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { BotButtons } from './bot.buttons';
import { I18nTranslateService } from '../i18n/i18n.service';

const CURRENCIES_COMMANDS = [
  'Получение или расчет суммы курсов валют',
  'Receiving or calculating the amount of exchange rates',
];

const EXPENSES_COMMANDS = ['Учёт расходов', 'Expense accounting'];

const BUDGET_COMMANDS = ['Ведение бюджета', 'Budget management'];

@Update()
export class BotService {
  private readonly _i18n: I18nTranslateService;

  constructor(
    @InjectBot() private bot: Telegraf<Context>,
    i18n: I18nTranslateService,
  ) {
    this._i18n = i18n;
  }

  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.replyWithHTML(
      await this._i18n.getWelcome(ctx.from.id),
      BotButtons.startupButtons(
        await this._i18n.startupButtons(ctx['session']['language']),
      ),
    );
  }

  @Help()
  async help(@Ctx() ctx: Context) {
    await ctx.replyWithHTML(
      await this._i18n.getHelp(ctx['session']['language']),
    );
  }

  @Command('commands')
  async getBotCommands(@Ctx() ctx: Context) {
    await ctx.replyWithHTML(
      await this._i18n.getChooseCommands(ctx['session']['language']),
      BotButtons.startupButtons(
        await this._i18n.startupButtons(ctx['session']['language']),
      ),
    );
  }

  @Command('lang')
  async getBotLanguage(@Ctx() ctx: Context) {
    await ctx.deleteMessage();
    await ctx['scene'].enter('lang');
    await ctx.reply(
      await this._i18n.getChooseLanguage(ctx['session']['language']),
      BotButtons.chooseLanguage(),
    );
  }
  @Hears([...CURRENCIES_COMMANDS])
  async getCommand(@Ctx() ctx: Context) {
    await ctx.deleteMessage();
    await ctx['scene'].enter('def_currency');
    await ctx.reply(
      await this._i18n.getDefaultCurrency(ctx['session']['language']),
      BotButtons.showCurrencyMenu(),
    );
  }

  @Hears([...EXPENSES_COMMANDS])
  async getCostsCommands(@Ctx() ctx: Context) {
    await ctx.deleteMessage();
    await ctx['scene'].enter('expenses');
    await ctx.reply(
      await this._i18n.getShowCommands(ctx['session']['language']),
      BotButtons.showExpensesMenu(
        await this._i18n.commandsExpenses(ctx['session']['language']),
      ),
    );
  }

  @Hears([...BUDGET_COMMANDS])
  async getCommands(@Ctx() ctx: Context) {
    await ctx.deleteMessage();
    await ctx['scene'].enter('budget');
    await ctx.reply(
      await this._i18n.getShowCommands(ctx['session']['language']),
      BotButtons.showBudgetOptions(
        await this._i18n.commandsBudget(ctx['session']['language']),
      ),
    );
  }
}
