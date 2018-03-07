import React from "react";
import { Grid, Block, Inline } from 'reas';

const UserItem = ({ user }) => {
    return (
        <li className="card" key={user.id}>
            <img src={user.pic} alt={user.firstName} />
            <Block className="card-body">
                <Grid columns="60% 1fr" rows="30px 30px" gap="10px 20px">
                    <Grid.Item  column= '1 / span 2'>
                        <Inline>{user.firstName} {user.lastName}</Inline>
                    </Grid.Item>
                    <Grid.Item columnStart={2}>
                        <Block className='card-actions'>
                            Coucou
                        </Block>
                    </Grid.Item>
                </Grid>
            </Block>
        </li>
    );
}


export default UserItem;