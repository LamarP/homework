//React

//--components(class and functional)
//functional has no lifecycle methods, just renders props
// larger components can pass props down to smaller components

//what triggers a rerender in a react component
//-props changing, forces a rerender
//-state change, forces a rerender
//-a parent component rerendering


//--Local(component) state


//-props

//Redux

//-store floating entity that exists around our app, with a massive global state
//has the state of the whole app
//has functions
//getState() -read
//dispatch() -write

//provider and connect how we combine react and redux
//all react components live inside the provider
//connect connects you to the store
// containers allow us to map state to props


//What problem does redux solve ?
//The main benefit of redux with react is the ability to avoid prop threading


//view has container/ whole app/ 
//view has container, component is inside that container.

//Connecting backend and frontend

//Rails backend setup

//entry file, creates store and renders react on the root
//root.jsx 
//tea_form.jsx

//Rails backend setup
//--Run rails new TeaTime / creates a rails app
//--cd TeaTime, add a model for teas. Rails g model teas
//--migration - t.string :flavor, null: false
//t.float :amount, null: false, add_index :teas, :flavor, unique: true
//rails db:create
//rails db:migrate
//in tea model, add validations/ validates :flavor, :amount, presence: true
//validates :flavor, uniqueness: true
//paste in seeds file/ within db
//rails db:seed
//create controllers/ rails g controller api teas /namespaceing
//in teas controller def index, create, tea_params


class API::TeasController < ApplicationController
  
  def index teas = Tea.all
    render json: teas
  end

  def create
    tea = Tea.new(tea_params)
    if tea.save
      render json: tea
    else
      render json: tea.errors.full_messages, status: 422
    end
  end

  def tea_params
    params.require(:tea).permit(:flavor, :amount)
  end

end


# static pages controller only contains def root
class StaticPagesController < ApplicationController
  def root
    #by default renders root
  end
end

# routes
# looks in namespace api and defaults to request and respond with json
namespace :api, defaults: {format: :json} do 
  resources :teas, only: [:index, :create]
end
root to: 'static_pages#root'

# root.html.erb <div id='root>React is broken</div>
# any get / will render statc_pages
# instead of connecting to index.html our new entry point will be root.html.erb when using rails
# our views will now be in react, rails is like a data service that sends info as a js object instead of html.
# update teh path in webpack config __dirname, 'app', 'assets', 'javascripts'

# tea_utils
# export const fetchAllTeas = ( => (
  $.ajax({
    method: 'GET',
    url: '/api/teas'
  })
));

# What do we do about updating our Redux store?
# 
# Thunk middleware - refers to a function that defers work to be done later, kind of like curry
# returns a function
# Allows you to write thunk action creators that return a function instead of POJO.
# when a request is done we want to conditionally dispatch actions.
# Our actions can be pojos or functions. If pojo, gets sent right through
# all be done inporting applyMiddleware
# middleware does some additional functionality
# redux actions Regular action creator:
export const fetchAllTeas = () => (dispatch, getState) => (
  TeaAPIUtil.fetchAllTeas()
  .then(teas => dispatch(receiveTeas(teas)))

  # thunk action creator still uses the original action creater, called within thunk calls fetchAllTeas and then calls dispatch
  # receiveTeas passing in teas


)

# middleware steps
# if the action is a function
# invoke the action, passing in dispatch and getState
# else the action is a pojo
# pass the action along to the next middleware or the reducer.
# passes in dispatch and get state to our thunk


# dispacth action gets filtered through middlware if it meets a condition makes an ajax request to rails and comes back to 
# the store as an action.
# logger middleware that console logs it, goes to rootreducer and is sent to view.

# thunk middleware function 

const thunk = ({dispatch, getState}) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
}
export default thunk;


const thunk = function(store) {
  return function(next) {
    return function(action) {
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }
      return next(action);
    }
  }
}

# thunk takes dispatch, getState
function(dispatch, getState) {

}

import {applyMiddleware} from 'redux';
import logger from 'redux-logger';
# import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {

}

# provider is what gives us access to the store
# componentDidMount()
# when my component mounts run this function from props

# componentDidMount // runs after the first render//costructor runs first then render/then didmount
