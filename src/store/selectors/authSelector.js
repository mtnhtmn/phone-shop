/*
 Selector are the best practice for getting a data from your store
in can be used in mapStateToProps function

example:
 mapStateToProps = (state) => {
   return {
     user: userSelector(state)
   }
  }

or with the useSelector hook
example: 
  const user = useSelector(userSelector)

few articles 
https://medium.com/@matthew.holman/what-is-a-redux-selector-a517acee1fe8
https://redux.js.org/usage/deriving-data-selectors

i suggest try to replace all places where you get data from your redux state with selectors
*/
export const userSelector = (state) => state.authReducer.user;
