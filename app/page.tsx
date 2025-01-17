import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="m-4">
        <Image src="/egg.svg" width="50" height="50" alt="egg" />
      </div>
    </main>
  );
}
