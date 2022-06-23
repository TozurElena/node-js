const Post = require('../models/post');
const createPath = require('../helpers/creata-path');

const getPost = (req, res) => {
  const title = 'Post';
  Post 
    .findById(req.params.id)
    .then((post) => res.render(createPath('post'), { post, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), {title: 'Error'});
    });
};

const deletePost = (req, res) => {
  const title = 'Post';
  Post 
    .findByIdAndDelete(req.params.id)
    .then(result => res.sendStatus(200))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), {title: 'Error'});
    });
}

const getEditPost = (req, res) => {
  const title = 'Edit Post';
  Post 
    .findById(req.params.id)
    .then((post) => res.render(createPath('edit-post'), { post, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), {title: 'Error'});
    });
}

const editPost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post 
    // chercher un element sur id
    .findByIdAndUpdate(id, { title, author, text } )
    .then(result => res.redirect(`/posts/${id}`))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), {title: 'Error'});
    });
}

const getPosts = (req, res) => {
  const title = 'Posts';
  Post 
    .find()
    // sort sur date 
    .sort({ createdAt: -1})
    .then((posts) => res.render(createPath('posts'), { posts, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), {title: 'Error'});
    });
};

const getAddPost = (req, res) => {
  const title = 'Add Post';
  res.render(createPath('add-post'), { title });
};

const addPost = (req, res) => {
  const {title, author, text} = req.body;
  const post = new Post({ title, author, text});
  post  
    .save()
    .then((result) => res.redirect('/posts'))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), {title: 'Error'});
    });
};

module.exports = {
  getPost, 
  deletePost,
  getEditPost,
  editPost,
  getPosts,
  getAddPost,
  addPost
};