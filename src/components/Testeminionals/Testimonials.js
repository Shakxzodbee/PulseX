import React from 'react';
import Testimonial from './Testimonial';

const testimonialsData = [
    {
        name: 'Ali',
        message: 'Bu loyiha juda yaxshi!',
        image: 'https://via.placeholder.com/100',
    },
    {
        name: 'Oya',
        message: 'Men juda mamnunman!',
        image: 'https://via.placeholder.com/100',
    },
    {
        name: 'John',
        message: 'Ajoyib xizmat!',
        image: 'https://via.placeholder.com/100',
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>Bizning Mijozlarimizning Fikrlari</h1>
            {testimonialsData.map((testimonial, index) => (
                <Testimonial
                    key={index}
                    name={testimonial.name}
                    message={testimonial.message}
                    image={testimonial.image}
                />
            ))}
        </div>
    );
};

export default Testimonials;