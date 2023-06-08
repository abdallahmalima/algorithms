arr = [4, 5, 1, 7, 2]
k = 3

def two_sum(arr, k)
  sorted_arr = arr.sort
  first_index = 0
  last_index = arr.length - 1

  while first_index < last_index do
    sum = sorted_arr[first_index] + sorted_arr[last_index]
    if sum == k
      return true
    elsif sum > k
      last_index -= 1
    else
      first_index += 1
    end
  end

  return false
end

puts two_sum(arr, k)
