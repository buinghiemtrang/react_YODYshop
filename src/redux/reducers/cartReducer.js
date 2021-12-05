import { ActionsType } from "../constants/ActionsType";

const initialState = {
    cartItem: [],
};

export const cartReducer = (state = initialState, action) => {
    let findPr;
    let index;
    switch (action.type) {
        case ActionsType.ADD_TO_CART: {
            const { product, quantity } = action.payload;
            const check = state.cartItem.find((pr) => pr.id === product.id);
            if (check) {
                let newProduct = state.cartItem.map((pr) => {
                    if (pr.id === product.id) {
                        return {
                            ...pr,
                            quantity: pr.quantity + quantity,
                        };
                    } else {
                        return pr;
                    }
                });
                return {
                    ...state,
                    cartItem: [...newProduct],
                };
            } else {
                return {
                    ...state,
                    cartItem: [
                        ...state.cartItem,
                        {
                            ...product,
                            quantity: quantity,
                        },
                    ],
                };
            }
        }
        case ActionsType.INC: {
            const id = action.payload;
            // const product = action.payload;
            findPr = state.cartItem.find((pr) => pr.id === id);
            index = state.cartItem.findIndex((pr) => pr.id === id);
            findPr.quantity += 1;
            state.cartItem[index] = findPr;
            return {
                ...state,
                cartItem: [...state.cartItem],
            };
        }
        case ActionsType.DEC: {
            const id = action.payload;
            findPr = state.cartItem.find((pr) => pr.id === id);
            index = state.cartItem.findIndex((pr) => pr.id === id);
            if (findPr.quantity > 1) {
                findPr.quantity -= 1;
                state.cartItem[index] = findPr;
                return {
                    ...state,
                    cartItem: [...state.cartItem],
                };
            } else {
                return {
                    ...state,
                };
            }
        }
        case ActionsType.REMOVE_PRODUCT: {
            const id = action.payload;
            const filtered = state.cartItem.filter((pr) => pr.id !== id);
            return {
                ...state,
                cartItem: filtered,
            };
        }

        default:
            return {
                ...state,
            };
    }
};

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionsType.ADD_TO_CART: {
//       const { product, quantity } = action.payload;
//       const check = state.products.find((pr) => pr.id === product.id);
//       if (check) {
//         return {
//           ...state,
//         };
//       } else {
//         product.quantity = quantity;
//         return {
//           ...state,
//           products: [...state.products, product],
//         };
//       }
//     }
//     default:
//       return {
//         ...state,
//       };
//   }
// };

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionsType.ADD_TO_CART: {
//       const { product, quantity } = action.payload;
//       const check = state.products.find((pr) => pr.id === product.id);
//       if (check) {
//         let newProduct = state.products.map((pr) => {
//           if (pr.id === product.id) {
//             return {
//               ...pr,
//               quantity: pr.quantity + quantity,
//             };
//           } else {
//             return pr;
//           }
//         });
//         return {
//           ...state,
//           products: [...newProduct],
//         };
//       } else {
//         return {
//           ...state,
//           products: [
//             ...state.products,
//             {
//               ...product,
//               quantity: quantity,
//             },
//           ],
//         };
//       }
//     }
//     case ActionsType.REMOVE_PRODUCT: {
//       const { product } = action.payload;
//       const filtered = state.products.filter((pr) => pr.id !== product.id);
//       return {
//         ...state,
//         products: filtered,
//       };
//     }
//     default:
//       return {
//         ...state,
//       };
//   }
// };
