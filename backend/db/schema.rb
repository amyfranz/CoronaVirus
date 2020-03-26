# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_25_110037) do

  create_table "advice_tags", force: :cascade do |t|
    t.integer "advice_id", null: false
    t.integer "tag_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["advice_id"], name: "index_advice_tags_on_advice_id"
    t.index ["tag_id"], name: "index_advice_tags_on_tag_id"
  end

  create_table "advices", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.string "video"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pastimes", force: :cascade do |t|
    t.string "icon"
    t.string "summary"
    t.text "content"
    t.string "title"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "rate"
    t.integer "pastime_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pastime_id"], name: "index_ratings_on_pastime_id"
  end

  add_foreign_key "advice_tags", "advices"
  add_foreign_key "advice_tags", "tags"
  add_foreign_key "ratings", "pastimes"
end
