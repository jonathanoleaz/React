import React from 'react';
import { Media } from 'reactstrap';


function RenderLeader(props) {
    return (
        <Media tag="li" key={props.leader.id}>
            <Media left middle>
                <Media object src={props.leader.image} alt={props.leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{props.leader.designation}</Media>
                <p>{props.leader.description}</p>
            </Media>
        </Media>
    )
}

export default RenderLeader;