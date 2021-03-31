export const RECEIVE_TEA = 'RECEIVE_TEA';

// export const receiveGreenTea = {
//   type: 'RECEIVE_TEA',
//   tea: {
//     flavor: 'green',
//     amount: 2,
//     id: 1
//   }
// }

//the payload that the reducer has access to

export const receiveTea = (teaPayload) => {
  return {
    type: RECEIVE_TEA,
    tea: teaPayload
  }
}

