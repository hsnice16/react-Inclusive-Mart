import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Clothing",
    img: {
      altText: "a girl wearing a marvel printed hoody",
      url: "https://rukminim2.flixcart.com/image/800/960/kwdv3bk0/sweatshirt/g/n/1/6-7-years-bon7948-g-bonkids-original-imag92umght4jjh5.jpeg?q=50",
    },
  },
  {
    _id: uuid(),
    categoryName: "Computers",
    img: {
      altText: "spiderman laptop skin",
      url: "https://rukminim2.flixcart.com/image/416/416/kay9bbk0/laptop-skin-decal/w/f/m/marvel-spider-man-laptop-skin-laptop-sticker-hd-quality-laptop-original-imafsetzcdx6bwzy.jpeg?q=70",
    },
  },
  {
    _id: uuid(),
    categoryName: "Books",
    img: {
      altText: "avenger endgame book cover",
      url: "https://rukminim2.flixcart.com/image/416/416/kqjtd3k0/book/2/q/8/marvel-die-cut-classic-avengers-endgame-original-imag4jhf7fg6dts4.jpeg?q=70",
    },
  },
  {
    _id: uuid(),
    categoryName: "Gaming",
    img: {
      altText: "guardians of the galaxy ps4 box cover",
      url: "https://rukminim2.flixcart.com/image/416/416/kv6zvrk0/physical-game/z/s/v/no-standard-marvel-s-guardians-of-the-galaxy-physical-disc-ps4-original-imag85jpsrm6fvnu.jpeg?q=70",
    },
  },
];
