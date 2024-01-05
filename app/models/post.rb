class Post < ApplicationRecord
  validates :title, presence: true
  validates :post_content, presence: true
  belongs_to :user
  has_and_belongs_to_many :categories
end
