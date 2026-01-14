import { CONTACTS } from "../Constants/Constants";

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="w-full sm:w-4/5 sm:mx-auto flex sm:flex-row flex-col justify-start items-center gap-8"
    >
      <h2 className="text-2xl text-center sm:text-start">Kapcsolatok:</h2>

      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {CONTACTS.map((contact) => {
          return (
            <abbr key={contact.title} title={contact.title}>
              <a href={contact.path} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${import.meta.env.BASE_URL}${contact.imgSrc}`}
                  alt={`${contact.title} icon`}
                  className="h-12  w-fit"
                />
              </a>
            </abbr>
          );
        })}
      </div>
    </div>
  );
}
