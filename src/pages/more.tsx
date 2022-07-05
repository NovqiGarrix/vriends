import type { NextPage } from "next";
import Head from "next/head";
import { IMetas } from "../components/Meta";
import {
  Advantage,
  CanDoList,
  Footer,
  Header,
  Meta,
  MoreAboutMetaverse,
  WhoCreated,
} from "../components";

const Home: NextPage = () => {
  const metas: IMetas = {
    description:
      "Metaverse is an Augmented Reality (AR) technology that allows individuals to interact with other individuals virtually.",
    image: "/logo.png",
    title: "More About Metaverse - Vriends",
    url: "/more",
  };

  return (
    <div className="bg-bg min-h-screen overflow-x-hidden">
      <Head>
        <title>{metas.title}</title>
        <Meta
          description={metas.description}
          image={metas.image}
          title={metas.title}
          url={metas.url}
        />
      </Head>

      <main className="py-10 md:py-8">
        <Header />
        <div className="px-7 md:px-16 lg:px-[120px]">
          <MoreAboutMetaverse />
          <WhoCreated />
          <Advantage />
          <CanDoList />
          {/* A Hairline as divider between main content and footer */}
          <div className="w-full h-[1px] bg-iconColor/20 my-5 mt-14 lg:my-7 lg:mt-12" />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
