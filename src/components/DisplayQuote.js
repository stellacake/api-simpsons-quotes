import React from "react";

function DisplayQuote({ quoteCard }) {
    return (
        <div className="DisplayQuote">
            <img src={quoteCard.image} alt={quoteCard.character}/>
            <h2><em>{quoteCard.quote}</em></h2>
            <h3>{quoteCard.character}</h3>
        </div>
    );
};

export default DisplayQuote;