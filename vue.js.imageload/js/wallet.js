
Vue.use( image_load , {
    el : '.container'
});

var vm = new Vue({
    el: '.container',
    data: {
        //onReady:false,
        onReady:false,
    },
    created:function(){

    },
    mounted: function() {
        var that = this;
        that.$ImageLoad_Start();

        this.$nextTick(function() {
            this.onReady = !this.onReady;
        })
    },
    methods: {
        
    }

});
