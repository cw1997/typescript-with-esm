// import './paths.js'

import chalk from "chalk";
import {getUuid} from "src/utils/id.js";
// import {getUuid} from "./utils/id.js";

export async function main() {
  console.log('start')
  // Combine styled and normal strings
  console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
  console.log(`${chalk.red('uuid')}:${chalk.green(getUuid())}`);
}

await main()
