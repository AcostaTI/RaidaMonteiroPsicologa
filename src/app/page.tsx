import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { hasLogoFile } from "@/lib/logo";

export default function HomePage() {
  return (
    <>
      <Header hasLogo={hasLogoFile} />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
