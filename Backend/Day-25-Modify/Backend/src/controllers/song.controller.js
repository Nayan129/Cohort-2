const songModel = require("../models/song.model");
const redis = require("../config/cache");
const id3 = require("node-id3");
const storageService = require("../services/storage.service");

async function uploadSongs(req, res) {
  const songBuffer = req.file.buffer;
  const { mood } = req.body;
  const tags = id3.read(songBuffer);

  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      filename: tags.title + ".mp3",
      folder: "/cohort-2/moodify/songs",
    }),
    storageService.uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/cohort-2/moodify/posters",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  await redis.del(`songs:${mood}`);

  res.status(201).json({
    message: "song created successfully",
    mood,
  });
}

//  added cache to make request to database faster
async function getSongs(req, res) {
  const { mood } = req.query;

  const cacheKey = `songs:${mood}`;

  const cachedSong = await redis.get(cacheKey);

  if (cachedSong) {
    return res.status(200).json({
      message: "songs fetched from cache",
      song: JSON.parse(cachedSong),
    });
  }

  const song = await songModel.findOne({ mood });

  await redis.set(cacheKey, JSON.stringify(song), "EX", 3600);

  res.status(200).json({
    message: "songs fetched successfully..",
    song,
  });
}
module.exports = { uploadSongs, getSongs };
