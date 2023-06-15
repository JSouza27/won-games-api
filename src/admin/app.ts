import AuthLogoDark from "./extensions/logo_won_dark.svg";
import AuthLogoWhite from "./extensions/logo_won_white.svg";
import favicon from "./extensions/favaicon.svg";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    auth: {
      logo: AuthLogoDark,
    },
    menu: {
      logo: AuthLogoWhite,
    },
    head: {
      favicon: favicon,
    },
    tutorials: false,
  },
  bootstrap(app) {
    console.log(app);
  },
};
