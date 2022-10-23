import React from 'react';

const NewsCart = ({data}) => {
    // console.log(data);
    const {author,date,details,image,place} = data;
    return (
        <div className='flex mt-7 gap-2 justify-center items-center'>
            <div>
                <img className='h-40 w-96' src={image} alt="" />
            </div>
            <div>
                <p className='font-semibold text-slate-800'>TRAVEL | By {author}</p>
                <h3 className='mt-3 font-bold'>{details}</h3>
            </div>
        </div>
    );
};

export default NewsCart;