import React from 'react';

const Testimonial = ({ name, message, image }) => {
    return (
        <div className="testimonial">
            <img src={image} alt={name} className="testimonial-image" />
            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-message">{message}</p>
        </div>
    );
};

export default Testimonial;