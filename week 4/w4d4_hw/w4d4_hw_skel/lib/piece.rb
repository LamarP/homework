class Piece
  attr_reader :color, :pos

  def initialize(color,pos)
    @color = color
    @pos = pos
  end
end