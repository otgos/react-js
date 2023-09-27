import React from 'react'

const Jsx3 = () => {
    
    const isAdmin = true;
    

  return (
    <div>

        {
        isAdmin ? 
        <div>
            <h3>Admin Menu</h3>
            <ul>
                <li>Create student</li>
                <li>Update student</li>
                <li>Delete student</li>
            </ul>
        </div>
        :
        <div>
            <h3>Student Menu</h3>
            <ul>
                <li>Register</li>
                <li>Login</li>
            </ul>
        </div>
        }

        

        
        
    </div>
  )
}

export default Jsx3