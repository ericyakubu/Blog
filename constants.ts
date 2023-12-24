import { POST_TYPE, PRODUCT_TYPE, SECTION_TYPE } from "./types";

export const MAIN_POSTS = [
  {
    id: "113f",
    title: "8 new openings in Dublin and 4 coming soon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae nesciunt animi earum deserunt asperiores fugit laboriosam! Sunt ipsum quis omnis accusantium labore? Exercitationem quaerat dignissimos quas repellendus suscipit praesentium. Incidunt rerum dolore ut asperiores aspernatur magni reprehenderit, illum excepturi et sint porro delectus earum animi, obcaecati eos cum vel accusantium accusamus saepe. Minima aspernatur nobis, voluptatem tempora provident repellendus.",
    img: "/assets/food_1.jpg",
  },
  {
    title: "Where to\nEat &\nDrink\nNear you",
    subtitle: "All the Food",
  },
  {
    id: "113f",
    title: "8 new openings in Dublin and 4 coming soon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae nesciunt animi earum deserunt asperiores fugit laboriosam! Sunt ipsum quis omnis accusantium labore? Exercitationem quaerat dignissimos quas repellendus suscipit praesentium. Incidunt rerum dolore ut asperiores aspernatur magni reprehenderit, illum excepturi et sint porro delectus earum animi, obcaecati eos cum vel accusantium accusamus saepe. Minima aspernatur nobis, voluptatem tempora provident repellendus.",
    img: "/assets/food_1.jpg",
  },
  {
    id: "113f",
    title: "8 new openings in Dublin and 4 coming soon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae nesciunt animi earum deserunt asperiores fugit laboriosam! Sunt ipsum quis omnis accusantium labore? Exercitationem quaerat dignissimos quas repellendus suscipit praesentium. Incidunt rerum dolore ut asperiores aspernatur magni reprehenderit, illum excepturi et sint porro delectus earum animi, obcaecati eos cum vel accusantium accusamus saepe. Minima aspernatur nobis, voluptatem tempora provident repellendus.",
    img: "/assets/food_1.jpg",
  },
];

export const TEST_POSTS: POST_TYPE[] = [
  {
    id: "12f32e",
    title: "Post Title",
    images: {
      main: "/assets/food_2.jpg",
    },
    author: "Mudala Aladum",
    publish_date: Date.now(),
    rating: {
      likes: 12,
      dislikes: 0,
    },
  },
  {
    title: "Post Title",
    images: {
      main: "/assets/food_2.jpg",
    },
    author: "Mudala Aladum",
    publish_date: Date.now(),
    rating: {
      likes: 12,
      dislikes: 0,
    },
  },
  {
    title: "Post Title",
    images: {
      main: "/assets/food_2.jpg",
    },
    author: "Mudala Aladum",
    publish_date: Date.now(),
    rating: {
      likes: 12,
      dislikes: 0,
    },
  },
  {
    title: "Post Title",
    images: {
      main: "/assets/food_2.jpg",
    },
    author: "Mudala Aladum",
    publish_date: Date.now(),
    rating: {
      likes: 12,
      dislikes: 0,
    },
  },
];

export const SHOP_PRODUCTS: PRODUCT_TYPE[] = [
  {
    name: `Product name`,
    price: 123.23,
    image: `/assets/food_4.jpg`,
    new: true,
    description: `Product description goes here`,
  },
  {
    name: `Product name`,
    price: 123.23,
    image: `/assets/food_4.jpg`,
    new: true,
    description: `Product description goes here`,
  },
  {
    name: `Product name`,
    price: 123.23,
    image: `/assets/food_4.jpg`,
    new: true,
    description: `Product description goes here`,
  },
  {
    name: `Product name`,
    price: 123.23,
    image: `/assets/food_4.jpg`,
    new: true,
    description: `Product description goes here`,
  },
  {
    name: `Product name`,
    price: 123.23,
    image: `/assets/food_4.jpg`,
    new: true,
    description: `Product description goes here`,
  },
  {
    name: `Product name`,
    price: 123.23,
    image: `/assets/food_4.jpg`,
    new: true,
    description: `Product description goes here`,
  },
  {
    name: `Product name`,
    price: 123.23,
    image: `/assets/food_4.jpg`,
    new: true,
    description: `Product description goes here`,
  },
];

export const SECTIONS: SECTION_TYPE[] = [
  {
    title: `What's new`,
    subtitle: `News and recommendations.`,
    sectionLink: {
      title: `More`,
      link: ``,
    },
    posts: [
      {
        id: "12f32e",
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
    ],
  },
  {
    title: `Insider Features`,
    subtitle: `Special news, events, and features.`,
    sectionLink: {
      title: `More`,
      link: ``,
    },
    posts: [
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
    ],
  },
  {
    title: `Where to Drink Right Now`,
    subtitle: ``,
    sectionLink: {
      title: `More Guides`,
      link: ``,
    },
    posts: [
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
    ],
  },
  {
    title: `Guides`,
    subtitle: `Explore the best of`,
    sectionLink: {
      title: `More`,
      link: ``,
    },
    posts: [
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
      {
        title: "Post Title",
        images: {
          main: "/assets/food_2.jpg",
        },
        author: "Mudala Aladum",
        publish_date: Date.now(),
        rating: {
          likes: 12,
          dislikes: 0,
        },
      },
    ],
  },
];
