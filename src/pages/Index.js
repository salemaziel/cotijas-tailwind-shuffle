import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersDarkColor1 from '../components/headers-dark-color/IndexSectionHeadersDarkColor1';
import IndexSectionHeadersLightMono11 from '../components/headers-light-mono/IndexSectionHeadersLightMono11';
import IndexSection__structures12 from '../components/__structures/IndexSection__structures12';
import IndexSectionFeaturesDarkColor3 from '../components/features-dark-color/IndexSectionFeaturesDarkColor3';
import IndexSectionCallToActionDarkColor4 from '../components/call-to-action-dark-color/IndexSectionCallToActionDarkColor4';
import IndexSectionTestimonialsDarkColor5 from '../components/testimonials-dark-color/IndexSectionTestimonialsDarkColor5';
import IndexSectionFooterDarkColor6 from '../components/footer-dark-color/IndexSectionFooterDarkColor6';
import IndexSection__structures8 from '../components/__structures/IndexSection__structures8';

const meta = {
  title:
    'Cotijas\u0020Mexican\u0020Grill\u0020\u0026\u0020Seafood\u0020\u002D\u0020Fairmount\u0020St\u0020San\u0020Diego\u0020CA',
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

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersDarkColor1 />
      <IndexSectionHeadersLightMono11 />
      <IndexSection__structures12 />
      <IndexSectionFeaturesDarkColor3 />
      <IndexSectionCallToActionDarkColor4 />
      <IndexSectionTestimonialsDarkColor5 />
      <IndexSectionFooterDarkColor6 />
      <IndexSection__structures8 />
    </React.Fragment>
  );
}

