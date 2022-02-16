import React from 'react';
import { Helmet } from 'react-helmet';
//Using template literals because helmet throws error

/**<meta property="og:description" content={description} />
    <meta property="og:image" content={metaDecorator.hostname + imageUrl} />
    <meta
      property="og:url"
      content={metaDecorator.hostname + window.location.pathname + window.location.search}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={imageAlt} />
    <meta name="twitter:site" content={metaDecorator.twitterUsername} /> */

export const MetaDecorator: React.FC<MetaDecoratorProps> = ({
  title,
  description,
  imgUrl,
  imgAlt,
}) => {
  return (
    <Helmet>
      <title>{`${title}`}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={`${description}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      <meta
        property="og:url"
        content={window.location.pathname + window.location.search}
      />
      <meta name="twitter:image:alt" content={imgAlt} />
    </Helmet>
  );
};

interface MetaDecoratorProps {
  title: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
}
