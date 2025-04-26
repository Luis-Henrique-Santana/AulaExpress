-- CreateTable
CREATE TABLE "User" (
    "ID_user" SERIAL NOT NULL,
    "DS_email" TEXT NOT NULL,
    "NM_name" TEXT NOT NULL,
    "DS_password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID_user")
);

-- CreateTable
CREATE TABLE "Plans" (
    "ID_plans" SERIAL NOT NULL,
    "DS_objective" TEXT NOT NULL,
    "NM_name" TEXT NOT NULL,
    "DS_content" TEXT NOT NULL,
    "DS_methodology" TEXT NOT NULL,
    "DS_teaching_resources" TEXT NOT NULL,
    "DS_assessment" TEXT NOT NULL,
    "DS_expected_time" TEXT NOT NULL,
    "ID_teacher" INTEGER NOT NULL,

    CONSTRAINT "Plans_pkey" PRIMARY KEY ("ID_plans")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_DS_email_key" ON "User"("DS_email");

-- AddForeignKey
ALTER TABLE "Plans" ADD CONSTRAINT "Plans_ID_teacher_fkey" FOREIGN KEY ("ID_teacher") REFERENCES "User"("ID_user") ON DELETE RESTRICT ON UPDATE CASCADE;
