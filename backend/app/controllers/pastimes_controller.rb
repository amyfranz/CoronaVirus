class PastimesController < ApplicationController
    def index #list of pastimes
        pastimes = Pastime.all
        render({json: pastimes})
    end
  
    def show #individual record. one pastime
        pastime = Pastime.find(params[:id])
        render json: pastime
    end

    def create
        pastime = Pastime.new(allowed_params)

        if pastime.save
          render json: pastime,status: :ok
        else
          render json: {data:pastime.errors},status: :unprocessable_entity
        end
    end

    private

    def allowed_params
        params.require(:pastime).permit(:name, :content, :title)
    end
end
