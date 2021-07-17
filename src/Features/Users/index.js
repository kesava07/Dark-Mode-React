import React, { useEffect, useState } from 'react'
import { StyledCard } from '../../Components/Styled/StyledCard';
import { StyledGrid } from '../../Components/Styled/StyledGrid';

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((users) => {
                setUsers(users);
            })
    }, []);
    return (
        <StyledGrid>
            {users && users.map((user, index) => {
                return (
                    <StyledCard key={index}>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </StyledCard>
                )
            })}

        </StyledGrid>
    )
}
