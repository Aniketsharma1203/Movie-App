import React from 'react';
const Moviecard = ({ movie }) => {
    return (
        <div className='Movie'>
                    <div>
                        <p>{movie.Year}</p>
                    </div>
                    <div>
                        <img src={movie.Poster} alt={movie.Title}/>
                    </div>
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.title}</h3>
                    </div>
                </div>
    )
}

export default Moviecard;