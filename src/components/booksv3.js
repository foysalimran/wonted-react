import React from "react";
import data from "../data/books.json"
import { AiFillStar } from 'react-icons/ai';


const Booksv3 = () => {
    const {booksv3} = data;
  return (
    <section className="books section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                {booksv3.title}
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {booksv3.subtitle}
              </h2>
              <div
                className="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
   {booksv3.booksItem.map((data) => (
           <div key={data.id}
           className="col-md-6 col-lg-3 mb-4 mb-lg-0"
           data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-delay="200"
         >
           <div className="books__book h-100 translateEffect1">
             <img
               className="img-fluid"
               src="assets/images/book3.png"
               alt="Book 3"
             />
             <p className="books__book__subtitle">{data.subtitle}</p>
             <h3 className="books__book__title">{data.title}</h3>
             <div className="d-flex justify-content-between">
               <span>{data.price}</span>
               <ul>
                 <li>
                   <AiFillStar />
                 </li>
                 <li>
                 <AiFillStar />
                 </li>
                 <li>
                 <AiFillStar />
                 </li>
                 <li>
                 <AiFillStar />
                 </li>
                 <li>
                 <AiFillStar />
                 </li>
               </ul>
             </div>
           </div>
         </div>
   ))}
        
        </div>
      </div>
    </section>
  );
};

export default Booksv3;
