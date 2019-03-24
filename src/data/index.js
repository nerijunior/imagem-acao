import animals from './animals'
import foods from './foods'
// import books from './books'
// import countries from './countries'
import insects from './insects'
import movies from './movies'
import objects from './objects'
// import people from './people'
import places from './places'
import sports from './sports'
import verbs from './verbs'
import disciplines from './disciplines'

export const wordArray = animals.concat(foods)
  .concat(insects)
  .concat(movies)
  .concat(objects)
  .concat(places)
  .concat(sports)
  .concat(verbs)
  .concat(disciplines)

export const wordArrayLength = wordArray.length

export default {
  animals,
  foods,
  // books,
  // countries,
  disciplines,
  insects,
  movies,
  objects,
  // people,
  places,
  sports,
  verbs
}
