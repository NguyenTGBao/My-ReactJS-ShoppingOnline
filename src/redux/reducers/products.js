var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://halomobile.vn/wp-content/uploads/2017/12/apple-iphone-7-plus-128gb-rose-gold.jpeg',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        image: 'https://images.samsung.com/is/image/samsung/vn-galaxy-s7-edge-g935fd-sm-g935fzduxxv-frontgold-90446810?$PD_GALLERY_L_JPG$',
        description: 'Sản phẩm do samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/2/9/636222506137676408_f1s-2.jpg',
        description: 'Sản phẩm do china sản xuất',
        price: 450,
        inventory: 5,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;