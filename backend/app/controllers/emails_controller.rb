class EmailsController < ApplicationController
    def index #list of emails
        emails = Email.all
        render({json: emails})
    end
  
    def show #individual record. one email
        pastime = Pastime.find(params[:id])
        render json: pastime
    end

    def create
        email = Email.new(email: params[:email])
        pp email
        if email.save
          render json: email,status: :ok
        else
          render json: {data:email.errors},status: :unprocessable_entity
        end
    end

    private

    def allowed_params
        params.require(:email)
    end
end
