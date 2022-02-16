import React from 'react';
import { Helmet } from 'react-helmet';
//Using template literals because helmet throws error

export const MetaDecorator: React.FC<MetaDecoratorProps> = ({
  title,
  description,
}) => {
  return (
    <Helmet>
      <title>{`${title}`}</title>
      <meta name="description" content={`${description}`} />
    </Helmet>
  );
};

interface MetaDecoratorProps {
  title: string;
  description: string;
}
