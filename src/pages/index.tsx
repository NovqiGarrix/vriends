import type { NextPage } from "next";
import Head from "next/head";
import { IMetas } from "../components/Meta";
import {
  AboutMetaverse,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Meta,
  Subscribe,
  Testimonials,
} from "../components";

const Home: NextPage = () => {
  const metas: IMetas = {
    description:
      "Vriends is the evolution of the Virtual world. With us, you don't have to worry if you have trouble exploring the virtual world.",
    image: "/logo.png",
    title: "Vriends - The Virtual World",
    url: "/",
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
        <Hero />
        <div className="px-7 md:px-16 mt-16 lg:px-32">
          <AboutMetaverse />
          <HowItWorks />
          <Testimonials />
          <Subscribe />

          {/* A Hairline as divider between main content and footer */}
          <div className="w-full h-[1px] bg-iconColor/50 my-5 lg:my-7 lg:mt-12" />

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
