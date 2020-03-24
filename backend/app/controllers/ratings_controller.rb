class RatingsController < ApplicationController
    def index #list of ratings
        ratings = Rating.all
        render({json: ratings, include: :pastime})
    end

    def create
        rating = Rating.new(allowed_params)

        if rating.save
          render json: rating,status: :ok
        else
          render json: {data:rating.errors},status: :unprocessable_entity
        end
    end

    def destroy
        rating = Rating.find(params[:id])
        rating.destroy
        render json: {status: 'SUCCESS', message:'Deleted rating', data:rating},status: :ok
      end

    private

    def allowed_params
        params.require(:rating).permit(:rate, :pastime_id)
    end
end
