fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# def slug_oct(fish)
#   big_fish = fish[0]
#   (1...fish.length).each { |f| big_fish = fish[f] if fish[f].length > big_fish.length }
#   big_fish
# end

#  slug_oct(fish) # O(n^2)

# def dom_octo(arr,&prc)
#   prc ||= Proc.new { |x, y| x <=> y }
#   return arr if arr.count < 2
#   #an arr of length one is sorted
#   mid = arr.count / 2
#   #middle index used to grab els on each side
#   left,right = arr.take(mid), arr.drop(mid)
#   sorted_left, sorted_right = dom_octo(left,&prc), dom_octo(right,&prc)

#   merge(sorted_left,sorted_right,&prc)

# end

# def merge(left,right,&prc)
#   merged = []

#   until left.empty? || right.empty?
    
#       case prc.call(left.first, right.first)
#       when -1
#         merged << left.shift
#       when 0
#         merged << left.shift
#       when 1
#         merged << right.shift
#       end
#   end

#   merged + left + right
# end



# def nlogn_biggest_fish(fishes)
#   # sort the array longest to shortest
#   prc = Proc.new { |x, y| y.length <=> x.length }
#   #return the first element
#    dom_octo(fishes,&prc)[0]
# end
# puts nlogn_biggest_fish(fish)

# def clever_octo(arr)
#   big_fish = arr.first
#   arr.each do |fish|
#     big_fish = fish if fish.length > big_fish.length
#   end
#   big_fish
# end

# puts clever_octo(fish)

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

# def slow_dance(dir, arr)
#   arr.each_with_index {|el,i| return i if el == dir }
# end
# puts slow_dance("up", tiles_array)
hash = {
  "up" => 0,
  "right-up" => 1,
  "right"=> 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}
def fast_dance(dir,hash)
  hash[dir]
end
puts fast_dance("right-down", hash)