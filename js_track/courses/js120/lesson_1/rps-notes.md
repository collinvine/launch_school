# BONUS FEATURES


## Move History

* add an array to each players object and push the move to the move-history array?
* when to display that?

added. Could make improvements like:
  * display moves per match 
    * objected or nested array


## Add Lizard and Spock

1. Make the win logic easier
  * currently, the win logic is done by a series of if statements
  * it's wild and not very scalable
  * instead, I can do an object with the keys being the choices, and the values being an array of options that they key beats
  * I can then use `.includes` on the human and computer option to determine if there's a combo that wins, for eg
    * human chooses paper
    * computer chooses spock
    * I can do `win.[${human-choice}].includes(${computer-choice})`
      * if true, human wins
    * else `win.[${computer-choice}].includes(${human-choice})`
      * if true, computer wins
    * else it's a tie




## Keeping Score
Right now, the game doesn't have any dramatic flair. It would be more interesting if we were playing up to, say, 5 points. Whoever reaches 5 points first wins. Can you build this functionality?
We have a new noun -- a score. Is that a new object type, or a state of an existing class? Explore both options and see which works better.

**state**
1. state of each player object
2. state of the rpsGame object

**new object**
score = {
  match: 5,
  playerScore: 0,
  computerScore: 0
}

* allow match to be set? could be extracted to a factory function and take in an arg with match and default to 5
* 