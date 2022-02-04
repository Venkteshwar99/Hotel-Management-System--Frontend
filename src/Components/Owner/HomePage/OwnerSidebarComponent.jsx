import React from 'react';
import {Link} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
function OwnerSidebarComponent() {
  
    return (
     <>
     
     <div className='sidebar__' >   
     
     <nav className='sidebar__ '>

    
<br/>
     <Link to="/owner" className='sidebar__text'> <DashboardIcon/>DashBoard</Link>
         <br/>
         <br/>
                
                <Link to="/owner/department" className='sidebar__text'><span>Department</span></Link>
              
                <br/>
                <br/>
                <Link to="/owner/staff" className='sidebar__text'><span>Staff</span></Link>
                <br/>
                <br/>
                <Link to="/owner/room" className='sidebar__text'><span>Room</span></Link>
                <br/>
                <br/>
                {/* <Link to="/owner/report" className='sidebar__text'><span>Report</span></Link> */}
              
              
        </nav>
         
        </div>
       
        </>
    )
}

export default OwnerSidebarComponent
