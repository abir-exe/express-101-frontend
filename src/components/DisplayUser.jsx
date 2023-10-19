import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DisplayUser = () => {
    const users = useLoaderData();
    console.log(users);
    const [updatedUser, setUpdatedUser]= useState(users)

    const handleDelete = async (_id) => {
        console.log(_id);
        
        try {
            const response = await fetch(`http://localhost:5000/users/${_id}`, {
              method: "DELETE",
            });
            const result = await response.json();
            console.log(result);
            if(result.deletedCount > 0 ){
                const filteredData = updatedUser.filter(item => item._id !== _id)
                setUpdatedUser(filteredData);
                alert('Data deleted successfully')

            }
          } 
          catch (error) {
            console.log(error);
          }
    }
    return (
        <div>
            <h2>User: {updatedUser.length}</h2>
            {
                updatedUser.map(user=> <div key={user._id}>
                    <hr />
                    <h4>{user.name}</h4>
                    <br />
                    <button onClick={() => handleDelete(user._id)} type="submit">Delete</button>
                    <br />
                    <Link to={`/users/${user._id}`}>
                    <button type="submit">Update</button></Link>
                    <hr />
                </div>)
            }
        </div>
    );
};

export default DisplayUser;