class MessagesController < ApplicationController
  def index
    sleep 2
    @messages = Message.all
  end

  def create
    sleep 2
    message = Message.new(message_params)
    message.save!
    # redirect_to root_url

    # soon...
    respond_to do |format|
      format.html { redirect_to root_url }
      format.json { render json: message }
      # allows this controller action to respond to different types of requests
      # gives html and json requests different behaviors
    end
  end

  def message_params
    params.require(:message).permit(:author, :text)
  end
end
