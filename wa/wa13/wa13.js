

const companyJSON = 'company.json';

let total_salary = 0;
async function fetchCompany(companyJSON) {
    try {
        let response = await fetch(companyJSON);
        let data = await response.json();
        if (!response.ok) {
            throw Error(response.statusText);
        }

        // Problem 1

        let problem1Data = JSON.parse(JSON.stringify(data));
        console.log("Problem 1");
        console.log(problem1Data);

        // Problem 2
        data.company = {
            name: "techstars",
            site: "www.techstars.site",
            employees: data.employees
        };
        delete data.employees;
        let problem2Data = JSON.parse(JSON.stringify(data));
        console.log("Problem 2");
        console.log(problem2Data);
        // Problem 3
        let newEmployee = { "first_name": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise_eligible": false };
        data.company.employees.push(newEmployee);
        let problem3Data = JSON.parse(JSON.stringify(data));
        console.log("Problem 3");
        console.log(problem3Data);

        // Problem 4
        console.log("Problem 4");
        getTotalSalary(data);
        
        // Problem 5
        isRaiseEligible(data);
        let problem5Data = JSON.parse(JSON.stringify(data));
        console.log("Problem 5")
        console.log(problem5Data);

        // Problem 6
        console.log("Problem 6");
        isWorkingFromHome(data);
        let problem6Data = JSON.parse(JSON.stringify(data));
        console.log(problem6Data);
    }
    catch (error) {
        console.error('Error fetching json data:', error);
    }
}
fetchCompany(companyJSON);



// Problem 4
function getTotalSalary(data) {
    const employee_length = data.company.employees.length;
    for (let i = 0; i < employee_length; i++) {
        
        total_salary += data.company.employees[i].salary;   
        //console.log(data.employees[i].salary);
    }
    console.log("Total Salary = " + total_salary);
}

// Problem 5
function isRaiseEligible(data) {
    const employee_length = data.company.employees.length;
    for(let i = 0; i < employee_length; i++) {
        if(data.company.employees[i].raise_eligible == true) {
            data.company.employees[i].salary = data.company.employees[i].salary * 1.1;
            data.company.employees[i].raise_eligible = false;
        }
    }
    
}

// Problem 6
function isWorkingFromHome(data) {
    const employee_length = data.company.employees.length;
    for(let i = 0; i < employee_length; i++) {
        if(data.company.employees[i].first_name == "Anna" || data.company.employees[i].first_name == "Sam") {
            data.company.employees[i] = {
                first_name: data.company.employees[i].first_name,
                department: data.company.employees[i].department,
                designation: data.company.employees[i].designation,
                salary: data.company.employees[i].salary,
                raise_eligible: data.company.employees[i].raise_eligible,
                wfh: true
            };
        }
        else {
            data.company.employees[i] = {
                first_name: data.company.employees[i].first_name,
                department: data.company.employees[i].department,
                designation: data.company.employees[i].designation,
                salary: data.company.employees[i].salary,
                raise_eligible: data.company.employees[i].raise_eligible,
                wfh: false
            };
        }
    }
}



