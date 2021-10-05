import React from 'react'
import {Users} from'../../components';
interface IComponentProps {
    children?: React.ReactNode;
  }
const UsersContainer = (props:IComponentProps) => {
    return(
        <div>
            <Users/>
        </div>
        
    )
}

export default UsersContainer