import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import '../../assets/css/ADashboard/Amain.css';
import Adminnav from '../../components/admin/Adminnav'
import Adminsidebar from '../../components/admin/Adminsidebar'
import AdminHome  from '../../components/admin/AdminHome'

function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    
    <div className='grid-container'>
      <Adminnav OpenSidebar={OpenSidebar}/>
      <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <main className="main-container">
       {/* <AdminHome /> */}
        <Outlet />
      </main>
    </div>
  )
}

export default AdminDashboard