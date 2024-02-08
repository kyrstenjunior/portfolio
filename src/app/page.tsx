import AboutMe from "@/components/aboutme";
import HardSkills from "@/components/hardskills";
import Header from "@/components/header";
import Initial from "@/components/initial";


export default function Home() {
  return (
    <main className="flex flex-col container m-auto">
      <Header />
      <Initial />
      <AboutMe />
      <HardSkills />
    </main>
  );
}
