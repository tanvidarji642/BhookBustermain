import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import '../../assets/css/ADashboard/Amain.css';
import Adminnav from '../../components/admin/Adminnav'
import Adminsidebar from '../../components/admin/Adminsidebar'

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
        <Outlet />
      </main>
    </div>
  )
}

export default AdminDashboard