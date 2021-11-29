import React from 'react';
import { useFetch } from './hooks';

function Joke() {
    const { setup, punchline } = useFetch('https://jokes.zakariaa.nl/jokes/random', {})

    return (
        <div>
            <h3>Joke</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke;