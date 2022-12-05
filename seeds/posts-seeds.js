const { Posts } = require('../models');

const postsData = [
  {
    title: 'ESLint? More like ES Lit!',
    body: 'On a  dev team, you want your teams codebase to follow uniform formatting and styling, using ESLint rules:',
    users_id: 1
  },
  {
    title: 'Expresssss? More like ExprYESSSS!',
    body: 'You better read up on this. Express is a Fast, unopinionated, minimalist web framework for Node.js.',
    users_id: 2
  },
  {
    title: 'NPM? More like Nuclear Powered Marshmallows!',
    body: 'We are npm, Inc., the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.',
    users_id: 3
  },
  {
    title: 'MySQL? More like "My its COOL!',
    body: 'Many of the worlds largest and fastest-growing organizations including Facebook, Twitter, Booking.com, and Verizon rely on MySQL to save time and money powering their high-volume Web sites, business-critical systems and packaged software.',
    users_id: 4
  },
  {
    title: 'Super-Fast Thin-Crust Pizza',
    body: 'Looking for delicious homemade thin-crust pizza in under an hour? This recipe uses a simple dough made with both baking powder and yeast, which yields a super-thin yet light crust.',
    users_id: 5
  },
  {
    title: 'Maps Activity',
    body: 'The Maps activity you keep is used to improve your experience. You can see your activity, delete it manually, or choose to delete it automatically using the controls on this page.',
    users_id: 3
  }
];

const seedPosts = () => Posts.bulkCreate(postsData);

module.exports = seedPosts;
