import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SignupSectionNavigationsDarkMono1 from '../components/navigations-dark-mono/SignupSectionNavigationsDarkMono1';
import SignupSectionSignDarkColor2 from '../components/sign-dark-color/SignupSectionSignDarkColor2';
import SignupSectionLogoCloudsLightColor3 from '../components/logo-clouds-light-color/SignupSectionLogoCloudsLightColor3';
import SignupSectionFooterDarkColor4 from '../components/footer-dark-color/SignupSectionFooterDarkColor4';

const meta = {
  title: '',
  meta: [
    {
      name: 'keywords',
      content:
        'mexican\u0020food,\u0020mexican\u0020cuisine,\u0020mexican,\u0020mexican\u0020grill,\u0020seafood,\u0020mariscos,\u0020san\u0020diego',
    },
    {
      property: 'og\u003Adescription',
      content:
        'Mexican\u0020Grill\u0020and\u0020Seafood\u0020in\u0020San\u0020Diego,\u0020California',
    },
    {
      property: 'og\u003Atitle',
      content:
        'Cotijas\u0020Mexican\u0020Grill\u0020\u0026\u0020Seafood\u0020\u002D\u0020San\u0020Diego',
    },
    {
      name: 'description',
      content:
        'Mexican\u0020Grill\u0020and\u0020Seafood\u0020in\u0020San\u0020Diego,\u0020California',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Signup() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <SignupSectionNavigationsDarkMono1 />
      <SignupSectionSignDarkColor2 />
      <SignupSectionLogoCloudsLightColor3 />
      <SignupSectionFooterDarkColor4 />
    </React.Fragment>
  );
}

