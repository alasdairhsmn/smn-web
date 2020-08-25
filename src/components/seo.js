import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ post }) => {

  const title = "About" || "Something More Near";
  const description = "About" || "Social Changework";

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={"somethingmorenear.com"} />
      <meta name="description" content={description} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;