import React, { useEffect, useState } from "react";

import { BiSort } from "react-icons/bi";

function TableComponent({ data, tableConfig }) {
  let [users, setUsers] = useState(data);
  let [order, setOrder] = useState(false);

  const sendMail = (value) => {
    window.location = `mailto:${value}`;
  };

  const handleSort = (property) => {
    setOrder(!order);

    setUsers(
      [...users].sort((a, b) => {
        let x;
        let y;
        if (property === "name") {
          x = a.person[property].toLowerCase();
          y = b.person[property].toLowerCase();
        } else if(property==="joiningDate"){
          const xDate=a[property].split("/").reverse().join("-")
          const yDate=b[property].split("/").reverse().join("-")
          x = new Date(xDate).getTime() ;
          y = new Date(yDate).getTime();
          
        }
        else {
          x = a[property].toLowerCase();
          y = b[property].toLowerCase();
        }

        return order && x > y
          ? 1
          : order && x < y
          ? -1
          : !order && x > y
          ? -1
          : 1;
      })
    );
  };

  // useEffect(() => {
  //   setUsers(data);
  // }, []);

  return (
    <div className="table-component-container">
      <table >
    
        <tr>
          {tableConfig.name.show && (
            <th>
              Name{" "}
              {tableConfig.name.sort && (
                <span
                  className="icon-container"
                  onClick={() => handleSort("name")}
                >
                  <BiSort className="sort-icon"/>
                </span>
              )}
            </th>
          )}
          {tableConfig.city.show && (
            <th>
              City{" "}
              {tableConfig.city.sort && (
                <span
                  className="icon-container"
                  onClick={() => handleSort("city")}
                >
                  <BiSort className="sort-icon"/>
                </span>
              )}
            </th>
          )}
          {tableConfig.email.show && (
            <th className="email-column">
              Email Address{" "}
              {tableConfig.email.sort && (
                <span
                  className="icon-container"
                  onClick={() => handleSort("email")}
                >
                  <BiSort className="sort-icon"/>
                </span>
              )}
            </th>
          )}
          {tableConfig.joiningDate.show && (
            <th>
              Joining Date{" "}
              {tableConfig.joiningDate.sort && (
                <span
                  className="icon-container"
                  onClick={() => handleSort("joiningDate")}
                >
                  <BiSort className="sort-icon"/>
                </span>
              )}
            </th>
          )}

          <th>
            Role{" "}
            {tableConfig.role.sort && (
              <span
                className="icon-container"
                onClick={() => handleSort("role")}
              >
                <BiSort className="sort-icon"/>
              </span>
            )}
          </th>
        </tr>
        {users.map((d, i) => (
          <tr>
            {tableConfig.name.show && (
              <td>
                {" "}
                <div className="profile-container">
                  <span className="profile">
                    <img src="/profile.jpg" alt="" width="100%" />
                  </span>
                  {d.person.name}{" "}
                </div>{" "}
              </td>
            )}
            {tableConfig.city.show && <td>{d.city}</td>}
            {tableConfig.email.show && (
              <td>
                <span
                  className="mail-address"
                  onClick={() => sendMail(d.email)}
                >
                  {d.email}
                </span>
              </td>
            )}
            {tableConfig.joiningDate.show && <td>{d.joiningDate}</td>}

            <td>{d.role}</td>
          </tr>
        ))}
    
      </table>
    </div>
  );
}

export default TableComponent;
