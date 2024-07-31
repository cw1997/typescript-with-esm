import * as uuid from "uuid";

export function getUuid(): string {
  return uuid.v4();
}
