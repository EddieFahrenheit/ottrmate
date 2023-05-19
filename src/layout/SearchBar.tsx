import NavBarItemPlain from "./NavBarItemPlain";

export default function SearchBar() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      console.log(event);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NavBarItemPlain useMargin>
      <form>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search Tools"
          onSubmit={handleSubmit}
        />
      </form>
    </NavBarItemPlain>
  );
}
