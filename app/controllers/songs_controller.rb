class SongsController < ApplicationController
  before_action :set_artist
  def index
    # @comments = Comment.all
    @songs = @artist.songs
    render component: 'Songs', props: { arist: @artist, songs: @songs }
  end

  def show
    @song = @artist.songs.find(params[:id])
    render component: 'Song', props: { artist: @artist, song: @song }
  end

  def new
    @song = Song.new
    render component: 'SongNew', props: {artist: @artist, song: @song}
  end

  def edit
    @song = Song.find(params[:id])
    render component: 'SongEdit', props: { artist: @artist, song: @song}
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      redirect_to billboards_path
    else
      render component: 'SongNew', props: {artist: @artist, song: @song}
    end
end

def update
  @song = Song.find(params[:id])
  if @song.update(song_params)
    redirect_to billboards_path
  else
    render component: 'SongEdit', props: {artist: @artist, song: @song}
  end
end

def destroy
  @song = @artists.songs.find(params[:id])
  @song.destroy
  redirect_to artists_path
end

private 
  def set_artists
    @artist = Artist.find(params[:artist_id])
  end

  def song_params
    params.require(:song).permit(:title, :body)
  end
end