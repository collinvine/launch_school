# Write code to run the given info below


def name(sample_name)
  sample_name.sample
end

def activity(sample_activity)
  sample_activity.sample
end

def sentence(clause1, clause2)
  clause1 + " " + clause2
end




# given information:

names = ['Dave', 'Sally', 'George', 'Jessica']
activities = ['walking', 'running', 'cycling']

puts sentence(name(names), activity(activities))
