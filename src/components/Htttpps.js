import {useState} from 'react'
import axios from "axios";

function Htttpps() {

const [Posts, setPosts] = useState([])
async function fetchPost () {
    const request = await axios.get("https://jsonplaceholder.typicode.com/Posts41254");
    const data = await request.data;
    setPosts(data);
}

    return (
        <div>
            <button type="button" onClick={fetchPost}>Fetch Post</button>
            {Posts.map(post => (
                <ol>
                    <li>{post.userId}</li>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ol>
            ))}
        </div>
    )
}

export default Htttpps
