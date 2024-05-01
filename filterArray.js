let blogPosts = [
    {title: 'post 1', author: 'Jack'},
    {title: 'post 2', author: 'Jack'},
    {title: 'post 3', author: 'Serah'},
    {title: 'post 4', author: 'Serah'},
    {title: 'post 5', author: 'James'},
    {title: 'post 6', author: 'James'},
    {title: 'post 7', author: 'Jack'},
];

let jackPosts = blogPosts.filter((post) => post.author === 'Jack');
let jamesPosts = blogPosts.filter((post) => post.author === 'James');

console.log(jackPosts);

console.log(jamesPosts);