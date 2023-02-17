import { useState, useEffect } from 'react'
import BookModel from '../../models/BookModel'
import { Spinner } from '../utils/Spinner';

export const BookCheckoutPage = () => {
    const [book, setBook] = useState<BookModel>();
    const [loading, setLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const bookId = (window.location.pathname).split('/')[2];

    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;

            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseJson = await response.json();

            const loadedBook: BookModel = {
                id: responseJson.id,
                title: responseJson.title,
                author: responseJson.author,
                description: responseJson.description,
                copies: responseJson.copies,
                copiesAvailable: responseJson.copiesAvailable,
                category: responseJson.category,
                img: responseJson.img
            };

            setBook(loadedBook);
            setLoading(false);
        };

        fetchBook().catch((error: any) => {
            setLoading(false);
            setHttpError(error.message)
        })
    }, [])

    if (loading) {
        return (
            <Spinner />
        )
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div >
            <h3>Hi World!</h3>
        </div>
    )
}