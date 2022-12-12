import React, { useRef } from 'react';
import '../styles/MovieModal.css';
import useOnClickOutside from '../hooks/useOnClickOutside';

// 무비 객체에있는 내용들을 전달받음.
function MovieModal({backdrop_path,title,overview,name,release_date,first_air_date,vote_average,setModalOpen,genre_name,vote_count}) {
    //아이디를 지정해주는 훅함수.
    const ref = useRef();

    useOnClickOutside(ref, () => {
        setModalOpen(false);
    })
  return (
    <div className='presentation'>
        <div className='wrapper_modal'>
            <div className='modal' ref={ref}>
                <span className='modal__close' onClick={()=> setModalOpen(false)}>X</span>
                <img className='modal__poster_img' 
                     src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} 
                     alt={title ? title : name} />
                <div className='modal__contant'>
                    <p className='modal__details'>
                        <span className='modal__user_perc'>100% for you</span>{" "}{release_date ? release_date : first_air_date}
                    </p>
                    <h2 className='modal__title'>{title ? title : name}</h2>
                    <p className='modal_ganre'>{genre_name}</p>
                    <p className='modal__details'> 평점:{vote_average}</p>
                    <p className='modal__details'> 추천:{vote_count}</p>
                    <p className='modal__overview'>{overview}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieModal