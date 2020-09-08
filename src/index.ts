import { Command } from "@oclif/command";
import { prompt } from "inquirer";
import * as calc from "./calc";
import * as choices from "./choices";

class FuCalcTs extends Command {
  static description = "calculate fu in mahjong interactively";

  async run() {
    const userInput = await prompt([
      {
        type: "list",
        name: "men1",
        message: "1番目のメンツはどれですか？",
        choices: choices.menChoices,
      },
      {
        type: "list",
        name: "men2",
        message: "2番目のメンツはどれですか？",
        choices: choices.menChoices,
      },
      {
        type: "list",
        name: "men3",
        message: "3番目のメンツはどれですか？",
        choices: choices.menChoices,
      },
      {
        type: "list",
        name: "men4",
        message: "4番目のメンツはどれですか？",
        choices: choices.menChoices,
      },
      {
        type: "list",
        name: "atama",
        message: "アタマはどれですか？",
        choices: choices.atamaChoices,
      },
      {
        type: "list",
        name: "machi",
        message: "待ちの形はどれですか？",
        choices: choices.machiChoices,
      },
      {
        type: "list",
        name: "agari",
        message: "アガリ方はどれですか？",
        choices: choices.agariChoices,
      },
    ]);

    let fu = 20;
    fu += calc.calcMen(userInput.men1);
    fu += calc.calcMen(userInput.men2);
    fu += calc.calcMen(userInput.men3);
    fu += calc.calcMen(userInput.men4);
    fu += calc.calcAtama(userInput.atama);
    fu += calc.calcMachi(userInput.machi);
    fu += calc.calcAgari(userInput.agari);
    fu += calc.calcMenzen([
      userInput.men1,
      userInput.men2,
      userInput.men3,
      userInput.men4,
    ]);
    const ceiledFu = calc.calcCeilFu(fu);
    console.info(`\n🀄️あなたの手は ${ceiledFu} (合計:${fu}) 符です🀄️`);
  }
}

export = FuCalcTs;
