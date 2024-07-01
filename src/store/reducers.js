const initialState = {
    products: [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.pinimg.com/originals/6b/3f/6b/6b3f6b9bb5ff4746d4876f301c8d00bd.jpg",
            "images":"https://i.pinimg.com/originals/6b/3f/6b/6b3f6b9bb5ff4746d4876f301c8d00bd.jpg"
          },
          {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://pricematch.pk/uploadedstuff/productimages/20-Apple-iPhone-X-64-GB.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/2/1.jpg",
              "https://i.dummyjson.com/data/products/2/2.jpg",
              "https://i.dummyjson.com/data/products/2/3.jpg",
              "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
          },
          {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://thesun.my/binrepository/566x432/0c0/0d0/none/11808/VRPC/18b3-a70-main_556174_20190813111729.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/3/1.jpg"
            ]
          },
          {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://images.fonearena.com/blog/wp-content/uploads/2021/04/OPPO-F19-1-1024x1015.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/4/1.jpg",
              "https://i.dummyjson.com/data/products/4/2.jpg",
              "https://i.dummyjson.com/data/products/4/3.jpg",
              "https://i.dummyjson.com/data/products/4/4.jpg",
              "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ]
          },
          {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://tse2.mm.bing.net/th?id=OIP.Fafhf7TKxX3KoCoR2yEasQHaHa&pid=Api&P=0&h=180",
            "images": [
              "https://i.dummyjson.com/data/products/5/1.jpg",
              "https://i.dummyjson.com/data/products/5/2.jpg",
              "https://i.dummyjson.com/data/products/5/3.jpg"
            ]
          }
    ],
    cart: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const newItem = {
          product: action.payload.product,
          quantity: action.payload.quantity
        };
        return {
          ...state,
          cart: [...state.cart, newItem]
        };
      
      case 'REMOVE_FROM_CART':
        const updatedCart = state.cart.filter(item => item.product.id !== action.payload);
        return {
          ...state,
          cart: updatedCart
        };
      
      case 'UPDATE_QUANTITY':
        const updatedCartQuantity = state.cart.map(item => {
          if (item.product.id === action.payload.productId) {
            return { ...item, quantity: action.payload.newQuantity };
          }
          return item;
        });
        return {
          ...state,
          cart: updatedCartQuantity
        };
      
      default:
        return state;
    }
  };
  
  export default rootReducer;