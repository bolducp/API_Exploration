# API_Exploration
making my own api with node.js

## usage

### math operations

functionality for: add, subtract, multiply, divide, square

localhost:4000/math/<operator type>/<num>/<num>/<num> etc.

Example:
localhost:4000/math/add/23/345/-29847

output:
-29847


### sentence 

input an encoded sentence after localhost:4000/sentence/
returns a stringified object with a count of letters, spaces, and words

Example:
http://localhost:4000/sentence/this%20is%20a%20sentence

output: 
{
letters: 15,
spaces: 3,
words: 4
}


### gravatar 

input a MD5 hash of someone's email address and receive a link to view her gravatar

Example:
http://localhost:4000/gravatar/paigebolduc@gmail.com

output:
http://www.gravatar.com/avatar/a282a242ba59cadd187145d54aa2f306
