-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "description" TEXT;
