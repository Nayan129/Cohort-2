const reelsData = [
  {
    id: 1,
    video:
      "https://www.statuszon.com/wp-content/uploads/2024/12/The-Inspiring-Life-Of-Premanand-Govind-Sharan-Status-Videos.mp4",
    creator: "Premanand Maharaj",
    profileImg: "https://wallpapercave.com/wp/wp13940258.jpg",
    desc: "Premanand ji Maharaj aaye revrati mein anand barsane 🌸",
    liked: true,
    likesCount: 1250,
    commentsCount: 240,
    sharesCount: 80,
    followed: true,
  },
  {
    id: 2,
    video:
      " https://www.statuszon.com/wp-content/uploads/2024/12/Premanand-Ji-Maharaj-A-Voice-For-Peace-Status-Videos.mp4",
    creator: "Premanand Maharaj",
    profileImg: "https://wallpapercave.com/wp/wp13940258.jpg",
    desc: "Radha Rani ka kirtan – mann ko shanti milegi ❤️",
    liked: false,
    likesCount: 986,
    commentsCount: 110,
    sharesCount: 45,
    followed: true,
  },
  {
    id: 3,
    video:
      "https://www.statuszon.com/wp-content/uploads/2025/07/Khatu-Shyam-Full-Screen-Status-To-Share-Everyday.mp4",
    creator: "JayShreeShyam",
    profileImg: "https://wallpapercave.com/wp/wp8184205.jpg",
    desc: "Shyam ki bansuri aur prem ras 🎶",
    liked: false,
    likesCount: 2200,
    commentsCount: 540,
    sharesCount: 190,
    followed: false,
  },
  {
    id: 4,
    video:
      "https://www.statuszon.com/wp-content/uploads/2025/02/Latest-Salasar-Balaji-Beautiful-Status-Videos.mp4",
    creator: "Premanand Maharaj",
    profileImg: "https://wallpapercave.com/wp/wp13940258.jpg",
    desc: "Prem se bolo Radhe Radhe 🙏",
    liked: true,
    likesCount: 3400,
    commentsCount: 620,
    sharesCount: 210,
    followed: true,
  },
  {
    id: 5,
    video:
      "https://www.statuszon.com/wp-content/uploads/2024/09/Radha-Rani-Lage-Status-HD-Full-Screen-Videos.mp4",
    creator: "Radha Krishna",
    profileImg: "https://wallpapercave.com/wp/wp4676588.png",
    desc: "Vrindavan ki hawa, Krishna ka naam 🌼",
    liked: false,
    likesCount: 1580,
    commentsCount: 210,
    sharesCount: 70,
    followed: false,
  },
  {
    id: 6,
    video:
      "https://www.statuszon.com/wp-content/uploads/2025/02/Mere-Baba-Short-Whatsapp-Status-Videos.mp4",
    creator: "Lord Shiva",
    profileImg: "https://wallpapercave.com/wp/wp13940258.jpg",
    desc: "Maharaj ji ka pavitra pravachan, mann ko lagao Bhagwan me.",
    liked: true,
    likesCount: 780,
    commentsCount: 95,
    sharesCount: 35,
    followed: true,
  },
  {
    id: 7,
    video:
      "https://www.statuszon.com/wp-content/uploads/2025/03/Happy-Ram-Navami-2025-The-Day-Of-Lord-Rams-Arrival-Videos-Status.mp4",
    creator: "Shree Ram",
    profileImg: "https://wallpapercave.com/wp/wp9084242.jpg",
    desc: "Har Har Mahadev 🔱 Shiv dhun 💥",
    liked: false,
    likesCount: 5400,
    commentsCount: 880,
    sharesCount: 330,
    followed: false,
  },
  {
    id: 8,
    video:
      "https://www.statuszon.com/wp-content/uploads/2024/12/Premanand-Ji-Maharaj-A-Life-Of-Service-Status-Videos.mp4",
    creator: "Premanand Maharaj",
    profileImg: "https://wallpapercave.com/wp/wp13940258.jpg",
    desc: "Bhajan me prem ho tabhi Bhagwan milte hain ✨",
    liked: false,
    likesCount: 1100,
    commentsCount: 160,
    sharesCount: 66,
    followed: true,
  },
  {
    id: 9,
    video:
      "https://www.statuszon.com/wp-content/uploads/2024/08/Naina-Jo-Mile-Hai-Sarkar-Se-Song-Lyrics-Video-Status.mp4",
    creator: "Lord Krishna",
    profileImg: "https://wallpapercave.com/wp/wp7157769.jpg",
    desc: "Yashoda ke lal ki murli ka madhur sur 🎵",
    liked: true,
    likesCount: 4600,
    commentsCount: 720,
    sharesCount: 280,
    followed: false,
  },
  {
    id: 10,
    video:
      "https://www.statuszon.com/wp-content/uploads/2025/03/Ram-Navami-2025-Festival-Wishes-Status-Videos.mp4",
    creator: "Jay Shree Ram",
    profileImg: "https://wallpapercave.com/wp/wp13940258.jpg",
    desc: "Ras mein doob jao, Maharaj ji ka madhur kirtan ❤️🔥",
    liked: false,
    likesCount: 2100,
    commentsCount: 340,
    sharesCount: 120,
    followed: true,
  },
];

let allReels = document.querySelector(".all-reels");

function addData() {
  let data = "";

  reelsData.forEach((dets, idx) => {
    data = data += ` <div class="reels">
            <video loop playsinline preload="none" src=${dets.video}></video>

            <!-- its a bottom section for profile description and follow/unfollow -->

            <div class="reels-bottom">
              <div class="topBottom">
                <img src=${dets.profileImg} alt="" />
                <h2>${dets.creator}</h2>
                <button id=${idx} class="follow">${
      dets.followed ? "Unfollow" : "Follow"
    }</button>
              </div>
              <p class="desc">${dets.desc}</p>
            </div>
            <!-- icons section -->
            <div class="all-icons">
              <div class="like-icon">
                <h2>${
                  dets.liked
                    ? '<i class="ri-heart-fill" style="color:red;"></i>'
                    : '<i class="ri-heart-line"></i>'
                }
                </h2>
                <h6 id=${idx}>${dets.likesCount}</h6>
              </div>
              <div class="comment-icon">
                <h2><i class="ri-chat-3-line"></i></h2>
                <h6>${dets.commentsCount}</h6>
              </div>
              <div class="share-icon">
                <h2><i class="ri-share-line"></i></h2>
                <h6>${dets.sharesCount}</h6>
              </div>
              <div class="menu-icon">
                <h2><i class="ri-more-2-fill"></i></h2>
              </div>
            </div>
          </div>`;
  });
  allReels.innerHTML = data;
}
addData();

allReels.addEventListener("click", function (dets) {
  if (!reelsData[dets.target.id].liked) {
    reelsData[dets.target.id].likesCount++;
    reelsData[dets.target.id].liked = true;
    addData();
  } else {
    reelsData[dets.target.id].likesCount--;
    reelsData[dets.target.id].liked = false;
    addData();
  }
});

function handleVideoPlay() {
  let videos = document.querySelectorAll("video");

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        let video = entry.target;

        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    },
    { threshold: 0.6 }
  );

  videos.forEach((video) => observer.observe(video));
}

addData();
handleVideoPlay();
