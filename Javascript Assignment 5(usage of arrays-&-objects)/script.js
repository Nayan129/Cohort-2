let arr = [
  {
    fullname: "Aarav Sharma",
    age: 28,
    profession: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "A passionate coder who loves solving complex problems and contributing to open-source projects.",
  },
  {
    fullname: "Priya Singh",
    age: 25,
    profession: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "Creative designer with a flair for minimalistic and modern designs. Loves photography and travel.",
  },
  {
    fullname: "Rohan Verma",
    age: 30,
    profession: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    description:
      "Expert in social media campaigns and brand strategy. Enjoys analytics and optimizing campaigns for results.",
  },
  {
    fullname: "Sneha Kulkarni",
    age: 27,
    profession: "Content Writer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description:
      "Writes engaging content for blogs, websites, and social media. Passionate about storytelling and learning new topics.",
  },
  {
    fullname: "Aditya Joshi",
    age: 32,
    profession: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    description:
      "Focuses on creating intuitive user experiences. Loves experimenting with new UI patterns and tools.",
  },
  {
    fullname: "Kavya Mehta",
    age: 26,
    profession: "Front-end Developer",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    description:
      "Specializes in building responsive and dynamic web applications using React and modern JavaScript frameworks.",
  },
  {
    fullname: "Siddharth Rao",
    age: 29,
    profession: "Data Analyst",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    description:
      "Analyzes complex datasets to provide actionable insights. Passionate about data visualization and automation.",
  },
  {
    fullname: "Ananya Kapoor",
    age: 24,
    profession: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    description:
      "Experienced in leading cross-functional teams and driving product strategy from ideation to launch.",
  },
  {
    fullname: "Devansh Patil",
    age: 31,
    profession: "Full-stack Developer",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    description:
      "Builds scalable and efficient web applications. Enjoys learning new technologies and improving user experiences.",
  },
];

let main = document.querySelector("main");
let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
main.appendChild(cardContainer);

arr.forEach((dets) => {
  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${dets.image}" alt="${dets.fullname}">
    <h2>${dets.fullname}</h2>
    <h4>${dets.profession}</h4>
    <p>${dets.description}</p>
    <button>View More</button>
  `;

  cardContainer.appendChild(card);
});


// arr.forEach((dets) => {
//   let main = document.querySelector("main");
//   cardContainer.innerHTML = ` <div class="card">
//         <img src="${dets.image}" alt="">

//         <h2>${dets.fullname}</h2>
//         <h4>${dets.profession}</h4>
//         <p>${dets.description}</p>
//         <button>View More</button>
//     </div>`;
//   main.appendChild(cardContainer);
// });
