import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { StyledCard } from "../../Components/Styled/StyledCard";
import { StyledGrid } from "../../Components/Styled/StyledGrid";

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors?.themeBg};
  margin-bottom: "16px";
  text-align: center;
`;

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <Fragment>
      <StyledTitle data-testid="title">Users List</StyledTitle>
      {loading && <span data-testid="loader">Loading Users...</span>}
      <StyledGrid>
        {users &&
          users.map((user, index) => {
            return (
              <StyledCard key={index}>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </StyledCard>
            );
          })}
      </StyledGrid>
    </Fragment>
  );
}
