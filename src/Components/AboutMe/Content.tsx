export default function Content() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl">Pál Gerzson</h1>
      <h2 className="text-2xl">Full-Stack fejlesztő</h2>

      <a
        href="/file/PG.pdf"
        target="_blank"
        className="bg-cyan-500 hover:bg-cyan-400 cursor-pointer duration-300 w-fit p-4 rounded-md flex flex-row-reverse gap-4 items-center justify-center"
      >
        Önéletrajz
        <img
          src={`${import.meta.env.BASE_URL}icons/download.svg`}
          alt="nyíl"
          width={24}
        />
      </a>
    </div>
  );
}
