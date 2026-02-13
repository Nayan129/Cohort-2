let main = document.querySelector("main");
let teamName = document.querySelector("h1");
let trophy = document.querySelector("h3");
let winnerInfo = document.querySelector(".winnerPic");
let btn = document.querySelector("button");
let arr = [
  {
    team: "CSK",
    primaryColor: "yellow",
    trophies: "5",
    captain: "Mahendra Singh Dhoni",
    pic: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2024-03/Chennai%20Super%20Kings%20IPL%202024%20032524%2016x9.jpg?itok=xKVDY5xl",
    TeamFullName: "Chennai Super Kings",
  },
  {
    team: "RCB",
    primaryColor: "red",
    trophies: "1",
    captain: "Virat Kohli",
    pic: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1G2uso.img?w=1280&h=720&m=4&q=91",
    TeamFullName: "Royal Chalengers Banglore",
  },
  {
    team: "MI",
    primaryColor: "blue",
    trophies: "5",
    captain: "Rohit Sharma",
    pic: "https://www.dailypioneer.com/uploads/igallery/today-s-photo---mumbai-indians--mi--players-celebrate-with-the--ipl-2019-trophy-2-2019-05-13.jpg",
    TeamFullName: "Mumbai Indians",
  },
  {
    team: "GT",
    primaryColor: "purple",
    trophies: "2",
    captain: "Shubman Gill",
    pic: "https://www.sportzcraazy.com/wp-content/uploads/2022/12/How-did-Gujarat-Titans-win-the-IPL-2022.png",
    TeamFullName: "Gujrat Titans",
  },
  {
    team: "PBKS",
    primaryColor: "crimson",
    trophies: "0",
    captain: "Shreyash Iyar",
    pic: "https://images.mykhel.com/img/2024/03/punjab-kings-jersey-unveiling-1200-1710500059.jpg",
    TeamFullName: "Kings XI Panjab",
  },
  {
    team: "SRH",
    primaryColor: "orange",
    trophies: "1",
    captain: "pat cummins",
    pic: "https://y20india.in/wp-content/uploads/2024/04/srh-full-squad.webp",
    TeamFullName: "Sunrisers Hydrabad",
  },
  {
    team: "DC",
    primaryColor: "0",
    trophies: "0",
    captain: "Rishabh Pant",
    pic: "https://pkbnews.in/wp-content/uploads/2023/06/IPL-2024-Delhi-Capitals-DC-1-1024x576.jpg",
    TeamFullName: "Delhi Capitals",
  },
  {
    team: "LSG",
    primaryColor: "blue",
    trophies: "0",
    captain: "KL Rahul",
    pic: "https://cricketaddictor.com/wp-content/uploads/2023/04/lucknow-super-Giants.jpg",
    TeamFullName: "Lucknow Super Giants",
  },
];
btn.addEventListener("click", () => {
  let winners = Math.floor(Math.random() * arr.length);
  teamName.textContent = arr[winners].TeamFullName;
  teamName.style.textAlign = "center";
  teamName.style.fontSize = "30px";
  teamName.style.color = "Black";
  teamName.style.fontWeight = "700";
  teamName.style.fontFamily = "sans-serif";
  main.style.backgroundColor = arr[winners].primaryColor;
  trophy.textContent = arr[winners].trophies;
  winnerInfo.style.backgroundImage = `url(${arr[winners].pic})`;
  winnerInfo.style.backgroundSize = "cover";
  winnerInfo.style.backgroundPosition = "center";
});
