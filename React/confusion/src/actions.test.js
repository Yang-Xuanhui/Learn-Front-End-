import expect from 'expect';
import * as actions from './redux/ActionCreators';

describe('actions', () => {
   
   it('add comment', () => {
      const init ={
         dishId: undefined,
         rating: undefined,
         author: undefined,
         comment: undefined
      }
      const comment ={
         dishId: 1,
         rating: 5,
         author: "name",
         comment: "comment"
      }
     expect(actions.addComment().type).toEqual("ADD_COMMENT")
     expect(actions.addComment().payload).toEqual(init)
     expect(actions.addComment(1,5,"name","comment").payload).not.toEqual(init)
     expect(actions.addComment(1,5,"name","comment").payload).toEqual(comment)
   })   
 })