import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from './generated/i18n.generated';
import { User } from '@prisma/client';

export type ButtonsLocalNames = string;

@Injectable()
export class I18nTranslateService {
  constructor(private readonly i18nService: I18nService<I18nTranslations>) {}

  async getWelcome(user: User): Promise<string> {
    return await this.i18nService.t('main.WELCOME', {
      lang: user.language,
      args: {
        first_name: user.first_name,
        last_name: user.last_name || '',
      },
    });
  }

  async getHelp(lang: string): Promise<string> {
    return await this.i18nService.t('main.HELP', { lang });
  }

  async getChooseCommands(lang: string): Promise<string> {
    return await this.i18nService.t('main.CHOOSE_OPT', { lang });
  }

  async getChooseLanguage(lang: string): Promise<string> {
    return await this.i18nService.t('main.CHOOSE_LANG', { lang });
  }

  async getDefaultCurrency(lang: string): Promise<string> {
    return await this.i18nService.t('main.DEFAULT_CURRENCY', { lang });
  }

  async getShowCommands(lang: string): Promise<string> {
    return await this.i18nService.t('main.SHOW_COMMANDS', { lang });
  }

  async getMainCurrency(lang: string, currency: string): Promise<string> {
    return await this.i18nService.t('main.MAIN_CURRENCY', {
      lang,
      args: { currency },
    });
  }

  async getCurrencies(lang: string): Promise<string> {
    return await this.i18nService.t('main.CURRENCIES', { lang });
  }

  async getNoInfo(lang: string): Promise<string> {
    return await this.i18nService.t('main.NO_INFO', { lang });
  }

  async getNotCorrect(lang: string): Promise<string> {
    return await this.i18nService.t('main.NOT_CORRECT', { lang });
  }

  async getCanChoose(lang: string): Promise<string> {
    return await this.i18nService.t('main.CAN_CHOOSE', { lang });
  }

  async getCurrencyAbout(lang: string, main_currency: string): Promise<string> {
    return await this.i18nService.t('main.CURRENCY_SUM_ABOUT', {
      lang,
      args: { main_currency },
    });
  }

  async getCurrentValue(
    lang: string,
    sum: number,
    currency: string,
  ): Promise<string> {
    return await this.i18nService.t('main.YOUR_VALUE', {
      lang,
      args: { sum, currency },
    });
  }

  async getSumsDilemma(lang: string): Promise<string> {
    return await this.i18nService.t('main.SUMS', { lang });
  }

  async getAddedData(lang: string): Promise<string> {
    return await this.i18nService.t('main.ADDED_DATA', { lang });
  }

  async getAboutBudget(lang: string): Promise<string> {
    return await this.i18nService.t('main.budget.ABOUT', { lang });
  }

  async getBudgetNoData(lang: string): Promise<string> {
    return await this.i18nService.t('main.budget.NO_DATA', { lang });
  }

  async getBudgetShowData(lang: string): Promise<string> {
    return await this.i18nService.t('main.budget.SHOW_DATA', { lang });
  }

  async getExpensesNo(lang: string): Promise<string> {
    return await this.i18nService.t('main.expenses.NO_EXPENSES', { lang });
  }

  async getExpensesInfo(lang: string): Promise<string> {
    return await this.i18nService.t('main.expenses.EXPENSES_INFO', { lang });
  }

  async getExpensesCategories(lang: string): Promise<string> {
    return await this.i18nService.t('main.expenses.CATEGORIES', {
      lang,
    });
  }

  async getExpensesFormat(lang: string, categories: string): Promise<string> {
    return await this.i18nService.t('main.expenses.FORMAT', {
      lang,
      args: { categories },
    });
  }

  async getExpensesNoData(lang: string, currency: string): Promise<string> {
    return await this.i18nService.t('main.expenses.NO_DATA', {
      lang,
      args: { currency },
    });
  }

  async getExpensesImpossible(lang: string): Promise<string> {
    return await this.i18nService.t('main.expenses.IMPOSSIBLE', {
      lang,
    });
  }

  async startupButtons(lang: string): Promise<ButtonsLocalNames[]> {
    return [
      await this.i18nService.t('buttons.main_keyboard.BUDGET', {
        lang,
      }),
      await this.i18nService.t('buttons.main_keyboard.EXPENSES', {
        lang,
      }),
      await this.i18nService.t('buttons.main_keyboard.CURRENCIES_SUM', {
        lang,
      }),
    ];
  }

  async commandsMenuButtons(lang: string): Promise<ButtonsLocalNames[]> {
    return [
      await this.i18nService.translate('buttons.currencies.EXCHANGE', {
        lang,
      }),
      await this.i18nService.translate('buttons.currencies.EXCHANGE_SUM', {
        lang,
      }),
      await this.i18nService.translate('buttons.currencies.CLOSE', {
        lang,
      }),
    ];
  }

  async commandsExpenses(lang: string): Promise<ButtonsLocalNames[]> {
    return [
      await this.i18nService.translate('buttons.expenses.ADD_EXPENSE', {
        lang,
      }),
      await this.i18nService.translate('buttons.expenses.SHOW_EXPENSES', {
        lang,
      }),
    ];
  }

  async commandsBudget(lang: string): Promise<ButtonsLocalNames[]> {
    return [
      await this.i18nService.translate('buttons.budget.ADD_BUDGET', {
        lang,
      }),
      await this.i18nService.translate('buttons.budget.SHOW_BUDGET', {
        lang,
      }),
    ];
  }

  async commandsCurrencies(lang: string): Promise<ButtonsLocalNames[]> {
    return [
      await this.i18nService.translate('buttons.currencies_2.GET_QUOTES_ALL', {
        lang,
      }),
      await this.i18nService.translate('buttons.currencies_2.GET_QUOTES', {
        lang,
      }),
      await this.i18nService.translate('buttons.currencies_2.EXIT', {
        lang,
      }),
    ];
  }

  async commandsCurrenciesSum(lang: string): Promise<ButtonsLocalNames[]> {
    return [
      await this.i18nService.translate(
        'buttons.currencies_sum.BACK_TO_CURRENCY_CHOOSE',
        {
          lang,
        },
      ),
      await this.i18nService.translate('buttons.currencies_sum.GET_BACK', {
        lang,
      }),
      await this.i18nService.translate('buttons.currencies_sum.GET_TOP', {
        lang,
      }),
    ];
  }

  async commandsExpensesPeriods(lang: string): Promise<ButtonsLocalNames[]> {
    return [
      await this.i18nService.translate('buttons.expenses_periods.WEEK', {
        lang,
      }),
      await this.i18nService.translate('buttons.expenses_periods.TWO_WEEKS', {
        lang,
      }),
      await this.i18nService.translate('buttons.expenses_periods.MONTH', {
        lang,
      }),
      await this.i18nService.translate(
        'buttons.expenses_periods.THREE_MONTHS',
        {
          lang,
        },
      ),
      await this.i18nService.translate('buttons.expenses_periods.SIX_MONTHS', {
        lang,
      }),
      await this.i18nService.translate('buttons.expenses_periods.YEAR', {
        lang,
      }),
    ];
  }
}
