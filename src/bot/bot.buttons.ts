import { Markup } from 'telegraf';
import { ButtonsLocalNames } from '../i18n/i18n.service';

export class BotButtons {
  static startupButtons(button_names: ButtonsLocalNames[]): any {
    return Markup.keyboard(
      [
        Markup.button.callback(button_names[0], 'budget'),
        Markup.button.callback(button_names[1], 'expenses'),
        Markup.button.callback(button_names[2], 'currency'),
      ],
      {
        columns: 1,
      },
    );
  }

  static chooseLanguage(): any {
    return Markup.inlineKeyboard([
      Markup.button.callback('RU', 'ru'),
      Markup.button.callback('EN', 'en'),
    ]);
  }

  static showCommandsMenu(button_commands: ButtonsLocalNames[]): any {
    return Markup.inlineKeyboard(
      [
        Markup.button.callback(button_commands[0], 'currencies'),
        Markup.button.callback(button_commands[1], 'currencies_sum'),
        Markup.button.callback(button_commands[2], 'close_count'),
      ],
      {
        columns: 2,
      },
    );
  }

  static showCurrencyMenu(): any {
    return Markup.inlineKeyboard(
      [
        Markup.button.callback('AZN', 'azn'),
        Markup.button.callback('RUB', 'rub'),
        Markup.button.callback('USD', 'usd'),
        Markup.button.callback('EUR', 'eur'),
        Markup.button.callback('ILS', 'ils'),
        Markup.button.callback('AED', 'aed'),
        Markup.button.callback('TRY', 'try'),
        Markup.button.callback('GEL', 'gel'),
        Markup.button.callback('AMD', 'amd'),
        Markup.button.callback('KZT', 'kzt'),
        Markup.button.callback('GBP', 'gbp'),
        Markup.button.callback('CNY', 'cny'),
      ],
      {
        columns: 3,
      },
    );
  }

  static showExpensesMenu(button_commands: ButtonsLocalNames[]): any {
    return Markup.inlineKeyboard(
      [
        Markup.button.callback(button_commands[0], 'add_expense'),
        Markup.button.callback(button_commands[1], 'show_expenses'),
      ],
      {
        columns: 1,
      },
    );
  }

  static showBudgetOptions(button_commands: ButtonsLocalNames[]): any {
    return Markup.inlineKeyboard(
      [
        Markup.button.callback(button_commands[0], 'add_budget_sum'),
        Markup.button.callback(button_commands[1], 'show_budget'),
      ],
      {
        columns: 1,
      },
    );
  }

  static showCurrenciesOptions(button_commands: ButtonsLocalNames[]): any {
    return Markup.inlineKeyboard(
      [
        Markup.button.callback(button_commands[0], 'all_currencies'),
        Markup.button.callback(button_commands[1], 'main_currency'),
        Markup.button.callback(button_commands[2], 'close_count'),
      ],
      {
        columns: 1,
      },
    );
  }

  static showCurrenciesSumOptions(button_commands: ButtonsLocalNames[]): any {
    return Markup.inlineKeyboard([
      Markup.button.callback(button_commands[0], 'another_currency'),
      Markup.button.callback(button_commands[1], 'currencies'),
      Markup.button.callback(button_commands[2], 'close_count'),
    ]);
  }

  static showExpensesPeriod(button_commands: ButtonsLocalNames[]): any {
    return Markup.inlineKeyboard(
      [
        Markup.button.callback(button_commands[0], 'w'),
        Markup.button.callback(button_commands[1], 'w2'),
        Markup.button.callback(button_commands[2], 'm'),
        Markup.button.callback(button_commands[3], 'm3'),
        Markup.button.callback(button_commands[4], 'm6'),
        Markup.button.callback(button_commands[5], 'y'),
      ],
      {
        columns: 2,
      },
    );
  }
}
