var vm = new Vue({
   el: '.container',
   data: {
       navTitle: 'Fastfood',
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

       layoutTypeTwo:false,

       productImg: 'images/item_prudct_detail.png',
       markText: 'HIT',
       productMarkSrc: 'images/shape_yellow_label.png',
       productCategory: 'images/icon_item01.png',
       brandName: 'Brand name',
       productName: 'product name',
       productNotice: '100 remaining',
       priceAfter: '3500',

       subMenuIdx: 0,
       subMenuList: [
           {name: 'Category1'},
           {name: 'Category2'},
           {name: 'Category3'}
       ],
       btnContainerShow: false,

       selectedProduct: 'product name',
       selectProductList: [
           {
               name: 'product name',
               price: 3500,
               quantity: 143
           }
       ],
       pSelected:true,

       selectExposureList: [
           {
               selectedExposure: 'Selected product name exposure',
               allQuantity: 1,
               allPrice: 3500
           }
       ],

       totalPrice: 0,

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
        btnSelectProduct: function() {

            this.pSelected = !this.pSelected
            console.log(this.pSelected)
        },
        deleteSelected: function() {

        }
    }

});