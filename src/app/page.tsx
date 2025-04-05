import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image src="/apple-icon.png" width={128} height={128} alt="logo" />
        Hello, World!
        <br />
        안녕하세요
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Have a good day~
      </footer>
    </div>
  );
}
