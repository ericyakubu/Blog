import { SECTION_TYPE } from "@/types";

interface Check {
  WhatsNew: SECTION_TYPE;
  InsiderFeatures: SECTION_TYPE;
  WhereToDrink: SECTION_TYPE;
  Guides: SECTION_TYPE;
}

export const SECTION: Check = {
  WhatsNew: {
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
  InsiderFeatures: {
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
  WhereToDrink: {
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
  Guides: {
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
};
