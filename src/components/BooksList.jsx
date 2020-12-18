import API from '../utils/API'



const BooksList = ({ book, handleSubmit }) => {
    

    API.getBook(book)
        .then((res) => {
            console.log(res)
        })

    if (handleSubmit) {
        return (
            <div>
                <h2>List of books found: </h2>
                {book}
            </div>
       )
   } else
    return (
        <div>No books found</div>
           );
};

export default BooksList;