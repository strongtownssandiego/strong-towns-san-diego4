import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features_sections';
  info: {
    displayName: 'Features Section';
  };
  attributes: {
    blurbs: Schema.Attribute.Component<'elements.blurb', true>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.Text;
    theme: Schema.Attribute.Enumeration<['navy', 'orange']>;
  };
}

export interface ElementsBlurb extends Struct.ComponentSchema {
  collectionName: 'components_elements_blurbs';
  info: {
    displayName: 'Blurb';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.features-section': BlocksFeaturesSection;
      'blocks.hero-section': BlocksHeroSection;
      'elements.blurb': ElementsBlurb;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
