# Write two methods, one that returns the string "Hello" and one that returns the string "World". Then print both strings using #puts, combining them into one sentence.

def hello 
  return "Hello"
end

def world
  return "World"
end

word1 = hello
word2 = world

puts "#{word1} #{word2}"