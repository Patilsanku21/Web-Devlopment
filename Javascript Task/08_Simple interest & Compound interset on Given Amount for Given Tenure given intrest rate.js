function EMI()
{
    let Amount = Number(prompt("Enter Loan Amount"));

    let rate = Number(prompt("Enter a Rate"));

    let Year = Number(prompt("Enter a Tenure"));

    let Months = Year * 12;

    let r = rate/(12* 100);

    let e = (Amount * r * Math.pow(1+r),Months)

    (Math.pow(1+r,Months) -1);

    console.log("Monthly EMI ="+e.totfixed(2));


}
EMI();