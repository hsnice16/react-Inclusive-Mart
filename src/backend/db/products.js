import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    categoryName: "Clothing",
    subCategory: "T-Shirts",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "marvel red jersey t-shirt for boys",
      url: "https://rukminim2.flixcart.com/image/800/960/kr58yvk0/kids-t-shirt/d/q/8/5-6-years-tz1321-marvel-original-imag5y2bv263cxnc.jpeg?q=50",
    },
    heading: "Marvel",
    description:
      "Boys Cartoon / Superhero Cotton Jersey T Shirt  (Red, Pack of 1)",
    price: {
      current: "₹629",
      earlier: "₹899",
      offPct: 30,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Clothing",
    subCategory: "Winter Wearing",
    ratings: "4",
    isInWishList: false,
    img: {
      altText: "marvel full sleeve striped men sweatshirt",
      url: "https://rukminim2.flixcart.com/image/800/960/kj7gwi80-0/sweatshirt/q/m/x/l-11954460-kook-n-keech-marvel-original-imafytsq7abzsbzg.jpeg?q=50",
    },
    heading: "Kook N Keech Marvel",
    description: "Full Sleeve Striped Men Sweatshirt",
    price: {
      current: "₹702",
      earlier: "₹2,199",
      offPct: 68,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Clothing",
    subCategory: "T-Shirts",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "marvel pink jersey t-shirt for girls",
      url: "https://rukminim2.flixcart.com/image/800/960/kr58yvk0/kids-t-shirt/d/v/u/7-8-years-tz1325-marvel-original-imag5y25xytwjzeg.jpeg?q=50",
    },
    heading: "Marvel",
    description: "Girls Typography Cotton Jersey T Shirt  (Pink, Pack of 1)",
    price: {
      current: "₹489",
      earlier: "₹699",
      offPct: 30,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Clothing",
    subCategory: "Winter Wearing",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "marvel full sleeve printed women sweatshirt",
      url: "https://rukminim2.flixcart.com/image/800/960/kf75fgw0/sweatshirt/m/f/f/l-10279075-kook-n-keech-marvel-original-imafvpdncxghaynq.jpeg?q=50",
    },
    heading: "Kook N Keech Marvel",
    description: "Full Sleeve Printed Women Sweatshirt",
    price: {
      current: "₹542",
      earlier: "₹1,599",
      offPct: 66,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Clothing",
    subCategory: "T-Shirts",
    ratings: "3+",
    isInWishList: false,
    img: {
      altText: "marvel blue cotton jersey t-shirt for boys",
      url: "https://rukminim2.flixcart.com/image/800/960/kxaq7ww0/kids-t-shirt/p/q/m/13-14-years-s20709btee135-marvel-original-imag9sa4ufswkvzm.jpeg?q=50",
    },
    heading: "Marvel",
    description: "Boys Printed Cotton Jersey T Shirt  (Blue, Pack of 1)",
    price: {
      current: "₹279",
      earlier: "₹699",
      offPct: 60,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Clothing",
    subCategory: "Winter Wearing",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "marvel full sleeve printed women sweatshirt",
      url: "https://rukminim2.flixcart.com/image/800/960/jb5e4y80/sweatshirt/h/c/7/m-1391509-kook-n-keech-marvel-original-imafyjecphexm4wd.jpeg?q=50",
    },
    heading: "Kook N Keech Marvel",
    description: "Full Sleeve Printed Women Sweatshirt",
    price: {
      current: "₹695",
      earlier: "₹1,199",
      offPct: 42,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Clothing",
    subCategory: "Winter Wearing",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "marvel full sleeve printed women sweatshirt",
      url: "https://rukminim2.flixcart.com/image/800/960/kwdv3bk0/sweatshirt/g/n/1/6-7-years-bon7948-g-bonkids-original-imag92umght4jjh5.jpeg?q=50",
    },
    heading: "Bonkids",
    description: "Full Sleeve Printed Girls Sweatshirt",
    price: {
      current: "₹689",
      earlier: "₹1,499",
      offPct: 54,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Computers",
    subCategory: "Laptop Accessories",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "captain marvel vinyl laptop decal",
      url: "https://rukminim2.flixcart.com/image/416/416/kuyf8nk0/laptop-skin-decal/k/1/e/captain-marvel-gray-wall-13-3-original-imag7yw9pptdnqhb.jpeg?q=70",
    },
    heading: "Marvel Laptop Decal",
    description: "gray wall Captain Marvel Vinyl Laptop Decal 13.3",
    price: {
      current: "₹179",
      earlier: "₹399",
      offPct: 55,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Computers",
    subCategory: "Tablet Accessories",
    ratings: "4",
    isInWishList: false,
    img: {
      altText: "ACM Flip Cover for Karbonn Smart Tab",
      url: "https://rukminim2.flixcart.com/image/416/416/jgtq3rk0/cases-covers/flip-cover/z/v/v/acm-rot9bk1005ac1-original-imaemfjafhreb2zm.jpeg?q=70",
    },
    heading: "Flip Cover",
    description:
      "ACM Flip Cover for Karbonn Smart Tab 9 Marvel  (Black, Cases with Holder)",
    price: {
      current: "₹419",
      earlier: "₹990",
      offPct: 57,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Computers",
    subCategory: "Laptop Accessories",
    ratings: "3+",
    isInWishList: false,
    img: {
      altText: "sticker & decal for laptop skin 15.6",
      url: "https://rukminim2.flixcart.com/image/416/416/knqd3m80/laptop-skin-decal/o/d/s/superheroes-sticker-decal-for-laptop-skin-pvc-17x11inch-easy-to-original-imag2ct8bzs84sws.jpeg?q=70",
    },
    heading: "NoWorries Superheroes",
    description: "NoWorries Superheroes, sticker & decal for laptop skin 15.6",
    price: {
      current: "₹199",
      earlier: "₹449",
      offPct: 55,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Computers",
    subCategory: "Tablet Accessories",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "Lenovo Tab V7 Back Cover",
      url: "https://rukminim2.flixcart.com/image/416/416/k4d27ww0/cases-covers/back-cover/t/j/m/vakibo-lnv-tabv7-avg-original-imafnah9rhuxhguh.jpeg?q=70",
    },
    heading: "Back Cover",
    description:
      "VAKIBO Back Cover for Lenovo Tab V7 6.9 inch  (Black, 3D Case)",
    price: {
      current: "₹208",
      earlier: "₹999",
      offPct: 79,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Computers",
    subCategory: "Laptop Accessories",
    ratings: "4",
    isInWishList: false,
    img: {
      altText: "captain america laptop skin",
      url: "https://rukminim2.flixcart.com/image/416/416/ktuewsw0/laptop-skin-decal/q/m/d/captain-america-end-game-marvel-super-hero-laptop-skin-decal-original-imag73ek7kxnaj8v.jpeg?q=70",
    },
    heading: "Wall Sticks",
    description:
      "Captain America - Laptop Skin - Decal - Sticker - Fit For All Brands and Models - 14",
    price: {
      current: "₹245",
      earlier: "₹899",
      offPct: 72,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Computers",
    subCategory: "Tablet Accessories",
    ratings: "3+",
    isInWishList: false,
    img: {
      altText: "Lenovo Tab M8 Back Cover",
      url: "https://rukminim2.flixcart.com/image/416/416/kfcv6vk0/cases-covers/back-cover/s/u/f/vakibo-lnv-tabm8-8505x-avg-original-imafvu7fdvy4qvv5.jpeg?q=70",
    },
    heading: "Back Cover",
    description:
      "VAKIBO Back Cover for Lenovo Tab M8 2nd Gen 8 inch  (Black, 3D Case)",
    price: {
      current: "₹234",
      earlier: "₹1,499",
      offPct: 84,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Books",
    subCategory: "Literature Books",
    ratings: "3+",
    isInWishList: false,
    img: {
      altText: "Wonder Woman and Captain Marvel Book Cover",
      url: "https://rukminim2.flixcart.com/image/416/416/kelptow0/book/6/9/6/wonder-woman-and-captain-marvel-from-comics-to-film-original-imafv8z3vgyehbrw.jpeg?q=70",
    },
    heading: "Book",
    description:
      "Wonder Woman and Captain Marvel  (English, Hardcover, Cocca Carolyn)",
    price: {
      current: "₹3,808",
      earlier: "₹4,589",
      offPct: 17,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Books",
    subCategory: "Literature Books",
    ratings: "4",
    isInWishList: false,
    img: {
      altText: "Make Ours Marvel Book Cover",
      url: "https://rukminim2.flixcart.com/image/416/416/k0plpjk0/book/5/0/6/make-ours-marvel-original-imafkg3mgtxb243d.jpeg?q=70",
    },
    heading: "Book",
    description: "Make Ours Marvel  (English, Hardcover, unknown)",
    price: {
      current: "₹12,554",
      earlier: "₹14,769",
      offPct: 14,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Books",
    subCategory: "Literature Books",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "Marvel's Black Panther Book Cover",
      url: "https://rukminim2.flixcart.com/image/416/416/ktd9mkw0/book/k/6/k/marvel-s-black-panther-original-imag6pk8ysxzjgmr.jpeg?q=70",
    },
    heading: "Book",
    description:
      "Marvel's Black Panther  (English, Paperback, Burroughs Todd Steven)",
    price: {
      current: "₹2,662",
      earlier: "₹3,993",
      offPct: 33,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Books",
    subCategory: "Literature Books",
    ratings: "3+",
    isInWishList: false,
    img: {
      altText: "Captain Marvel And the Art of Nostalgia Book Cover",
      url: "https://rukminim2.flixcart.com/image/416/416/jlmmdu80/book/1/9/8/captain-marvel-and-the-art-of-nostalgia-original-imaf52rdhddajhuf.jpeg?q=70",
    },
    heading: "Book",
    description:
      "Captain Marvel and the Art of Nostalgia  (English, Paperback, Cremins Brian)",
    price: {
      current: "₹4,025",
      earlier: "₹6,038",
      offPct: 33,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Gaming",
    subCategory: "Gaming Accessories",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "Iron Man Designer Gamming Mousepad",
      url: "https://rukminim2.flixcart.com/image/416/416/km2clu80/mousepad/g/m/i/marvel-avenger-iron-man-designer-gamming-printmall-original-imagf227kuthzurv.jpeg?q=70",
    },
    heading: "PrintMall Marvel",
    description:
      "PrintMall Marvel Avenger Iron Man Designer Gamming Mousepad  (Multicolor)",
    price: {
      current: "₹119",
      earlier: "₹339",
      offPct: 64,
    },
    isInCart: false,
  },

  {
    _id: uuid(),
    categoryName: "Gaming",
    subCategory: "Gaming Accessories",
    ratings: "4+",
    isInWishList: false,
    img: {
      altText: "Marvel Design Mousepad",
      url: "https://rukminim2.flixcart.com/image/416/416/kohigsw0/mousepad/r/v/t/marvel-design-non-slip-rubber-base-gaming-laptop-mpad0050-monk-original-imag2xvzhtcqae6d.jpeg?q=70",
    },
    heading: "Monk Matters Marvel",
    description:
      "Monk Matters Marvel Design Non-Slip Rubber Base Gaming & Laptop MPAD0050 Mousepad  (Multicolor)",
    price: {
      current: "₹195",
      earlier: "₹599",
      offPct: 67,
    },
    isInCart: false,
  },
];
