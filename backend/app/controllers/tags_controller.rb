class TagsController < ApplicationController
    def index #list of tags
        tags = Tag.all
        render json: tags, include: :advice
    end
  
    def create
        tag = Tag.new(allowed_params)

        if tag.save
          render json: tag,status: :ok
        else
          render json: {data:tag.errors},status: :unprocessable_entity
        end
    end

    private

    def allowed_params
        params.require(:tag).permit(:name, :advice_id)
    end
end
