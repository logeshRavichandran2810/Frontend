import React, { Component } from 'react';

class EmpDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { empid: 1, empname: 'Logesh', emppost: 'Manager', empsal: 50000, empcontact: '123-456-7890', empaddress: 'Chennai' },
                { empid: 2, empname: 'Jacki', emppost: 'Developer', empsal: 40000, empcontact: '234-567-8901', empaddress: 'Chennai' },
                { empid: 3, empname: 'Dhinesh', emppost: 'Designer', empsal: 35000, empcontact: '345-678-9012', empaddress: 'Chennai' },
                { empid: 4, empname: 'Nithish', emppost: 'HR', empsal: 45000, empcontact: '456-789-0123', empaddress: 'Chennai' },
                { empid: 5, empname: 'Ram', emppost: 'Developer', empsal: 42000, empcontact: '567-890-1234', empaddress: 'Chennai' },
                { empid: 6, empname: 'Saran', emppost: 'QA', empsal: 38000, empcontact: '678-901-2345', empaddress: 'Chennai' },
                { empid: 7, empname: 'David', emppost: 'Manager', empsal: 50000, empcontact: '789-012-3456', empaddress: 'Chennai' },
                { empid: 8, empname: 'Rocky', emppost: 'Developer', empsal: 43000, empcontact: '890-123-4567', empaddress: 'Chennai' },
                { empid: 9, empname: 'James', emppost: 'Designer', empsal: 36000, empcontact: '901-234-5678', empaddress: 'Chennai' },
                { empid: 10, empname: 'Harris', emppost: 'HR', empsal: 46000, empcontact: '012-345-6789', empaddress: 'Chennai' }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>Employee Details</h2>
                <table border="2px" style={{ width: '100%', marginTop: '20px', textAlign: 'left'}}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Post</th>
                            <th>Salary</th>
                            <th>Contact</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee) => (
                            <tr key={employee.empid}>
                                <td>{employee.empid}</td>
                                <td>{employee.empname}</td>
                                <td>{employee.emppost}</td>
                                <td>{employee.empsal}</td>
                                <td>{employee.empcontact}</td>
                                <td>{employee.empaddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmpDetails;