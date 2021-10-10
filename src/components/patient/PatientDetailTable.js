import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import ApiCallsService from "../../services/apiCallService";

const pageSize = 6;
const PatientDetails = () => {
  const [details, setdetails] = useState();
  const [paginateddetails, setpaginateddetails] = useState();
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    ApiCallsService.getPatientData().then((res) => {
      console.log(res.data);
      setdetails(res.data);
      setpaginateddetails(_(res.data).slice(0).take(pageSize).value());
    });
  }, []);

  const pageCount = details ? Math.ceil(details.length / pageSize) : 0;
  //   if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(details).slice(startIndex).take(pageSize).value();
    setpaginateddetails(paginatedPost);
  };
  return (
    <div>
      {/* {console.log(paginateddetails)} */}
      {!paginateddetails ? (
        "No Data Found"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>UserName</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginateddetails.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.userName}</td>
                <td>{post.role}</td>
                <td>
                  <p
                    className={
                      post.completed
                        ? "btn btn-primary btn-sm "
                        : "btn btn-warning btn-sm"
                    }
                  >
                    {post.completed ? "Completed" : "Update"}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default PatientDetails;
