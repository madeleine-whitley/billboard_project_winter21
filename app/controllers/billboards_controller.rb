class BillboardsController < ApplicationController
  before_action :set_billboard, only: [:show, :edit, :update, :destroy]

  # user
  def index
    @billboards = Billboard.all 
    render component: 'Billboards', props: { billboards: @billboards }
  end

  def show
    render component: 'Billboard', props: { billboard: @billboard }
  end

  def new
    @billboard = Billboard.new
    render component: 'BillboardNew', props: { billboard: @billboard }
  end

  def create
    @billboard = Billboard.new(billboard_params)
    if @billboard.save
      redirect_to root_path
    else
      render component: 'BillboardNew', props: { billboard: @billboard }
    end
  end

  def edit
    render component: 'BillboardEdit', props: { billboard: @billboard }
  end

  def update 
    if @billboard.update(billboard_params)
      redirect_to root_path
    else
      render component: 'BillboardEdit', props: { billboard: @billboard }
    end
  end

  def destroy
    @billboard.destroy
    redirect_to root_path
  end

  private
    def billboard_params
      params.require(:billboard).permit(:name) 
    end

    def set_billboard
      @billboard = Billboard.find(params[:id])
    end
end
