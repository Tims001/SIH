async function getTodo() {
    try {
        const response = await fetch("https://todo-list-pq1u.onrender.com/api/v1/todo");
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

//CREATE
async function getTodo() {
    try {
        const response = await fetch("https://todo-list-pq1u.onrender.com/api/v1/todo" ,
            {
                method: "POST",
                body: {
                    title: "This is from Timothy",
                    description: "Hello World",
                },
            }
        );
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

//UPDATE
async function getTodo() {
    try {
        const response = await fetch("https://todo-list-pq1u.onrender.com/api/v1/todo" ,
            {
                method: "PATCH",
                body: {
                    title: "This is from Timothy",
                    description: "Hello World",
                },
            }
        );
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

//DELETE
async function getTodo() {
    try {
        const response = await fetch("https://todo-list-pq1u.onrender.com/api/v1/todo" ,
            {
                method: "POST",
                body: {
                    _id: "",
                },
            }
        );
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}