import React from "react";
import Tour from "./Tour";

function Tours({tours,removeBtn}) {
    return (
        <main>
            <h3 className="title">Our Tours</h3>
            <div className="underline"></div>

            <div>
                {tours.map((tour) =>  {
                    return <Tour key={tour.id} {...tour} removeBtn = {removeBtn}/>
                    
                })}
            </div>
        </main>

    )
}
export default Tours;