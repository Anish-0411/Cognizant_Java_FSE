function BookDetails(){

    const books=[
        {
            id:1,
            name:"React Guide",
            author:"Jordan",
            price:550
        },
        {
            id:2,
            name:"Java Complete",
            author:"Herbert",
            price:700
        },
        {
            id:3,
            name:"Python Basics",
            author:"Mark",
            price:400
        }
    ];

    return(

        <div className="card">

            <h2>Book Details</h2>

            <ul>

                {
                    books.map(book=>(
                        <li key={book.id}>
                            <b>{book.name}</b><br/>
                            Author : {book.author}<br/>
                            Price : ₹{book.price}
                            <br/><br/>
                        </li>
                    ))
                }

            </ul>

        </div>

    );

}

export default BookDetails;