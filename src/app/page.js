import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div id="content" className="max-w-screen-lg flex flex-wrap p-7 w-screen h-[85dvh] items-center justify-evenly">
        <div className="">
          <h2 className="block font-averia text-3xl text-textSecondary justify-start">Hey, it's</h2>
          <h1 className="block leading-none justify-start">Isabella :)</h1>
        </div>

        <div className="group">
          <Image src="/images/smile1.png" width={200} height={200} className="group-hover:hidden" alt="face"></Image>
          <Image src="/images/smile3.png" width={200} height={200} className="hidden group-hover:block" alt="face"></Image>
        </div>
      </div>
    </div>
  );
}
