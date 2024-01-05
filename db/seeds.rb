# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

users = User.create([
    {
        username: "Admin",
        password: "1234"
    },
    {
        username: "Member1",
        password: "1234"
    }
])

posts = Post.create([
    {
        user_id: 6,
        title: "hello",
        post_content: "hello"
    }
])