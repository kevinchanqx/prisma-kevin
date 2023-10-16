/*
  Warnings:

  - You are about to drop the column `userId` on the `userpreference` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `UserPreference_userId_key` ON `userpreference`;

-- AlterTable
ALTER TABLE `userpreference` DROP COLUMN `userId`;
