class Queue

  attr_reader
  def initialize(queue)
    @queue = queue
    # create ivar to store stack here!
  end

  def enqueue(ele)
    @queue.unshift(ele)
  end

  def dequeue
    @queue.pop
  end

  def peek
    @queue.last
  end
end