arr = [4, 5, 1, 7, 2]
k = 3

def two_sum(arr, k)
  for i in 0...arr.length-1
    for j in i+1...arr.length
      sum = arr[i] + arr[j]
      if sum == k
        return true
      end
    end
  end
  return false
end

puts two_sum(arr, k)
