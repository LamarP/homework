require "piece.rb"

describe Piece do 
  describe "#initialize" do
    it "instantiates a piece correctly" do
      piece = Piece.new(:white, [0,0])
      expect(piece).to be(:white)
      expect(piece.pos).to eq([0,0])
    end

    context "with invalid arguments" do 
      it "raises an error when given an invalid color" do
      expect { Piece.new(:blue, [0,0]) }.to raise_error("Invalid color")
      end

      it "raises an error when given an invalid pos" do
        expect { piece.new(:white, [9,9]) }.to raise_error("Invalid color")
      end
    end
  end

  def "#pos="
    it "correctly reassigns a piece\'s position" do
      piece.pos = [1,1]
      
    end
  end
end