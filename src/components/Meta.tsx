import { Fragment, FunctionComponent } from "react";

export interface IMetas {
  image: string;
  url: string;
  description: string;
  title: string;
}

const Meta: FunctionComponent<IMetas> = (props) => {
  const { description, image, title, url } = props;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <Fragment>
      <meta name="description" content={description} />
      <meta name="image" content={`${BASE_URL}${image}`} />
      <meta name="url" content={`${BASE_URL}${url}`} />

      {/* Open Grapth Tags */}
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${BASE_URL}/logo.png`} />
      <meta property="og:url" content={BASE_URL} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@novqigarrix" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/logo.png`} />
    </Fragment>
  );
};

export default Meta;
