class ArtistsController < ApplicationController
  before_action :set_billboard

  # Model name - Artist
  def index
    @artists = @billboard.artists
    render component: 'Artists', props: { billboard: @billboard, artists: @artists }
  end

  def show
    @artist = @billboard.artist.find(params[:id])
    render component: 'Artist', props: { billboard: @billboard, artist: @artist }
  end

  def new
    @artist = @billboard.artists.new
    render component: 'ArtistNew', props: { billboard: @billboard, artist: @artist }
  end

  def create
    @artist = @billboard.artists.new(artist_params)
    if @artist.save
      redirect_to billboards_path
    else
      render component: 'ArtistNew', props: { billboard: @billboard, artist: @artist }
    end
  end

  def edit
    @artist = @billboard.artists.find(params[:id])
    render component: 'ArtistEdit', props: { billboard: @billboard, artist: @artist }
  end

  def update
    @artist = @billboard.artists.find(params[:id])
    if @artist.update(artist_params)
      redirect_to billboards_path
    else
      render component: 'ArtistEdit', props: { billboard: @billboard, artist: @artist }
    end
  end

  def destroy
    @artist = @billboard.artists.find(params[:id])
    @artist.destroy
    redirect_to billboards_path
  end

  private 
    def set_billboard
      @billboard = Billboard.find(params[:id])
    end

    def artist_params
      params.require(:artist).permit(:title, :body)
    end
end
