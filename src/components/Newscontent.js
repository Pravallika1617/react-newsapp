import React from 'react';

function Newscontent(props) {
    let { author, title, description, image, url, date, source } = props;
    
    return (
        <div className='container'>
            <div className="newscontent">
                <div className="card mt-3" style={{ width: "18rem" }}>
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                    <span class="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={image} className="card-img-top" alt="..." width={"18rem"} height={"150rem"} />
                    <div className="card-body">
                        <h6 className="card-title">{title}...</h6>
                        <p className="card-description">{description}...</p>
                        <p className="card-author"><small>By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" className="btn mt-2">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newscontent;

