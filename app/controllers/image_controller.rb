class ImageController < ApplicationController

    before_action :set_image, only: [:show, :update, :destroy]

    # GET /images
    def index
      @images = Image.all
      if !@images do
        return json_response({})
      end
      json_response(@images)
    end
  
    # POST /images
    def create
      @image = Image.create!(image_params)
      json_response(@image, :created)
    end
  
    # GET /images/:id
    def show
      json_response(@image)
    end
  
    # PUT /images/:id
    def update
      @image.update(image_params)
      head :no_content
    end
  
    # DELETE /images/:id
    def destroy
      @image.destroy
      head :no_content
    end
  
    private
  
    def image_params
      # whitelist params
      params.permit(:title, :created_by)
    end
  
    def set_image
      @image = Image.find(params[:id])
    end
end
