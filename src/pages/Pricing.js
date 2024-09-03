import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PricingSectionNavigationsDarkMono1 from '../components/navigations-dark-mono/PricingSectionNavigationsDarkMono1';
import PricingSectionPricingDarkColor2 from '../components/pricing-dark-color/PricingSectionPricingDarkColor2';
import PricingSectionLogoCloudsLightColor3 from '../components/logo-clouds-light-color/PricingSectionLogoCloudsLightColor3';
import PricingSectionTestimonialsDarkColor4 from '../components/testimonials-dark-color/PricingSectionTestimonialsDarkColor4';
import PricingSectionCallToActionDarkColor5 from '../components/call-to-action-dark-color/PricingSectionCallToActionDarkColor5';
import PricingSectionFooterDarkColor6 from '../components/footer-dark-color/PricingSectionFooterDarkColor6';

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

export default function Pricing() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <PricingSectionNavigationsDarkMono1 />
      <PricingSectionPricingDarkColor2 />
      <PricingSectionLogoCloudsLightColor3 />
      <PricingSectionTestimonialsDarkColor4 />
      <PricingSectionCallToActionDarkColor5 />
      <PricingSectionFooterDarkColor6 />
    </React.Fragment>
  );
}

