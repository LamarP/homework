class Stack
  attr_reader
  def initialize(stack)
    @stack = stack
    # create ivar to store stack here!
  end

  def push(el)
    @stack << el
    # adds an element to the stack
  end

  def pop
    @stack.pop
    # removes one element from the stack
  end

  def peek
    @stack.last
    # returns, but doesn't remove, the top element in the stack
  end
end
arr = [1,2,3]
stack = Stack.new(arr)
p stack

