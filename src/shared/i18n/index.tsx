import React, { createContext, useCallback, useContext, useState } from 'react';
import { usePersistedState } from '../hooks';
import { ContextData, DefaultTranslation, I18nProviderProps, LanguageCode, TranslationKeys } from './interface';
import { brazilPortuguese, english, french } from './languages';


const I18nContext = createContext<ContextData>({} as ContextData);
const STORAGEKEY = '@GemedWeb:languageCode';

const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const selectTranslationsAndLanguageCode = useCallback((code: string) => {
    let selectedTranslations: DefaultTranslation;
    let selectedLanguageCode: keyof LanguageCode;
    const capitalizedLanguageCode = code.toUpperCase();

    switch (capitalizedLanguageCode) {
      case 'EN':
        selectedLanguageCode = 'en';
        selectedTranslations = english;
        break;
      case 'FR':
        selectedLanguageCode = 'fr';
        selectedTranslations = french;
        break;
      default:
        selectedLanguageCode = 'pt-BR';
        selectedTranslations = brazilPortuguese;
        break;
    }
    return { selectedLanguageCode, selectedTranslations };
  }, []);

  const defaultLanguageByBrowser = useCallback((): keyof LanguageCode => {
    const { selectedLanguageCode } = selectTranslationsAndLanguageCode(
      window.navigator.language,
    );
    return selectedLanguageCode;
  }, [selectTranslationsAndLanguageCode]);

  const [languageCode, setLanguageCode] = usePersistedState<keyof LanguageCode>(
    STORAGEKEY,
    defaultLanguageByBrowser(),
  );

  const defaultTranslationsByBrowser = useCallback((): DefaultTranslation => {
    const { selectedTranslations } = selectTranslationsAndLanguageCode(
      languageCode || window.navigator.language,
    );
    return selectedTranslations;
  }, [languageCode, selectTranslationsAndLanguageCode]);

  const [translations, setTranslations] = useState<DefaultTranslation>(
    defaultTranslationsByBrowser(),
  );

  const changeLanguage = useCallback(
    (languageCode: keyof LanguageCode): void => {
      const {
        selectedLanguageCode,
        selectedTranslations,
      } = selectTranslationsAndLanguageCode(languageCode);

      setLanguageCode(selectedLanguageCode);
      setTranslations(selectedTranslations);
    },
    [selectTranslationsAndLanguageCode, setLanguageCode, setTranslations],
  );

  const translate = useCallback(
    (translateKey: keyof TranslationKeys, count?: number): string => {
      const isPlural = count && count > 1;
      const translation = translations[translateKey];
      return isPlural ? translation.plural : translation.singular;
    },
    [translations],
  );


  return (
    <I18nContext.Provider value={{
      languageCode, translate, changeLanguage,
    }}
    >
      {children}
    </I18nContext.Provider>
  );
};

const useI18n = (): ContextData => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n deve ser usado dentro de um I18nProvider');
  } else {
    return context;
  }
};

export { useI18n, I18nProvider, STORAGEKEY };

