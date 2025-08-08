import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const residents = sqliteTable('residents', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: integer(),
  title: text().notNull(),
  hometown: text(),
});
