import Image from "next/image";

const getDog = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const dog = await getDog();
  console.log(dog);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={dog.message} alt={dog.message} />
    </main>
  );
}
