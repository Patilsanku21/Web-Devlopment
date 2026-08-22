function student()
{
    let RNo = prompt("Enter Roll No");
    let Name = prompt("Enter Your Name");
    let P  = prompt("Enter Physics Marks");
    let C = prompt("Enter a Chemisrty Marks");
    let M = prompt("Enter a Maths Marks");
    let MobNo = prompt("Enter a Mobile Number");

    let Tot = P+C+M;
    let Per = Tot/3;
    let grade;

    if(Per >= 75)
    {
        grade = "A";
    }
    else if(Per >= 60)
    {
        grade = "B";
    }
    else if(Per >= 50)
    {
        grade = "C";
    }
    else if(Per >= 35)
    {
        grade = "F";
    }
    console.log("Roll No",rNo);
     console.log("Name",NM);

 console.log("Physics",P);
  console.log("Chemistry",C);
 console.log("Maths",M);
  console.log("Total",Tot);

   console.log("Percentage",Per);

 console.log("Grade",grade);

  console.log("Mobile No",MNO);

}
student();