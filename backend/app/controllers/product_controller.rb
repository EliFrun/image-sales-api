class ProductController < ApplicationController

    before_action :set_product, only: [:show, :update, :destroy]

    # GET /product
    def index
      @products = Product.all
      resp = @products.map do |pr|
        {
          product_id: pr[:product_id],
          name: pr[:name],
          quantity: pr[:quantity],
          price: pr[:price],
          description: pr[:description]
        }
      end
      json_response({products: resp})
    end

    # POST /product
    def create
      products = JSON.parse(request.body.read).deep_symbolize_keys![:products]
      product_list = []
      products.each do |pr|
          # all keys present
          if !%i[product_id name quantity price description].all? {|s| pr.key? s} then
            next
          end
          # price is positive and non negative product
          next unless pr[:price] > 0 && pr[:quantity] >= 0
          # make new product entry
          begin
            Product.create!(
                id: pr[:product_id],
                product_id: pr[:product_id],
                name: pr[:name],
                quantity: pr[:quantity],
                price: pr[:price],
                description: pr[:description]
            )
            product_list << pr[:name]
          rescue => e
            # entry exists
          end
      end
      json_response({created: product_list}, :created)
    end

    # GET /product/:id
    def show
      @Product = Product.find_by(product_id: params[:id])
      if !@Product then
        return json_response({error: "product does not exist"})
      end
      json_response(
        {
            id: @Product[:product_id],
            product_id: @Product[:product_id],
            name: @Product[:name],
            quantity: @Product[:quantity],
            price: @Product[:price],
            description: @Product[:description]
        }
      )
    end

    # PUT /product/:id
    # not implemented
    def update
      head :no_content
    end

    # DELETE /product/:id
    def destroy
      Product.find_by(product_id: params['id']).destroy
      json_response({success: "product deleted successfully"})
    end

    # GET /product/csv
    def return_csv
      require 'csv'
      csv_string = CSV.generate do |acc|
        acc << [ 'product_id', 'name', 'quantity', 'price', 'description' ]
        @products = Product.all
        @products.each do |pr|
          acc << [ pr[:product_id], pr[:name], pr[:quantity], pr[:price], pr[:description] ]
        end
      end
      send_data(csv_string, filename: "products.csv")
    end

    private
    def set_product
      @product = Product.find(params[:id])
    end
end
