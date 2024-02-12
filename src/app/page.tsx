import AboutMe from "@/components/aboutme";
import Footer from "@/components/footer";
import HardSkills from "@/components/hardskills";
import Header from "@/components/header";
import Initial from "@/components/initial";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col container m-auto px-24">
        <Initial />
        <AboutMe />
        <HardSkills />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
