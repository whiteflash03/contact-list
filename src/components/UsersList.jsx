import React, { useEffect, useState } from "react";
import axios from "axios";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "../index.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=70").then((response) => {
      const data = response.data.results;
      setUsers(data);
    });

    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={350} height={100} />
            <Skeleton variant="rectangular" width={350} height={100} />
            <Skeleton variant="rectangular" width={350} height={100} />
          </Stack>
        </>
      ) : (
        <>
          {users.map((user) => (
            <div className="contact">
              <div className="img-container">
                <img src={user.picture.medium} alt={user.name.first} />
              </div>
              <div className="info-container">
                <h2>
                  {user.name.first} {user.name.last}
                </h2>
              </div>
              <Divider variant="middle" />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default UsersList;
