const UserCard = () => {
  const users = [
    {
      id: 1,
      title: "Swiss Alps Retreat",
      location: "Swiss Alps",
      price: 710,
      currency: "$",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      description:
        "Escape to a cozy alpine retreat with breathtaking views of snow-capped peaks and pristine valleys.",
      tags: ["Luxury Stay", "2 Day stay"],
      rating: 4.8,
      buttonText: "Reserve",
    },
    {
      id: 2,
      title: "Iceland Cabin",
      location: "Iceland",
      price: 680,
      currency: "$",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      description:
        "Cozy cabin nestled in Iceland’s breathtaking landscape, offering stunning views of mountains and Northern Lights.",
      tags: ["Top Rated", "5 Day stay"],
      rating: 4.9,
      buttonText: "Reserve",
    },
    {
      id: 3,
      title: "Tokyo Penthouse",
      location: "Tokyo, Japan",
      price: 950,
      currency: "$",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      description:
        "A sleek penthouse in the heart of Tokyo, offering luxury, skyline views, and modern comfort.",
      tags: ["Cityscape View", "Weekend Stay"],
      rating: 4.7,
      buttonText: "Reserve",
    },
    {
      id: 4,
      title: "Bali Beach Villa",
      location: "Bali, Indonesia",
      price: 620,
      currency: "$",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      description:
        "Relax in a private beachfront villa with tropical vibes, infinity pool, and ocean views.",
      tags: ["Beachfront", "3 Day stay"],
      rating: 4.9,
      buttonText: "Reserve",
    },
    {
      id: 5,
      title: "Paris Apartment",
      location: "Paris, France",
      price: 820,
      currency: "$",
      image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      description:
        "Elegant Parisian apartment close to iconic landmarks with classic interiors and city charm.",
      tags: ["City Center", "Romantic Stay"],
      rating: 4.6,
      buttonText: "Reserve",
    },
    {
      id: 6,
      title: "Maldives Villa",
      location: "Maldives",
      price: 1200,
      currency: "$",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      description:
        "Overwater villa with crystal-clear lagoon views, private deck, and unmatched luxury.",
      tags: ["Ultra Luxury", "Honeymoon"],
      rating: 5.0,
      buttonText: "Reserve",
    },
    {
      id: 7,
      title: "New York Loft",
      location: "New York, USA",
      price: 880,
      currency: "$",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      description:
        "Modern loft in Manhattan with skyline views, open interiors, and premium amenities.",
      tags: ["City View", "Business Stay"],
      rating: 4.5,
      buttonText: "Reserve",
    },
    {
      id: 8,
      title: "Santorini House",
      location: "Santorini, Greece",
      price: 760,
      currency: "$",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      description:
        "Whitewashed cliffside home with panoramic sea views and stunning sunsets.",
      tags: ["Sea View", "Couple Stay"],
      rating: 4.8,
      buttonText: "Reserve",
    },
    {
      id: 9,
      title: "Dubai Sky Villa",
      location: "Dubai, UAE",
      price: 1100,
      currency: "$",
      image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
      description:
        "Ultra-modern sky villa with private pool, city skyline views, and premium services.",
      tags: ["Luxury Stay", "Skyline View"],
      rating: 4.9,
      buttonText: "Reserve",
    },
  ];

  return (
    <>
      <div className="userContainer w-screen flex flex-wrap gap-10">
        {users.map((elem) => {
          return (
            <div
              key={elem.id}
              className="container h-90 w-1/4 px-2 pb-2 rounded-3xl flex flex-col justify-end items-start "
              style={{
                backgroundImage: `url(${elem.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="first flex gap-4">
                <h1 className="font-bold text-[23px] whitespace-nowrap">
                  {elem.title}
                </h1>
                <h3 className="px-6 py-1 rounded-xl bg-blue-600 font-medium cursor-pointer active:scale-90">
                  ${elem.price}
                </h3>
              </div>

              <div className="description p-1 font-light">
                <p>{elem.description}</p>
              </div>

              <div className="second flex gap-2">
                <button className="rounded-3xl px-3 py-1.5 mt-3 bg-gray-600 cursor-pointer active:scale-90 font-medium">
                  {elem.tags[0]}
                </button>
                <button className="rounded-3xl px-3 py-1 mt-3 bg-gray-600 cursor-pointer active:scale-90 font-medium">
                  {elem.tags[1]}
                </button>
              </div>

              <button className="last w-full bg-black mt-3 rounded-4xl py-1 font-bold text-2xl cursor-pointer active:scale-90">
                {elem.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserCard;
