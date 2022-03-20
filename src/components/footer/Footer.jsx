import { FooterLinks } from "data";
import { FooterPageLinksContainer } from "./FooterPageLinksContainer";
import { FooterSocialLinksContainer } from "./FooterSocialLinksContainer";

const Footer = () => {
  const { pageLinks, socialLinks } = FooterLinks;

  return (
    <footer className="bg-red-50 min-h-15">
      <div className="container flex flex-wrap justify-c-sa py-1p5 px-2">
        <FooterPageLinksContainer pageLinks={pageLinks} />
        <FooterSocialLinksContainer socialLinks={socialLinks} />
      </div>
    </footer>
  );
};

export { Footer };
