numbers = [1, 2, 3, 4, 5]

doubled_numbers = []

numbers.map do |number|
  doubled = number * 2
  doubled_numbers << doubled
end

p doubled_numbers