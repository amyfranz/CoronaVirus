class AdviceTagsController < ApplicationController
    def index #list of advices
        advice_tags = AdviceTag.all
        render({json: advice_tags})
    end
end
