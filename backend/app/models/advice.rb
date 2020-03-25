class Advice < ApplicationRecord
    has_many :advice_tags
    has_many :tags, through: :advice_tags
end
