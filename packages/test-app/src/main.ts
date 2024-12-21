import {utils} from "@cw1997/test-lib"

// import * as common from "@typescript-with-esm/common"

export async function main() {
  console.log('start')
  console.log(utils.add(1, 2))

  const obj: utils.t_calculation = {
    operator: "+",
    operand: 1,
  }
  console.log(obj.operator)
}

await main()
