import NavBarItemPlain from "./NavBarItemPlain";
import { Session } from "next-auth";

interface SearchBarProps {
  session?: Session;
}

export default function SearchBar({ session }: SearchBarProps) {
  const JWT = session?.user.authorization as string;
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await fetch("https://ottrmate-hub.herokuapp.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Accept: "application/json",
          Authorization: JWT,
        },
        body: JSON.stringify({
          query: "{ tools { toolId, name, description, createdAt} }",
        }),
      });
      const AllTools = await res.json();
      console.log(AllTools);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NavBarItemPlain useMargin>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search Tools"
        />
      </form>
    </NavBarItemPlain>
  );
}
