export default function Logo() {
  return (
    <a href="#" className="flex items-center justify-center gap-2 p-4">
      <img
        src={`${import.meta.env.BASE_URL}favicon.png`}
        alt="Logó"
        className="h-10 w-auto"
      />
      <span className="font-semibold">Portfólióm</span>
    </a>
  );
}
