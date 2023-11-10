import Image from "next/image";
import Link from "next/link";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import {
  TbBrandHtml5,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPrisma,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVite,
} from "react-icons/tb";

import githubGif from "../assets/githubGif.gif";
import gutsGif from "../assets/guts.gif";
import socialGif from "../assets/socialGif.gif";
import projectsGif from "../assets/projectsGifgif.gif";

export default function Profile() {
  return (
    <>
      <section className="group relative col-span-2 items-center justify-center gap-3 rounded-2xl border-none bg-glass p-6 shadow-glass">
        <h1 className="text-2xl text-white">Olá! Me chamo Yuri,</h1>
        <h3 className="text-white">
          e sou um desenvolvedor
          <span className="text-green-500"> Fullstack</span>.
        </h3>
        <p className="text-gray-400">
          Atualmente estou finalizando o curso de Análise e Desenvolvimento de
          sistemas e estou Open to work! Tenho experiência com desenvolvimento
          web, utilizando ReactJS e NodeJS
        </p>
      </section>

      <section className="group  relative col-span-2 grid grid-cols-5 items-center justify-center gap-3 rounded-2xl border-none bg-glass p-6 shadow-glass">
        <h3 className="col-span-5 text-xl font-bold text-green-500">Stacks</h3>
        <h6 className="col-span-5 text-gray-400">
          Tecnologias que utilizo e tenho experiência
        </h6>
        <Link className="" href="">
          <TbBrandHtml5 className="h-full w-full text-white opacity-80 transition-opacity ease-in-out  hover:opacity-100 " />
        </Link>
        <Link className="" href="">
          <TbBrandTailwind className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
        </Link>
        <Link className="" href="">
          <TbBrandVite className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
        </Link>
        <Link className="" href="">
          <TbBrandReact className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
        </Link>
        <Link className="" href="">
          <TbBrandNextjs className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
        </Link>
        <Link className="" href="">
          <TbBrandTypescript className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
        </Link>
        <Link className="" href="">
          <TbBrandNodejs className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
        </Link>
        <Link className="" href="">
          <SiNestjs className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
        </Link>
        <Link className="" href="">
          <TbBrandPrisma className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
        </Link>
        <Link className="" href="">
          <SiPostgresql className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
        </Link>
      </section>

      {/* //TODO: transformar em componente */}

      <section className="group mt-6 flex  h-48 w-48 rounded-2xl border-none bg-glass shadow-glass backdrop-blur-md">
        <Link href="/about">
          <Image
            src={socialGif}
            alt="Redes Sociais"
            className="h-full select-none rounded-xl object-cover object-left opacity-70 shadow-2xl drop-shadow-xl"
          />
          <footer className="translate-y-hoverFooter bg-footerRgba absolute bottom-10 left-0 right-0 opacity-0 transition-all ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <strong className="absolute  bottom-16 left-14 h-full w-full text-lg text-white">
              Redes Sociais
            </strong>
          </footer>
        </Link>
      </section>

      <section className="group mt-6 flex  h-48 w-48 rounded-2xl border-none bg-glass shadow-glass backdrop-blur-md">
        <Link href="https://github.com/YuriPiresG">
          <Image
            src={githubGif}
            alt="Github"
            className="h-full select-none rounded-xl object-cover object-left opacity-90 shadow-2xl drop-shadow-xl"
          />
          <footer className="translate-y-hoverFooter bg-footerRgba absolute bottom-10 left-0 right-0 opacity-0 transition-all ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <strong className="absolute  bottom-16 left-16 h-full w-full text-lg text-white">
              Github
            </strong>
          </footer>
        </Link>
      </section>

      <section className="group mb-6 flex  h-48 w-48 rounded-2xl border-none bg-glass shadow-glass backdrop-blur-md">
        <Link href="/about">
          <Image
            src={projectsGif}
            alt="Projetos"
            className="h-full select-none rounded-xl object-cover object-left opacity-70 shadow-2xl drop-shadow-xl"
          />
          <footer className="translate-y-hoverFooter bg-footerRgba absolute bottom-10 left-0 right-0 opacity-0 transition-all ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <strong className="absolute  bottom-16 left-16 h-full w-full text-lg text-white">
              Projetos
            </strong>
          </footer>
        </Link>
      </section>

      <section className="group mb-6 flex  h-48 w-48 rounded-2xl border-none bg-glass shadow-glass backdrop-blur-md">
        <Link href="/hobbies">
          <Image
            src={gutsGif}
            alt="Hobbies"
            className="h-full select-none rounded-xl object-cover object-left opacity-90 shadow-2xl drop-shadow-xl"
          />
          <footer className="translate-y-hoverFooter bg-footerRgba absolute bottom-10 left-0 right-0 opacity-0 transition-all ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <strong className="absolute  bottom-16 left-16 h-full w-full text-lg text-white">
              Hobbies
            </strong>
          </footer>
        </Link>
      </section>
    </>
  );
}
