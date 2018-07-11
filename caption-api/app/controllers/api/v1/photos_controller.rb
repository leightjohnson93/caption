module Api::V1
  class PhotosController < ApplicationController
    def index
      @photos = Photo.order("created_at DESC")
      render json: @photos
    end

    def create
      @photo = Photo.create(photo_params)
    end

    def update
      @photo = Photo.find(params[:id])
      @idea.update_attributes(photo_params)
      render json: @photo
    end

    def show
      render json: @photo
    end

    private
      def photo_params
        params.require(:photo).permit(:caption, :image)
      end
  end
end
