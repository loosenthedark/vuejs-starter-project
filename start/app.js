// 1. Create a new Vue instance with the necessary options: el, data and methods. 
//Attach the new Vue instance to the div with the ID of "app". 

// 2. Create the following properties on the data object: title, summary, thumbnail, alt, and votes. 
//   Make up data for the "title" and "summary" properties. 
//   For the thumbnail image, use a URl that links to your own photo or use this link to use a placeholder image: 
//   'https://placeimg.com/75/75/any'. 
//   The value of "votes" should be 0. 

// 3. Use mustache syntax to display the vote count, title, and summary in the Vue template.

// 4. Use v-bind to display the thumbnail image in the <img> tag. 

// 5. On the Vue instance, create a method called "increment" that adds 1 vote to the "votes" property 

// 6. On the Vue instance, create a method called "decrement" that subtracts 1 vote from the "votes" property 

// 7. On the #voteCounter span elements, use v-on directive to call the increment or decrement methods
// so that the vote count goes up and down each time the + or - symbols are clicked.

// Notice that in the Vue instance, the "post" data property has been replaced with an array of objects called "posts",
// provided below. The index.html file now includes two input elements so the user to add news post to the list. 

// 1. Modify the code so it works with a list of posts instead of a single post 
//  a. Use v-for on the .post div to iterate through each post in the post array. Use dot notation in the template to make
//     sure all data displays properly. 
//  b. Modify the "increment" and "decrement" methods so that they work in a loop.  (Hint: the method 
//     needs to know which specific post to increment or decrement)

// 2. Add new posts 
//   a. In the Vue instance, create two new data properties to save the info from the form. In the Vue 
//      template, use v-model on each form input field to capture data entered into the fields.
//   b. Create a new method called createNew. Inside createNew(), use the properties you've just created 
//      to make new post object and push it into the posts array. 
//   c. Call createNew in your template whenever the "Create New" button is clicked.  

//  3. Sort the list of posts by number of votes (most votes at the top)
//   a. Create a computed property called orderedList that returns a sorted list. Use the following code to sort the list: 
// return this.posts.sort((currentPost,nextPost) =>{
//   return nextPost.votes - currentPost.votes;
// });
//   b. In your Vue template, iterate through the sorted list. 
//   c. *Bonus* When a new post is created, clear out the input fields

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const posts = [{
        name: 'Charlie',
        description: 'Six weeks old today 😍',
        url: `https://placekitten.com/${randomNumber(100, 250)}/${randomNumber(100, 250)}`,
        alt: 'random cat pic',
        votes: 3,
    },
    {
        name: 'Bella',
        description: 'As cute as it gets!',
        url: `https://placekitten.com/${randomNumber(100, 250)}/${randomNumber(100, 250)}`,
        alt: 'random cat pic',
        votes: 2,
    },
    {
        name: 'Oscar',
        description: 'Playful little guy...',
        url: `https://placekitten.com/${randomNumber(100, 250)}/${randomNumber(100, 250)}`,
        alt: 'random cat pic',
        votes: 1,
    },
];

new Vue({
    el: '#app',
    data: {
        posts: posts,
        newName: '',
        newDescription: '',
        error: false
    },
    methods: {
        increment: function(post) {
            post.votes = post.votes + 1
        },
        decrement: function(post) {
            post.votes = post.votes - 1
        },
        createKitten: function() {
            if (!this.newName || !this.newDescription) {
                this.error = true;
            } else {
                this.posts.push({
                    name: this.newName,
                    description: this.newDescription,
                    url: `https://placekitten.com/${randomNumber(100, 250)}/${randomNumber(100, 250)}`,
                    alt: 'random cat pic',
                    votes: 0
                });
                this.newName = '';
                this.newDescription = '';
                this.error = false;
            }
        }
    },
    computed: {
        sorted_posts() {
            return this.posts.sort((a, b) => { return b.votes - a.votes; });
        }
    }
});