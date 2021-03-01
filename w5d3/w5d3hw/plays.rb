require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton
  #connects us to our database
  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
    #all the results from the database will return as a hash
  end
end

class Play
  attr_accessor :id, :title, :year, :playwright_id

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM plays")
    #grabs the database for us and allows us to call execute where we inbed our sequel query
    #shows every entry we have in our play database
    data.map { |datum| Play.new(datum) }
    #returns an array of instances of a play class
  end

  def self.find_by_title(title)
    play = PlayDBConnection.instance.execute(<<-SQL, title )
    SELECT
      *
    FROM
      play
    WHERE
     title = ?
     SQL
  end

  def self.find_by_playwright(name)
    playwright = Playwright.find_by_name(name)
    #calls on our playwright class and passes name to it
    raise "#{name} not found in DB" unless playwright
    #raise error if  playwright not found in db
    #call on play database and select all from plays table where the playwright_id = playwright
    plays = PlayDBConnection.instance.execute(<<-SQL, playwright.id)
      SELECT
        *
      FROM
        plays
      WHERE
        playwright_id = ?
    SQL
  end
  
  def initialize(options)
    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
    #creates new instance of the play class
    #unpacks all the variables from the options hash 
  end

  def create
    raise "#{self} already in database" if self.id
    #raises an error if the instance is already in the database
    # grabs the database and allows us to insert into the play a set of values, using a heredoc
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
        
      VALUES
        (?, ?, ?)
    SQL
    self.id = PlayDBConnection.instance.last_insert_row_id
    #creates the id of the instance
    #saves the new play instance to the database
    #allows user to create a play instance and saves it to the data base
  end

  def update
    raise "#{self} not in database" unless self.id
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id, self.id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
    #raises error if no instance exists to update
    #pass in title,year, id to be updated
    #table to be updated, sets title to the new title, year, playwright_id
    #finds the row by its value, also needs attr accessor to get and set
  end
end

class Playwright
  def self.all 
    data = PlayDBConnection.instance.execute("SELECT * FROM playwrights")
    data.map { |datum| Playwright.new(datum) }
    #grabs and returns the instances of the playwrights class
  end

  def self.find_by_name(name)
    person = PlayDBConnection.instance.execute(<<-SQL, name)
    SELECT
      *
    FROM
      playwrights
    WHERE
      name = ?
    SQL
    return nil unless person.length > 0
    Playwright.new(person.first)
  end

  def initialize(options)
    @id = options['id']
    @name = options['name']
    @birth_year = options['birth_year']
  end

  def insert
    raise "#{self} already in database" if self.id
    PlayDBConnection.instance.execute(<<-SQL, self.name, self.birth_year)
      INSERT INTO
        playwrights (name, birth_year)
      VALUES
        (?, ?)
    SQL
    self.id = PlayDBConnection.instance.last_insert_row_id
    #inserts an instance of a playwright in the database
  end
  
  def update
    raise "#{self} not in database" unless self.id
    PlayDBConnection.instance.execute(<<-SQL, self.name, self.birth_year, self.id)
      UPDATE
        playwrights
      SET
        name = ?, birth_year = ?
      WHERE
        id = ?
    SQL
    #updates a playwrights info
  end

  def get_plays
    raise "#{self} not in database" unless self.id
    plays = PlayDBConnection.instance.execute(<<-SQL, self.id)
      SELECT
        *
      FROM
        plays
      WHERE
        playwright_id = ?
    SQL
    plays.map { |play| Play.new(play) }
    #grabs all the plays of a playwright?
  end
end
