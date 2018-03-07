import React from "react";
import { Grid, Block, Inline } from "reas";
import { Link } from "react-router-dom";

const UserItem = ({ user, clicked }) => {
  return (
    <Link to={`/profile/${user.id}`} onClick={clicked}>
      <li className="card" key={user.id}>
        <img src={user.pic} alt={user.firstName} id={user.id} />
        <Block className="card-body">
          <Grid columns="60% 1fr" rows="30px 30px" gap="10px 20px">
            <Grid.Item column="1 / span 2">
              <Inline id={user.id}>
                {user.firstName} {user.lastName}
              </Inline>
              <Block>
                Slack name: {user.slack}
              </Block>
              <Block>
                Current project: {user.project}
              </Block>
            </Grid.Item>
          </Grid>
        </Block>
      </li>
    </Link>
  );
};

export default UserItem;
