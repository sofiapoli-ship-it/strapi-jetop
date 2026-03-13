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
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.project-section': ProjectProjectSection;
    }
  }
}
