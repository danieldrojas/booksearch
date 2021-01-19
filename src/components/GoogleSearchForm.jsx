import React, { useState } from 'react';
import API from '../utils/API'



const GoogleSearchForm = () => {

    const [book, setBook] = useState("")
    const [foundBooks, setFoundBooks] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();
        loadBook()
        setBook(" ");
    }

    const loadBook = () => {

        const foundBooksArray = [];
        API.getBook(book)
            .then((res) => {
                console.log(res.data.items)
                res.data.items.map((book) => {
                    const { volumeInfo, id } = book
                    volumeInfo.id = id
                    return foundBooksArray.push(volumeInfo)
                })

                setFoundBooks(foundBooksArray)
            }).catch((err) => console.log(err))
        
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
                                    placeholder="Search book"
                                    type="text" className="form-control" id="book"
                                    value={book}
                                    onChange={(e) => setBook(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {foundBooks.length ? (
                foundBooks.map((book) => (
                    <div className="row" key={book.id}>
                        <div className="col s12">
                            <div className="card">
                                <div className="card-image">
                                    <img alt="book cover" src={book.imageLinks.smallThumbnail} />
                                    <span className="card-title">{book.title}</span>
                                    <div className="card-content">
                                        <p>{book.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="!#">This is a link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (<h3>Try finding amazing books with GoogleBooks engine!</h3>)
            }
        </div>
    );
};

export default GoogleSearchForm;