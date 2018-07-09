module Api::V1
  class PhotosController < ApplicationController
    def index
      @photos = Photo.all
      render json: @photos
    end

    def show
      @photo = Photo.find(params[:id])
    end

    def new
      @photo = Photo.new
    end

    def create
      @photo = Photo.new(photo_params)
      if @photo.save
        flash[:success] = 'Photo sucessfully posted.'
        redirect_to @photo
      else
        flash[:danger] = 'There was a problem posting the photo.'
        render 'new'
      end
    end
  end
end
