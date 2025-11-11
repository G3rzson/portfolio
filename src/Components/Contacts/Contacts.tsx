import { CONTACTS } from "./contact";

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="w-full sm:w-4/5 mx-0 sm:mx-auto px-4 sm:px-0 pt-24"
    >
      <h2 className="text-2xl">Kapcsolatok:</h2>

      <div className="flex flex-row flex-wrap justify-center items-center gap-4 my-8">
        {CONTACTS.map((contact) => {
          return (
            <div
              key={contact.title}
              className="flex items-center justify-center flex-col"
            >
              <p className="text-center mb-2">{contact.title}</p>
              <a href={contact.path} target="_blank">
                <img
                  src={contact.imgSrc}
                  alt={`${contact.title} icon`}
                  className="h-12  w-fit"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
