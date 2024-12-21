export const add = (a: number, b: number) => {
  return a + b;
}

export const sub = (a: number, b: number) => {
  return a - b;
}

export type t_calculation = {
  operator: '+' | '-'
  operand: number
}
