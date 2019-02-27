import React, { Component } from 'react';
import {Slider} from 'react-simple-image-carousel';

export  class confusedPictureCarousel extends Component {
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVKz7lov2XvXTsVD0PBGX9S8pOinKgMCaO8R0gYfGloMS2plC",
        "https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzA3XFxcLzI0MTU0ODEzXFxcL2NvbmZ1c2VkLVJvbi1pbi1IYXJyeS1Qb3R0ZXItYW5kLVNvcmNlcmVycy1TdG9uZS5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuaGVyLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvaGVyXFxcL25vLWltYWdlLnBuZz92PTIyXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjUwN2EzMTg2ZjgzNmYyMjIwYmVlMTQxYzM4YTcxYjAwMzUyZGY2MTgifQ==/confused-ron-in-harry-potter-and-sorcerers-stone.jpg"
        ]}
    /></div>

        );
    }
}