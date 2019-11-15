words = 'car human elephant airplane'

# use Array#each to print the plural of each word in words.

plural = words.split(" ")

plural.each { |word| puts "#{word}s"}