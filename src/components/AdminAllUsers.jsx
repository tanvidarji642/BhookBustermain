import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/ADashboard/AdminAllUsers.css';

const AdminAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:8000/users');
            setUsers(res.data);
        } catch (err) {
            console.error('Error fetching users:', err);
        }
    };

    return (
        <div className="admin-users-container">
            <div className="admin-users-header">
                <h2>All Users</h2>
                <div className="view-toggle">
                    <button
                        className={`toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                        onClick={() => setViewMode('table')}
                    >
                        Table View
                    </button>
                    <button
                        className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                    >
                        Grid View
                    </button>
                </div>
            </div>

            {viewMode === 'table' ? (
                <table className="user-table dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <span
                                        className={`status-badge ${
                                            user.status ? 'active' : 'inactive'
                                        }`}
                                    >
                                        {user.status ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="action-cell">
                                    <button className="action-btn edit">Edit</button>
                                    <button className="action-btn delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="user-grid-container">
                    <div className="user-grid">
                        {users.map((user) => (
                            <div className="user-card" key={user._id}>
                                <div className="user-card-header">
                                    <div className="user-profile-pic">
                                        {user.profilePicPath ? (
                                            <img
                                                src={user.profilePicPath}
                                                alt="Profile"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = 'https://via.placeholder.com/60';
                                                }}
                                            />
                                        ) : (
                                            <div className="avatar-placeholder">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                    <div className="user-name">
                                        <h3>{user.name}</h3>
                                        <p>{user.email}</p>
                                    </div>
                                </div>
                                <div className="user-card-divider"></div>
                                <div className="user-card-content">
                                    <div className="user-info-item">
                                        <span className="label">Role:</span>
                                        <span className="value">{user.role}</span>
                                    </div>
                                    <div className="user-info-item">
                                        <span className="label">Status:</span>
                                        <span
                                            className={`status-badge ${
                                                user.status ? 'active' : 'inactive'
                                            }`}
                                        >
                                            {user.status ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                </div>
                                <div className="user-card-actions">
                                    <button className="action-btn edit">Edit</button>
                                    <button className="action-btn delete">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminAllUsers;
