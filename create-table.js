import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//   console.log("Tabela Apagada");
// });

sql`
  CREATE TABLE IF NOT EXISTS videos (
    id      TEXT PRIMARY KEY,
    title       TEXT NOT NULL,
    description          TEXT,
    duration           INTEGER
  );
`.then(() => {
  console.log("Tabela Criada");
});

const result =
  await sql`SELECT * FROM information_schema.tables WHERE table_schema = 'public'`;
console.log(result);
