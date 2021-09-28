import axios from 'axios';
import React, {useState} from 'react'

function PostForm() {
    const url = "https://jsonplaceholder.typicode.com/Posts";
    const[data, setData] = useState({
        name: "",
        date: "",
        userId: ""
    });
    function handle(e) {
        const newdata = { ...data}
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name : data.name,
            date : data.date,
            userId : data.number
        })
        .then(res => {
            console.log(res.data)
        })
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input type="text" placeholder="Enter Name" onChange={(e)=>handle(e)} id="name" value={data.name}/>
                <input type="date" placeholder="Enter Date" onChange={(e)=>handle(e)} id="date" value={data.date} />
                <input type="number" placeholder="Enter User Id" onChange={(e)=>handle(e)} id="number" value={data.number} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PostForm
