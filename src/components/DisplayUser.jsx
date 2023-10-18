import { useLoaderData } from "react-router-dom";

const DisplayUser = () => {
    const users = useLoaderData();
    console.log(users);

    const handleDelete = async (_id) => {
        console.log(_id);
        
        try {
            const response = await fetch(`http://localhost:5000/users/${_id}`, {
              method: "DELETE",
            });
            const result = await response.json();
            console.log(result);
          } catch (error) {
            console.log(error);
          }
    }
    return (
        <div>
            <h2>User: {users.length}</h2>
            {
                users.map(user=> <div key={user._id}>
                    <hr />
                    <h4>{user.name}</h4>
                    <br />
                    <button onClick={() => handleDelete(user._id)} type="submit">Delete</button>
                    <hr />
                </div>)
            }
        </div>
    );
};

export default DisplayUser;