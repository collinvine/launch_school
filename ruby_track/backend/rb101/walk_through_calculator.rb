puts "Give me the first number"
num1 = gets.chomp.to_i

puts "Give me the seconod number"
num2 = gets.chomp.to_i

puts "Would you like to add, subtract, multiply, or divide?"
operation = gets.chomp.downcase

result =  case operation
            when "add" then num1 + num2
            when "subtract" then num1 - num2
            when "multiply" then num1 * num2
            when "divide" then num1 / num2
          end

puts result