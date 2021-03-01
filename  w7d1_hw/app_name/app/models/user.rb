class User < ApplicationRecord
  validates :username, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: { message: 'Password can\'t be blank'}
  validates :password, length: {minimum: 6, allow_nil: true }
  before_validation :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    #finds the user by their username
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    #returns the user if user exist and the encrypted password matches the users
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
    #generates a random session token, hence the title
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
    #resets the users session token and saves the user
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
    #ensures the user has a session token, if not, sets one for them
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    #This method sets @password equal to the argument given so that the appropriate validation can happen
    #This method also encrypts the argument given and saves it as this user's password_digest
  end


end
