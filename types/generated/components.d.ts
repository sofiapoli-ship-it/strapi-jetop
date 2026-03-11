import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectProjectSection extends Struct.ComponentSchema {
  collectionName: 'components_project_project_sections';
  info: {
    displayName: 'Project Section';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    text: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface ProjectTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_project_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'archive';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.project-section': ProjectProjectSection;
      'project.testimonial': ProjectTestimonial;
    }
  }
}
