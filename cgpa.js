let totalCredits = 0;
let totalPoints = 0;

function calculateCGPA() {
    const matCredit = 4; 
    const phyCredit = 3;
    const pythonCredit = 3; 
    const chemCredit = 3;
    const engCredit = 3;
    const TamCredit = 1; 

    const matGrade = parseFloat(document.getElementById('matGrade').value);
    const phyGrade = parseFloat(document.getElementById('phyGrade').value);
    const pythonGrade = parseFloat(document.getElementById('pythonGrade').value);
    const chemGrade = parseFloat(document.getElementById('chemGrade').value);
    const engGrade = parseFloat(document.getElementById('engGrade').value);
    const TamGrade = parseFloat(document.getElementById('TamGrade').value);

    if (isNaN(matGrade) || isNaN(phyGrade) || isNaN(pythonGrade) || isNaN(chemGrade) || isNaN(engGrade) || isNaN(TamGrade) ){
        alert('Please enter valid grades for all subjects.');
        return;
    }

    totalCredits = matCredit + phyCredit + pythonCredit + chemCredit + engCredit + TamCredit;
    totalPoints = (matCredit * matGrade) + (phyCredit * phyGrade) + (pythonCredit * pythonGrade) + (chemCredit * chemGrade) + (engCredit * engGrade) + (TamGrade * TamCredit);


    const cgpaSpan = document.getElementById('cgpa');
    const cgpa = (totalPoints / totalCredits).toFixed(2);
    cgpaSpan.textContent = cgpa;
}

document.getElementById('calculateButton').addEventListener('click', calculateCGPA);
