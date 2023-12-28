import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2>User Details</h2>
          <hr />
        </div>
        <div className="col-12">
          <div>
            <b>Name : </b>
            <span>{user.name}</span>
          </div>
          <div>
            <b>Username : </b>
            <span>{user.username}</span>
          </div>
          <div>
            <b>Email : </b>
            <span>
              <a href={"mailto:" + user.email} target="_blank">
                {user.email}
              </a>
            </span>
          </div>
          <div>
            <b>Website : </b>
            <span>{user.website}</span>
          </div>
        </div>
      </div>
    </>
  );
}
