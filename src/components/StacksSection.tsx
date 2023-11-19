import Link from "next/link";
import React from "react";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import {
  TbBrandHtml5,
  TbBrandTailwind,
  TbBrandVite,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandNodejs,
  TbBrandPrisma,
} from "react-icons/tb";

export default function StacksSection() {
  return (
    <section className="group relative col-span-2 grid grid-cols-5 items-center justify-center gap-3 rounded-2xl border-none bg-redWine p-6 shadow-redWine">
      <h3 className="col-span-5 text-xl font-bold text-green-500">Stacks</h3>
      <h6 className="col-span-5 text-white">
        Tecnologias que utilizo e tenho experiência
      </h6>

      <TbBrandHtml5 className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
      <TbBrandTailwind className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
      <TbBrandVite className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />

      <TbBrandReact className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
      <TbBrandNextjs className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
      <TbBrandTypescript className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
      <TbBrandNodejs className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
      <SiNestjs className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
      <TbBrandPrisma className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
      <SiPostgresql className="h-full w-full text-white opacity-80 transition-opacity ease-in-out hover:opacity-100 " />
    </section>
  );
}
