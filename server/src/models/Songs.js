module.exports = mongoose => {
  const Song = {
    model: null,
    name: 'Song'
  }
  const schema = new mongoose.Schema({
    title: {
      type: String,
      unique: true
    },
    artist: String,
    genre: String,
    album: String,
    albumImageUrl: String,
    youtubeId: String,
    lyrics: String,
    tune: String,
    caps: String,
    pattern: String,
    tab: Array
  })
  Song.model = mongoose.model(Song.name, schema)
  return Song
}
