import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {

  const users: Prisma.UserCreateInput[] = [ 
    {
    NM_name: "user",
    DS_email: "user@test.com",
    DS_password:  await bcrypt.hash("password", 10),
    DS_plans: {
      create: [
        {
          DS_objective:'teste1',
          NM_name:'teste1',
          NM_class:'1anoteste',
          DS_content:'teste1',
          DS_methodology:'teste1',
          DS_teaching_resources: 'teste1',
          DS_assessment: 'teste1',
          DS_expected_time: '12',
        },
        {
          DS_objective:'teste2',
          NM_name:'teste2',
          NM_class:'1anoteste',
          DS_content:'teste2',
          DS_methodology:'teste2',
          DS_teaching_resources: 'teste2',
          DS_assessment: 'teste2',
          DS_expected_time: '13',
        },
        {
          DS_objective:'teste3',
          NM_name:'teste3',
          NM_class:'1anoteste',
          DS_content:'teste3',
          DS_methodology:'teste3',
          DS_teaching_resources: 'teste3',
          DS_assessment: 'teste3',
          DS_expected_time: '11',
        },
      ],
  },
  },
  {
    NM_name: "user2",
    DS_email: "user2@test2.com",
    DS_password:  await bcrypt.hash("password", 10),
    DS_plans: {
      create: [
        {
          DS_objective:'teste4',
          NM_name:'teste4',
          NM_class:'2anoteste',
          DS_content:'teste4',
          DS_methodology:'teste4',
          DS_teaching_resources: 'teste4',
          DS_assessment: 'teste4',
          DS_expected_time: '14',
        },
        {
          DS_objective:'teste5',
          NM_name:'teste5',
          NM_class:'2anoteste',
          DS_content:'teste5',
          DS_methodology:'teste5',
          DS_teaching_resources: 'teste5',
          DS_assessment: 'teste5',
          DS_expected_time: '15',
        },
        {
          DS_objective:'teste6',
          NM_name:'teste6',
          NM_class:'2anoteste',
          DS_content:'teste6',
          DS_methodology:'teste6',
          DS_teaching_resources: 'teste6',
          DS_assessment: 'teste6',
          DS_expected_time: '16',
        },
      ],
  },
  }
]

for(const u of users){
  await prisma.user.create({
    data: u,
  });
}

await prisma.$disconnect();
}

main()
.catch((e) => {
  throw e;
})
.finally(async () => {
  await prisma.$disconnect();
});