import React from 'react'
import {LogIn} from'../../components';
interface IComponentProps {
    children?: React.ReactNode;
  }
const LogInContainer = (props:IComponentProps) => {
    return(
        <div>
            <LogIn/>
        </div>
        
    )
}

export default LogInContainer