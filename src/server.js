import app from "./app.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv/config");

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

