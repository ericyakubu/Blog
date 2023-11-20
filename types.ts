export interface POST_TYPE {
  id?: string;
  title: string;
  images: {
    main: string;
    secondaries?: string[];
  };
  author: string;
  publish_date: number;
  rating: {
    likes: number;
    dislikes: number;
  };
}

export interface SECTION_TYPE {
  title: string;
  subtitle: string;
  sectionLink: {
    title: string;
    link: string;
  };
  posts: POST_TYPE[];
}

export interface PRODUCT_TYPE {
  name: string;
  price: number;
  image: string;
  new: boolean;
  description: string;
}

export interface MAIN_POSTS_TYPE {
  id: string;
  name: string;
  description: string;
  img: string;
}
