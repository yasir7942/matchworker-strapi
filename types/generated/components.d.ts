import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContacts extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contacts';
    icon: 'bulletList';
  };
  attributes: {
    designation: Schema.Attribute.String;
    mobile: Schema.Attribute.String;
    name: Schema.Attribute.String;
    remarks: Schema.Attribute.String;
  };
}

export interface ContactShared extends Struct.ComponentSchema {
  collectionName: 'components_contact_shareds';
  info: {
    displayName: 'Shared';
    icon: 'collapse';
  };
  attributes: {
    contactStatus: Schema.Attribute.Enumeration<['Active', 'Inactive']>;
    designation: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    mobile: Schema.Attribute.String;
    workPhone: Schema.Attribute.String;
  };
}

export interface DocumentsFiles extends Struct.ComponentSchema {
  collectionName: 'components_documents_files';
  info: {
    displayName: 'Files';
    icon: 'apps';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    remarks: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contacts': ContactContacts;
      'contact.shared': ContactShared;
      'documents.files': DocumentsFiles;
    }
  }
}
