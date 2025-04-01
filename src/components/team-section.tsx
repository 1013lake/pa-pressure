const people = [
  {
    name: "Garfield",
    role: "Co-Founder / CEO",
    imageUrl: "pressurelogow.png",
    altText: "Leslie Alexander portrait",
  },
  // Add more people here...
];

export default function Team() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Meet Our Leadership
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name} className="flex items-center gap-x-6">
              <img
                alt={person.altText} // Make sure to add descriptive alt text for accessibility
                src={person.imageUrl}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold text-orange-500">
                  {person.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
