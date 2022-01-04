
          index 
            |
            App (nav routes)
            |
Home -- About  --  Skills -- Portfolio -- Blog          --                    Contact Me
                                           /\                                     /\
                                  BlogForm    BlogList                 ContactForm  ContactList
                                                \                                         \
                                                Blog (update, delete)                       Contact (update, delete)
                                                  (update) BlogForm                          (update) ContactForm 
                                                    |                                             
                                                  Posts
                                                    /\
                                            PostForm  PostList
                                                      Post
                                                      (update) PostForm

Models:
Contact
    F_Name
    L_Name
    Email
    Phone
    Body

Blog
    Topic
    Has_many:Posts
Post
    Author
    Body:Text
    Date
    Belongs_to:Blog
