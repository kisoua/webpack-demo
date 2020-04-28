import { keys, shuffle } from "lodash-es";
import { sample } from "../common";

export function logData(data) {
  return sample(shuffle(keys(data)));
}
