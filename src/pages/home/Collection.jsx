import React from 'react';

const Collection = () => {
    return (
        <section className={`bg-[url('/img/collection/background.png')]  bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20`}>
            <div className='h-[580px] flex md:flex-row md:justify-between items-center'>
                <div className='md:w-1/2 hidden md:block'>
                </div>
                <div className='md:w-1/2'>
                    <img src="img/collection/logo2.png" alt="" />
                    <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.</p>
                    <button className='px-6 py-2 bg-white text-black rounded-sm font-semibold capitalize'>see collection</button>
                </div>
            </div>
        </section>
    )
}

export default Collection