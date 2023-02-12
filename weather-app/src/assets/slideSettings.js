  export var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 1

          }
        },
        {
          breakpoint: 424,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ]
    };