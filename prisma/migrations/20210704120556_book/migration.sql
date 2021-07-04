/*
  Warnings:

  - Added the required column `author` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numPages` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "isbn" TEXT NOT NULL,
    "abstract" TEXT,
    "numPages" INTEGER NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT,
    "price" REAL NOT NULL,
    "cover" TEXT
);
INSERT INTO "new_Book" ("id", "isbn") SELECT "id", "isbn" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE UNIQUE INDEX "Book.isbn_unique" ON "Book"("isbn");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
