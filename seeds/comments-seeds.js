const { Comments } = require('../models');

const commentsData = [
  {
    posts_id: 1,
    users_id: 2,
    body: 'I cant believe you would say such a thing. If you feel like picking fights online about ESLint I dare you to say it to my face!',
  },
  {
    posts_id: 2,
    users_id: 3,
    body: 'Using Express is like gliding down the superhiway of life, ten feet above ground on a hang glider!',
  },
  {
    posts_id: 3,
    users_id: 4,
    body: 'We do not even remember what pre-historic life was like before NPM was around.',
  },
  {
    posts_id: 4,
    users_id: 5,
    body: 'Mi SQL es su SQL!',
  },
  {
    posts_id: 5,
    users_id: 3,
    body: 'Did someone say PIZZA? Please post the recipe in the blog. I want to cook this crust.',
  },
  {
    posts_id: 6,
    users_id: 4,
    body: 'Maps: Location tracking kinda gives me the creeps, but it is very convennient when you lose your phone.',
  },
  {
    posts_id: 6,
    users_id: 3,
    body: 'Maps: They are all around you whether you like it or not.',
  },
  {
    posts_id: 1,
    users_id: 3,
    body: 'EsLINT mi lint? O su lint?',
  }

];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
