
/* Types in Strapi */
export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ImageProps {
  id: number;
  // documentId: string;
  url: string;
  alternativeText: string;
}

export interface LogoProps {
  id: number;
  image: ImageProps;
  logoText: string;
}

// interface BlurbProps {
//   id: number;
//   heading: string;
//   description: string;
//   link: LinkProps;
// }

export interface FullImageProps extends Base<"blocks.full-image"> {
  id: number;
  __component: "blocks.full-image";
  image: ImageProps;
}

export interface HeadingProps extends Base<"blocks.heading"> {
  heading: string;
  linkId?: string;
}

export interface ParagraphProps extends Base<"blocks.paragraph"> {
  content: string;
}

export interface ParagraphWithImageProps extends Base<"blocks.paragraph-with-image"> {
  content: string;
  image: ImageProps;
  reversed?: boolean;
  imageLandscape?: boolean;
}

export interface InfoBlockProps extends Base<"blocks.info-block"> {
  imageOnRight?: boolean;
  heading: string;
  content: string;
  image: ImageProps;
  link?: LinkProps;
}


type ComponentType =
  | "blocks.hero-section"
  | "blocks.info-block"
  | "blocks.heading"
  | "blocks.paragraph-with-image"
  | "blocks.paragraph"
  | "blocks.full-image";
  // | "blocks.features-section"


export interface Base<T extends ComponentType, D extends object = Record<string, unknown>> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}


export type Block =
  | HeroSectionProps
  | HeadingProps
  | ParagraphProps
  | ParagraphWithImageProps
  | FullImageProps
  | InfoBlockProps;
  // | FeaturesSectionProps
  // | FeaturedArticleProps

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  theme: "navy" | "orange";
  heading: string;
  subheading: string;
  image: ImageProps;
  cta?: LinkProps[];
  // author?: string;
  // darken?: boolean;
}

// deprecated - too hard to populate
// export interface FeaturesSectionProps extends Base<"blocks.features-section"> {
//   id: number;
//   blurbs: BlurbProps[];
// }

export interface HomePageProps {
  title: string;
  description: string;
  blocks: Array<Block>;
}

export interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}



/* Other Types */
export interface RegisterUserState {
  zodErrors: Record<string, string[]> | null;
  strapiErrors: { message?: string } | null; // or more precise if you know Strapi’s shape
  message: string | null;
  values: {
    username: string;
    email: string;
  };
}

export const initialRegisterState: RegisterUserState = {
  zodErrors: null,
  strapiErrors: null,
  message: null,
  values: {
    username: "",
    email: "",
  },
};
