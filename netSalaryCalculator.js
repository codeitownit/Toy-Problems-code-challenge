//net salary calculator

const readline = require('readline');
//creating the user interface for the input and output
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//asking questions from the user and reading their reply
interface.question('Enter your basic salary: ', (userInput) => {
    const basicSalary = parseInt(userInput,10);
interface.question('Enter your benefits: ', (userInput1) => {
    const benefits =parseInt(userInput1, 10);
    grossSalary = basicSalary + benefits;
    paye(basicSalary, benefits);
    nssf(basicSalary, benefits);
    nhif(basicSalary, benefits);
    const salaryDetails = netSalary(basicSalary, benefits);
    //logging the values of the functions
    console.log("Gross Salary:", salaryDetails.grossSalary);
    console.log("Payee (Tax):", salaryDetails.payeAmount);
    console.log("NHIF Deductions:", salaryDetails.nhifAmount);
    console.log("NSSF Deductions:", salaryDetails.nssfAmount);
    console.log("Total Deductions:", salaryDetails.deductions);
    console.log("Net Salary:", salaryDetails.netSalary);    
    interface.close();
}) 
})

//function for calculating payee based on gross salary
function paye(basicSalary, benefits){
    grossSalary = basicSalary + benefits;

    if (grossSalary<=24000) {
        payeAmount=grossSalary*0.1;

    } else if (grossSalary>24000&&grossSalary<=32,333) {
        payeAmount=grossSalary*0.25;
    }
    else if (grossSalary>32,333&&grossSalary<=500000) {
        payeAmount=grossSalary*0.3;
    }else if (grossSalary>500000&&grossSalary<=800000){
        payeAmount=grossSalary*0.325;
    }else{
        payeAmount=grossSalary*0.35;
    }
    return payeAmount;
}
//function for calculating nssf based on gross salary
function nssf(basicSalary, benefits){
    grossSalary = basicSalary + benefits;
    if (grossSalary<=6000) {
        nssfAmount = grossSalary*0.06;
    } else if (grossSalary>6000&&grossSalary<18000){
        remainingAmount=grossSalary-6000;
        const tier1 =6000 *0.06;
        const tier2 = remainingAmount*0.06;
        nssfAmount = tier1+tier2;
        
    }else{
        const tier1 = 6000 *0.06;
        const tier2 = 18000*0.06;
        nssfAmount = tier1+tier2;
    }
    return nssfAmount;
}
//function for calculating nhif based on gross salary
function nhif(grossSalary){ 
    let nhifAmount = 0;
    if(grossSalary<=5999){
        nhifAmount= 150;
    }else if(grossSalary>5999&&grossSalary<=7,999){
        nhifAmount= 300;
    }else if(grossSalary>7,999&&grossSalary<=11,999){
        nhifAmount= 400;
    }else if(grossSalary>11,999&&grossSalary<=14,999){
        nhifAmount= 500;
    }else if(grossSalary>14,999&&grossSalary<=19,999){
        nhifAmount= 600;
    }else if(grossSalary>19,999&&grossSalary<=24,999){
        nhifAmount= 750;
    }else if(grossSalary>24,999&&grossSalary<=29,999){
        nhifAmount= 850;
    }else if(grossSalary>29,999&&grossSalary<=34,999){
        nhifAmount= 900;
    }else if(grossSalary>34,999&&grossSalary<=39,999){
        nhifAmount= 950;
    }else if(grossSalary>39,999&&grossSalary<=44,999){
         nhifAmount= 1000;
    }else if(grossSalary>44,999&&grossSalary<=49,999){
        nhifAmount= 1100;
    }else if(grossSalary>49,999&&grossSalary<=59,999){
        nhifAmount= 1200;
    }else if(grossSalary>59,999&&grossSalary<=69,999){
        nhifAmount= 1300;
    }else if(grossSalary>69,999&&grossSalary<=79,999){
        nhifAmount=1400;
    }else if(grossSalary>79,999&&grossSalary<=89,999){
        nhifAmount= 1500;
    }else if(grossSalary>89,999&&grossSalary<=99,999){
        nhifAmount= 1600;
    }else{
        nhifAmount=1700;
    }
    return nhifAmount;
}
//function for calculating net salary based on gross salary
function netSalary(basicSalary, benefits){
    grossSalary = basicSalary + benefits;


    const payeAmount = paye(basicSalary, benefits);
    const nhifAmount = nhif(basicSalary, benefits);
    const nssfAmount = nssf(basicSalary, benefits);

    const deductions = payeAmount + nhifAmount + nssfAmount;
    const netSalary = grossSalary - deductions;

    return {
        grossSalary,
        payeAmount,
        nhifAmount,
        nssfAmount,
        deductions,
        netSalary,
    };

 
}
