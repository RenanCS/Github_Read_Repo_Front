import React from "react";

type Translation = {
  singular: string;
  plural: string;
};

export type LanguageCode = {
  fr: string;
  en: string;
  'pt-BR': string;
};

export type TranslationKeys = {
  ROTAPROCURARUSUARIO: Translation
  PROCURAR: Translation
  COLUNANOME: Translation
  COLUNAESTRELAS: Translation
  LINHASPORPAGINA: Translation
  LINGUAGENS: Translation  
  NOMEEMBRANCO: Translation
}


export type DefaultTranslation = {
  [key in keyof TranslationKeys]: Translation;
};

export interface ContextData {
  languageCode: keyof LanguageCode; 
  translate(key: keyof TranslationKeys, count?: number): string;
  changeLanguage(language: keyof LanguageCode): void;
}


export interface I18nProviderProps {
  children: React.ReactNode
}