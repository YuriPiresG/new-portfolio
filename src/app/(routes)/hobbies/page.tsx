import Image from "next/image";
import Link from "next/link";
import { FaSteam } from "react-icons/fa";

export default async function Hobbies() {
  const profileData = await getProfileData();
  const gameData = await getProfileGamesData();
  console.log(gameData.response.games[1]);
  console.log(profileData.response.players[0]);
  return (
    <>
      <h1 className="mx-6 w-full text-2xl text-white">
        <FaSteam className="mx-2 mb-1 inline-block" />
        Steam Profile
      </h1>
      <section className="col-span-2 mx-6 grid grid-cols-2 items-center justify-center gap-3 rounded-2xl border-none bg-glass p-6 shadow-glass">
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
