import { useLoaderData } from "react-router-dom";


const UpdateData = () => {
    
    const singleData = useLoaderData();
    console.log(singleData)

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const mySingleData = {
            name,
            email,
            password,
        };
        console.log(mySingleData);

        fetch(`http://localhost:5000/users/${singleData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mySingleData)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
        });

    }

    
    return (
        <div>
            <h1>Updated:</h1>
            <form onSubmit={handleUpdate}>
                <input placeholder="name" defaultValue={singleData?.name} type="text" name="name" id="" />
                <br />
                <input placeholder="email" defaultValue={singleData?.email} type="email" name="email" id="" />
                <br />
                <input placeholder="password" defaultValue={singleData?.password} type="password" name="password" id="" />
                <br />
                <input type="submit" name="" value="Submit" id="" />
            </form>
        </div>
    );
};

export default UpdateData;