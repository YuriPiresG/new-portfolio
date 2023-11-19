import { minutesToHours } from "@/utils/utilities";
import Image from "next/image";
import Link from "next/link";
import { FaSteam } from "react-icons/fa";

export default async function Hobbies() {
  const profileData = await getProfileData();
  const gameData = await getProfileGamesData();
  console.log(gameData.response.games[0]);
  // console.log(profileData.response.players[0]);
  let firstGameHoursInTwoWeeks = minutesToHours(
    gameData.response.games[0].playtime_2weeks,
  );
  let firstGameHoursTotal = minutesToHours(
    gameData.response.games[0].playtime_forever,
  );
  const firstGameHash = gameData.response.games[0].img_icon_url;
  const firstGameAppId = gameData.response.games[0].appid;

  let secondGameHoursInTwoWeeks = minutesToHours(
    gameData.response.games[1].playtime_2weeks,
  );
  let secondGameHoursTotal = minutesToHours(
    gameData.response.games[1].playtime_forever,
  );
  const secondGameHash = gameData.response.games[1].img_icon_url;
  const secondGameAppId = gameData.response.games[1].appid;

  //media.steampowered.com/steamcommunity/public/images/apps/{appid}/{hash}.jpg

  return (
    <>
      <h1 className="mx-6 w-full text-2xl text-white">
        <FaSteam className="mx-2 mb-1 inline-block" />
        Steam Profile
      </h1>
      <section className="bg-redWine shadow-redWine col-span-2 mx-6 grid grid-cols-2 items-center justify-center gap-3 rounded-2xl border-none p-6">
        <Image
          src={profileData.response.players[0].avatarfull}
          width={184}
          height={184}
          className="rounded-xl"
          alt="Hobbies"
        />
        <div className="grid items-center gap-10">
          <p className="ml-1  text-3xl font-bold text-zinc-200">
            {profileData.response.players[0].personaname}
          </p>
          <Link href="https://steamcommunity.com/id/FateYuri/">
            <button className="group flex h-20 items-center justify-center rounded-xl border bg-black text-white transition-colors ease-in-out hover:border-black hover:bg-slate-300 ">
              <span className="mx-3 font-semibold transition-colors ease-in-out group-hover:text-black ">
                Visite o meu perfil
              </span>
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-redWine shadow-redWine col-span-2 mx-6 grid grid-cols-2 items-center justify-center gap-3 rounded-2xl border-none p-6">
        <div className="flex h-full w-full">
          <Image
            src={`https:/media.steampowered.com/steamcommunity/public/images/apps/${firstGameAppId}/${firstGameHash}.jpg`}
            width={50}
            height={50}
            className="absolute mt-1 rounded-xl"
            alt="Game Icon"
          />
        </div>
        <p className="cols-span-2  -ml-20 text-xl  font-bold text-zinc-200">
          {gameData.response.games[0].name}
        </p>
        <div className="flex w-80 items-center justify-center pr-4 ">
          <p className="ml-1  text-sm font-bold text-zinc-200">
            Tempo de jogo total:
            <span className="text-green-500"> {firstGameHoursTotal}</span>
          </p>
          <p className="ml-1 text-sm font-bold text-zinc-200">
            Tempo de jogo nas últimas 2 semanas:
            <span className="text-green-500"> {firstGameHoursInTwoWeeks}</span>
          </p>
        </div>
      </section>
    </>
  );
}

async function getProfileData() {
  const res = await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=76561198051862159`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getProfileGamesData() {
  const res = await fetch(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=76561198051862159&format=json`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getOwnedGamesData() {
  const res = await fetch(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=76561198051862159&format=json`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
