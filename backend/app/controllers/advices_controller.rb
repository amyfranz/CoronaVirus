class AdvicesController < ApplicationController
    def index #list of advices
        advices = Advice.all
        render({json: advices})
    end
  
    def show #individual record. one advice
        advice = Advice.find(params[:id])
        render json: advice
    end
end
