// import './paths.js'

import chalk from "chalk";
import {getUuid} from "src/utils/id.js";
// import {getUuid} from "./utils/id.js";
import {utils} from "@typescript-with-esm/common"
// import * as common from "@typescript-with-esm/common"

export async function main() {
  console.log('start')
  // console.log(common.utils.add(1, 2))
  console.log(utils.add(1, 2))
  // Combine styled and normal strings
  console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
  console.log(`${chalk.red('uuid')}:${chalk.green(getUuid())}`);
}

await main()
