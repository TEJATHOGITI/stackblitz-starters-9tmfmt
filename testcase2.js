let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

const compareStudents = (student1, student2) => {
  const totalMarksDiff = student2.chemistry + student2.biology - student1.chemistry - student1.biology;
  if (totalMarksDiff !== 0) {
    return totalMarksDiff;
  }
  
  const biologyMarksDiff = student2.biology - student1.biology;
  if (biologyMarksDiff !== 0) {
    return biologyMarksDiff;
  }
  
  const dob1 = new Date(student1.dob.split("-").reverse().join("-"));
  const dob2 = new Date(student2.dob.split("-").reverse().join("-"));
  return dob1 - dob2;
};

testCase2.sort(compareStudents);

// Extracting and formatting the first names
const firstNames = testCase2.map(student => student.name.split(" ")[0].toLowerCase());
const formattedFirstNames = `[${firstNames.join(", ")}]`;

// Printing the formatted first names
console.log(formattedFirstNames);
