import { readFileSync } from "node:fs";

const registry = JSON.parse(readFileSync(new URL("../deployments/addresses.json", import.meta.url)));
const shape = /^0x[0-9a-fA-F]{40}$/;
let bad = 0;

for (const [chain, contracts] of Object.entries(registry)) {
  for (const [name, address] of Object.entries(contracts)) {
    if (!shape.test(address)) {
      console.error(`${chain}/${name}: malformed address ${address}`);
      bad += 1;
    }
  }
}

if (bad > 0) process.exit(1);
console.log("address registry ok");
