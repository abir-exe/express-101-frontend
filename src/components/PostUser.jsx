

const PostUser = () => {

    const handlePostUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)

        const myData = {
            name,
            email,
            password,
        };
        console.log(myData);
        
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    return (
        <div>
            <h1>User:</h1>

            <form onSubmit={handlePostUser}>
                <input placeholder="name" type="text" name="name" id="" />
                <br />
                <input placeholder="email" type="email" name="email" id="" />
                <br />
                <input placeholder="password" type="password" name="password" id="" />
                <br />
                <input type="submit" name="" value="Submit" id="" />
            </form>
        </div>
    );
};

export default PostUser;