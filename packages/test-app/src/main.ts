import {utils} from "@cw1997/test-package"

// import * as common from "@typescript-with-esm/common"

export async function main() {
  console.log('start')
  console.log(utils.add(1, 2))
}

await main()
