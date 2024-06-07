import type { Schema, Attribute } from '@strapi/strapi';

export interface ActivityActivity extends Schema.Component {
  collectionName: 'components_activity_activities';
  info: {
    displayName: 'activity';
    icon: 'walk';
  };
  attributes: {
    surf: Attribute.Boolean & Attribute.DefaultTo<false>;
    kitesurf: Attribute.Boolean & Attribute.DefaultTo<false>;
    windsurf: Attribute.Boolean & Attribute.DefaultTo<false>;
    wingfoil: Attribute.Boolean & Attribute.DefaultTo<false>;
    surf_foil: Attribute.Boolean & Attribute.DefaultTo<false>;
    kite_foil: Attribute.Boolean & Attribute.DefaultTo<false>;
    e_foil: Attribute.Boolean & Attribute.DefaultTo<false>;
    bodysurf: Attribute.Boolean & Attribute.DefaultTo<false>;
    SUP: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LangLanguages extends Schema.Component {
  collectionName: 'components_lang_languages';
  info: {
    displayName: 'languages';
    icon: 'user';
    description: '';
  };
  attributes: {
    es: Attribute.Boolean & Attribute.DefaultTo<false>;
    en: Attribute.Boolean & Attribute.DefaultTo<false>;
    fr: Attribute.Boolean & Attribute.DefaultTo<false>;
    pt: Attribute.Boolean & Attribute.DefaultTo<false>;
    de: Attribute.Boolean & Attribute.DefaultTo<false>;
    nl: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LevelLevel extends Schema.Component {
  collectionName: 'components_level_levels';
  info: {
    displayName: 'level';
    icon: 'filter';
    description: '';
  };
  attributes: {
    beginner: Attribute.Boolean & Attribute.DefaultTo<false>;
    intermediate: Attribute.Boolean & Attribute.DefaultTo<false>;
    advanced: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SeaBottomSeaBottom extends Schema.Component {
  collectionName: 'components_sea_bottom_sea_bottoms';
  info: {
    displayName: 'sea_bottom';
    icon: 'seed';
  };
  attributes: {
    sand: Attribute.Boolean & Attribute.DefaultTo<false>;
    rocks: Attribute.Boolean & Attribute.DefaultTo<false>;
    coral: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    wifi: Attribute.Boolean & Attribute.DefaultTo<false>;
    bar: Attribute.Boolean & Attribute.DefaultTo<false>;
    lockers: Attribute.Boolean & Attribute.DefaultTo<false>;
    shop: Attribute.Boolean & Attribute.DefaultTo<false>;
    showers: Attribute.Boolean & Attribute.DefaultTo<false>;
    parking: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SportsSports extends Schema.Component {
  collectionName: 'components_sports_sports';
  info: {
    displayName: 'sports';
    icon: 'walk';
    description: '';
  };
  attributes: {
    surf: Attribute.Boolean & Attribute.DefaultTo<false>;
    kitesurf: Attribute.Boolean & Attribute.DefaultTo<false>;
    windsurf: Attribute.Boolean & Attribute.DefaultTo<false>;
    wingfoil: Attribute.Boolean & Attribute.DefaultTo<false>;
    surf_foil: Attribute.Boolean & Attribute.DefaultTo<false>;
    kite_foil: Attribute.Boolean & Attribute.DefaultTo<false>;
    e_foil: Attribute.Boolean & Attribute.DefaultTo<false>;
    bodysurf: Attribute.Boolean & Attribute.DefaultTo<false>;
    SUP: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'activity.activity': ActivityActivity;
      'lang.languages': LangLanguages;
      'level.level': LevelLevel;
      'sea-bottom.sea-bottom': SeaBottomSeaBottom;
      'services.services': ServicesServices;
      'sports.sports': SportsSports;
    }
  }
}
