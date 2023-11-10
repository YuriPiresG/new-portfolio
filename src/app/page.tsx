import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-x-hidden items-center justify-center">
      <main className="bg-glass-effect mx-3 mt-16 grid w-full max-w-[50rem] grid-cols-2 items-center justify-center gap-3">
        <Profile />
      </main>
    </div>
  );
}
