import chalk from "chalk";
import * as uuid from "uuid";

export async function main() {
  console.log('start')
  // Combine styled and normal strings
  console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
  console.log(`${chalk.red('uuid')}:${chalk.green(uuid.v4())}`);
}

await main()
