var students = [{
    name:'David',
    grade: 80
  }, {
    name: 'Vinoth',
    grade: 77
  }, {
    name: 'Divya', 
    grade: 88
  }, {
    name: 'Ishitha',
    grade: 95,
  }, {
    name: 'Thomas', 
    grade:68
  }];
  let sum =0
  
  for (let student of students){
    sum +=student.grade
    
  }
  let average = sum/5
  if (average>90)
    console.log("A")
  else if (average>80)
    console.log("B")
  else if (average>80)
    console.log("C")
  else if (average>70)
    console.log("D")
  else if (average>60)
    console.log("F")