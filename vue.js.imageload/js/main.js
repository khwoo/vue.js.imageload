var vm = new Vue ({
    el:".container",
    data: {
        selectAllCity: true,
        subMenuIdx: 0,
        subMenuList: [
            {name: 'Category1'},
            {name: 'Category2'},
            {name: 'Category3'}
        ],

        placeholder: 'Search products',
        iconGroup: [
            {
                folderSrc: 'images/icon_folder.png',
                folderAmount: 1
            },
            {
                folderSrc: 'images/icon_cart.png',
                folderAmount: 0
            }
        ],
        cityList: [
            {
                name:'All',
                id:1
            },
            {
                name:'서울',
                id:2
            },
            {
                name:'인천',
                id:3
            },
        ],
        placeList: [
            {
                name: 'All',
                id: 1
            },
            {
                name: '강동구',
                id: 2
            },
            {
                name: '강남구',
                id: 3
            }

        ],

        menuShow: false,
        perLineFive: false,
        currentIdx: 0,
        categoryBanner: [
            {
                iconMenu:'images/icon_item01.png',
                nameMenu:'Fastfood'
            },
            {
                iconMenu:'images/icon_item02.png',
                nameMenu:'FastfoodFastfood'
            },
            {
                iconMenu:'images/icon_item03.png',
                nameMenu:'Fastfood'
            },
            {
                iconMenu:'images/icon_item04.png',
                nameMenu:'Fastfood'
            },
            {
                iconMenu:'images/icon_item05.png',
                nameMenu:'Fastfood'
            },
            {
                iconMenu:'images/icon_item06.png',
                nameMenu:'FastfoodFastfood'
            },
        ],

        mainSwiper: [
            {swiperImg: 'images/img_main_banner01.png'},
            {swiperImg: 'images/img_main_banner02.png'},
            {swiperImg: 'images/img_main_banner03.png'}
        ],

        productMarkSrc: 'images/shape_yellow_label.png',
        RecommendTitle: 'Recommended products',
        recommendList: [
            {
                productImg: 'images/recommended_product01.png',
                brandName: 'Brand name',
                productName: 'product name',
                productDc: '50',
                priceBefore: '7000',
                priceAfter: '3500'
            },
            {
                productImg: 'images/recommended_product02.png',
                brandName: 'Brand name',
                productName: 'product name',
                productDc: '50',
                priceBefore: '7000',
                priceAfter: '3500'
            },
            {
                productImg: 'images/recommended_product02.png',
                brandName: 'Brand name',
                productName: 'product name',
                productDc: '50',
                priceBefore: '7000',
                priceAfter: '3500'
            },
            {
                productImg: 'images/recommended_product01.png',
                brandName: 'Brand name',
                productName: 'product name',
                productDc: '50',
                priceBefore: '7000',
                priceAfter: '3500'
            },


        ],

        adImg: 'images/img_sub_banner.png',

        ProductListTitle: 'Hit products',
        markText: 'HIT',
        layoutTypeTwo: false,
        productList: [
            {
                productHref: 'details.html',
                productImg: 'images/item_category_list01.png',
                productCategory: 'images/icon_item01.png',
                brandName: 'Brand name',
                productName: 'product name',
                productNotice: '100 remaining',
                priceDc: '50',
                priceBefore: '7000',
                priceAfter: '3500'
            },
            {
                productHref: 'details.html',
                productImg: 'images/item_category_list02.png',
                productCategory: 'images/icon_item01.png',
                brandName: 'Brand name',
                productName: 'product name',
                productNotice: '100 remaining',
                priceDc: '50',
                priceBefore: '7000',
                priceAfter: '3500'
            }
        ]
    },
    filters:{
        formatMoney:function(value,unit){
            unit = '₩';
            return parseInt(value).toLocaleString() + unit;
        }
    },
    mounted: function() {
        this.$nextTick(function() {

        })
    },
    methods: {
        cityIndex: function() {
            var cityId = event.target.value;
            if(cityId !=0) {
                this.selectAllCity = false
            }
        }
    }
});

var mySwiper = new Swiper ('.main_swiper',{
    autoplay: {
        delay: 4000
    },
    loop: true,
    pagination: {
        el: '.main_pagination'
    }
});

var recommendSwiper = new Swiper('.recommend_swiper',{
    // autoplay: {
    //     delay: 5000,
    // },
    loop: true,
    slidesPerView : 2,
    slidesPerGroup : 2,
    // spaceBetween : '10%',
    pagination: {
        el: '.recommend_pagination'
    }
});
