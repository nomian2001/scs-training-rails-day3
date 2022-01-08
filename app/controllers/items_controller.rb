class ItemsController < ApplicationController
    before_action :set_item, only: [:show, :edit, :update, :destroy]

    def index
        @items = Item.all
    end

    def show

    end

    def new
        @item = Item.new
    end

    def edit
    end

    def create
        @item = Item.new(item_params)
        if @item.save 
            redirect_to :new_container
        else 
            flash[:error] = "Not save!"
            redirect_to :new_container
        end
    end

    def update
        @item.update(item_params)
    end 

    def destroy
        @item.destroy
        redirect_to :new_container
    end

    private
        def get_container
            @container = Container.find(params[:container_id])
        end

        def set_item
            @item = Item.find(params[:id])
        end

        def item_params
            params.require(:item).permit(:packing_style,:length,:width, :height,:weight,:cog_height_type,:cog_height)
        end
   
end
