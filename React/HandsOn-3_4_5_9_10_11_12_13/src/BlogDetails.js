function BlogDetails(){

    const blogs=[
        {
            id:1,
            title:"React Hooks",
            author:"Sai"
        },
        {
            id:2,
            title:"Java Streams",
            author:"Anish"
        },
        {
            id:3,
            title:"NodeJS Guide",
            author:"John"
        }
    ];

    return(

        <div className="card">

            <h2>Blog Details</h2>

            <ul>

                {
                    blogs.map(blog=>(
                        <li key={blog.id}>
                            <b>{blog.title}</b><br/>
                            By {blog.author}
                            <br/><br/>
                        </li>
                    ))
                }

            </ul>

        </div>

    );

}

export default BlogDetails;