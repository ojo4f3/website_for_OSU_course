import React from "react";

function StaffRow({ employee }) {
        return (
            <tr>
                <td>
                    <img src={employee.picture.thumbnail} alt="Employee portrait" />
                </td>
                <td>
                    <a href="mailto:{employee.email}"><strong>
                    {employee.name.first}&nbsp;
                    {employee.name.last}</strong></a>
                </td>
                <td>{employee.phone}</td>
                <td>
                    {employee.location.city}, 
                    {employee.location.state},
                    {employee.location.country}
                </td>
            </tr>
        );
}

export default StaffRow;