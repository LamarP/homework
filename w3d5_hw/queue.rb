class MyQueue

  def initialize(queue)
    inner_array = queue
    # create ivar to store stack here!
  end
  
  def enqueue(ele)
    inner_array.unshift(ele)
  end
  
  def dequeue
    inner_array.pop
  end
  
  def peek
    inner_array.dup
  end
  private
  attr_reader :inner_array
end