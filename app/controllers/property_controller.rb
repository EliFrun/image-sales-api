class PropertyController < ApplicationController
    
    before_action :set_property, only: [:show, :update, :destroy]

  # GET /propertys
  def index
    @propertys = Property.all
    json_response(@propertys)
  end

  # POST /propertys
  def create
    @property = Property.create!(property_params)
    json_response(@property, :created)
  end

  # GET /propertys/:id
  def show
    json_response(@property)
  end

  # PUT /propertys/:id
  def update
    @property.update(property_params)
    head :no_content
  end

  # DELETE /propertys/:id
  def destroy
    @property.destroy
    head :no_content
  end

  private

  def property_params
    # whitelist params
    params.permit(:title, :created_by)
  end

  def set_property
    @property = Property.find(params[:id])
  end

end
