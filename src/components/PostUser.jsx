import axios from "axios";


const PostUser = () => {

    const handlePostUser = async (e) => {
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

        // .then method 
        
        // fetch('http://localhost:5000/users', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(myData),
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })

        // await async method 

        // try {
        //     const res = await fetch('http://localhost:5000/users', {
        //         method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify(myData),
        //     });
        //     const data = await res.json();
        //     console.log(data);
        //     // ------alert-----
        //     if(data.acknowledged){
        //         alert("data posted successfully");
        //     }
            
        // } catch (error) {
        //     console.error(error)
        // }

        // axios method 
        try {
            const response = await axios.post("http://localhost:5000/users", myData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }



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