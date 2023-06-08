require 'set'

arr = [4, 5, 1, 7, 2]
k = 3

def two_sum(arr, k)
  my_set = Set.new

  for i in 0...arr.length
    diff = k - arr[i]
    if my_set.include?(diff)
      return true
    else
      my_set.add(arr[i])
    end
  end

  return false
end

puts two_sum(arr, k).to_s
