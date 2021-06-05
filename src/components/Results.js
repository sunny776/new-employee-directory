import React from "react";

function Results(props) {
  return (
    <table className="table table-striped table-sortable text-center">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Full Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">City, State</th>
          <th scope="col">Home Phone</th>
          <th scope="col">Cell Phone</th>
          <th scope="col">Employee Id</th>
        </tr>
      </thead>

      <tbody>
        {props.results.map((result) => (
          <tr key={result.id}>
            {/* <div className="firstcolume col-2"></div> */}

            <td>
              <img alt="" src={result.picture} />
            </td>

            <td>
              {result.firstName} {result.lastName}
            </td>

            <td> {result.userName} </td>

            <td> {result.email} </td>

            <td>
              {result.city} {result.state}
            </td>

            <td> {result.homePhone} </td>

            <td> {result.cellPhone} </td>

            <td> {result.id} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
