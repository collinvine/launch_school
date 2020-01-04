pets = { 
  cat: 'fluffy', 
  dog: ['sparky', 'fido'], 
  fish: 'oscar' 
}

# pets[:dog] = ['sparky', 'bowser', 'fido'] < my answer

pets[:dog].push('bowser') # given answer

p pets #=> {:cat=>"fluffy", :dog=>"bowser", :fish=>"oscar"}