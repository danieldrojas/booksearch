import React, { useState } from 'react';
import API from '../utils/API'



const GoogleSearchForm = () => {

    const [book, setBook] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        loadBook()
        setBook(" ");        
    }

    const loadBook = () => {

        const booksFoundArray = [];
        API.getBook(book)
            .then((res) => {
                console.log(res.data.items)
                res.data.items.map((book) => {
                    const { volumeInfo, id } = book
                    
                })
            

            })
    }
   




    return (
        <div className="col s12 m7">
            {/* <h2 className="header">Googlebooks</h2> */}
            <div className="card horizontal">
                <div className="card-image">
                    {/* <img src="https://www.google.com/intl/en_ALL/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" /> */}
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group" >
                                <label htmlFor="text"><h1>Book Search</h1></label>
                                <input
                                    placeholder="Search a new book"
                                    type="text" className="form-control" id="book"
                                    value={book}
                                    onChange={(e) => setBook(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>
            </div>
       
            


        </div>
    );
};

export default GoogleSearchForm;