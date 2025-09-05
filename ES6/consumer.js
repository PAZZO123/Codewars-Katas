// index.js
import { getCompany, setCompany } from "./myfile.js";
import r from "./myfile.js"

console.log(getCompany())    // MPS
setCompany('TheGym')
console.log(getCompany())    // TheGym ✅ works
console.log(r)