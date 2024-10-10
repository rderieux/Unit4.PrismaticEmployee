const prisma = require("../prisma");
const seed = async () => {
  const employees = [
    { name: "John Smith" },
    { name: "Jane Smith" },
    { name: "Robert DeRieux" },
    { name: "Darren Durrant" },
    { name: "David Riley" },
    { name: "Tyler Durden" },
    { name: "Robert Paulson" },
    { name: "Marla Singer" },
    { name: "Pumpkin Head" },
    { name: "Kyle McClousky" },
    { name: "John Connor" },
    { name: "Beetlejuice Beetlejuice Beetlejuice" },
  ];
  await prisma.employee.createMany({ data: employees });
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
