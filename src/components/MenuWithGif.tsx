import Image from "next/image";
import Link from "next/link";

import githubGif from "../assets/githubGif.gif";
import gutsGif from "../assets/guts.gif";
import projectsGif from "../assets/projectsGifgif.gif";
import socialGif from "../assets/socialGif.gif";

export default function MenuWithGif() {
  return (
    <>
      <section className="group mt-6 flex h-48 w-48 rounded-2xl border-none bg-glass shadow-redWine backdrop-blur-md">
        <Link href="/projects">
          <Image
            src={projectsGif}
            alt="Projetos"
            className="h-full select-none rounded-xl object-cover object-left opacity-80 shadow-2xl drop-shadow-xl"
          />
          <footer className="translate-y-hoverFooter bg-footerRgba absolute bottom-10 left-0 right-0 opacity-0 transition-all ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <strong className="absolute bottom-16 left-14 h-full w-full text-lg text-white">
              Projetos
            </strong>
          </footer>
        </Link>
      </section>

      <section className="group mt-6 flex h-48 w-48 rounded-2xl border-none bg-glass shadow-redWine backdrop-blur-md">
        <Link target="_blank" href="https://github.com/YuriPiresG">
          <Image
            src={githubGif}
            alt="Github"
            className="h-full select-none rounded-xl object-cover object-left shadow-2xl drop-shadow-xl"
          />
          <footer className="bg-footerRgba absolute bottom-10 left-0 right-0 opacity-100">
            <strong className="mb-10 flex items-center justify-center text-lg text-white">
              Github
            </strong>
          </footer>
        </Link>
      </section>

      <section className="group mb-6 flex h-48 w-48 rounded-2xl border-none bg-glass shadow-redWine backdrop-blur-md">
        <Link href="/socials">
          <Image
            src={socialGif}
            alt="Redes Sociais"
            className="h-full select-none rounded-xl object-cover object-left opacity-70 shadow-2xl drop-shadow-xl"
          />
          <footer className="bg-footerRgba absolute bottom-10 left-0 right-0 opacity-100">
            <strong className="mb-10 flex items-center justify-center text-lg text-white">
              Redes Sociais
            </strong>
          </footer>
        </Link>
      </section>
      <section className="group mb-6 flex h-48 w-48 rounded-2xl border-none bg-glass shadow-redWine backdrop-blur-md">
        <Link href="/hobbies">
          <Image
            src={gutsGif}
            alt="Hobbies"
            className="h-full select-none rounded-xl object-cover object-left opacity-90 shadow-2xl drop-shadow-xl"
          />
          <footer className="bg-footerRgba absolute bottom-10 left-0 right-0 opacity-100">
            <strong className="mb-10 flex items-center justify-center text-lg text-white">
              Hobbies
            </strong>
          </footer>
        </Link>
      </section>
    </>
  );
}
