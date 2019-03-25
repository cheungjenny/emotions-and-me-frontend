import React, { Component } from 'react';
import {Slider} from 'react-simple-image-carousel';

export  class disgustPictureCarousel extends Component {
    render() {
        return (
                              <div className="text-center">

            <Slider
    width={850}
    height={450}
    maxSwipeThreshold={250 * 0.15}
    minSwipeThreshold={40}
    swipeTimeThreshold={200}
    images={[
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/DISGUST/5.jpg",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/DISGUST/6.jpg",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/DISGUST/1.jpg",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/DISGUST/2.jpg",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/DISGUST/3.jpg",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/DISGUST/4.jpg",

        ]}
    /></div>

        );
    }
}