import React from 'react';
import Aboutv6 from '../aboutv6';
import Achievement from '../achievement';
import Booksv1 from '../booksv1';
import Cta from '../cta';
import Event from '../event';
import FunFacts from '../fun-facts';
import Herov6 from '../herov6';

const Version06 = () => {
    return (
        <>
           <Herov6 />
           <Aboutv6 />
           <Booksv1 /> 
           <FunFacts />
           <Achievement />
           <Cta />
           <Event />
        </>
    );
};

export default Version06;