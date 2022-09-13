import React, { useState } from "react";

function Tour({id,name,info,image,price,removeBtn}) {
    const [text, setText]  = useState(false);
    return (
        <article className="article">
            <img src={image} alt={name} />
            <div className="box">
            <h4 className="name">{name}</h4>
                <div className="price">
                    <span className="price_box">${price}</span>
                </div>
                <p className="info">
                    {text ? info +' ' : `${info.substring(0,200)}... `}
                    <button class="info_btn" onClick={() => setText(!text)}>{text ? 'show less ' : ' read more'}</button>
                </p>
                <div className="btn_box">
                    <button className="delete_btn" onClick={() => removeBtn(id)}>Delete</button>
                </div>
            
            </div>
        </article>
    )

}
export default Tour;