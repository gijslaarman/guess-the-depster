const firstNames = ['John', 'Jane', 'Mary', 'Michael', 'Sarah', 'James', 'Emily', 'David', 'Emma', 'Daniel'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson'];

const generateRandomNames = (num: number) => {
  const names = [];
  for (let i = 0; i < num; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    names.push(`${firstName} ${lastName}`);
  }
  return names;
};

export default generateRandomNames(50)
