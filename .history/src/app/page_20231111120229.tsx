import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-around space-x-7 items-center w-[80%] p-24">
      <div><Image src={./logo.png}></div></div>
      <h1 className="font-bold text-5xl mb-5 text-yellow-400">
        Bimaun Technologies
      </h1>
      <p>
        A dynamic tech startup, driven by a passion for innovation and a
        commitment to tackling intricate technological hurdles. As a
        forward-looking tech company, we specialize in Artificial Intelligence,
        Web and Mobile Application Dev, Cybersecurity and Blockchain
        Technologies.
      </p>
    </main>
  );
}
