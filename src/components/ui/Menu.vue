<template>
    <ul class="menu" v-show="showMenu">
        <li
        v-for="(item, index) in items"
        :key="index"
        class="list"
        @click.prevent="getItem(index);setCenter(index);routerToHeader(item)"
        @mouseover="setHover(index)"
        @mouseleave="outHover()"
        >
        <a class="txt"
        :style="{'color': (activeClass == index ? '#ddd' : '' )}">
            {{ item.name }}
        </a>
        <ul
        class="submenu"
        v-if="item.flag"
        :class=" [{subtoggle:selectIndex === index},{hov:hover === index}] "
        :style="{'top': (move == true ? '35px' : '' )}"
        >
            <li
            v-for="(sub, index) in item.subItems"
            :key="index"
            class="sub-list"
            @click.prevent="routerToHeader(sub)"
            >
                <a>
                    {{ sub.name }}
                </a>
            </li>
        </ul>
        </li>
    </ul>

</template>

<script>
export default {
    props: ['items', 'isswitch', 'move'],
    data() {
        return {
            activeClass: -1,
            selectIndex:null,
            hover: null,
            sub: false,
            toggleMenu:false,
        }
    },
    methods: {
        getItem(index) {
            this.activeClass = index;
            // this.$emit('close', this.isswitch);
        },
        setCenter(index){
            if(this.selectIndex === null){
                return this.selectIndex = index;
            } else{
                return this.selectIndex = null;
            };
        },
        routerToHeader(num){
            if(num.tabLink !== ''){
                this.$router.push({name: num.tabLink});
                this.$emit('close', this.isswitch);
            }
        },
        setHover(index) {
            this.hover = index;
        },
        outHover(){
            this.hover = null
        },
    },
    computed:{
        showMenu(){
            if(document.body.clientWidth > 870){
                return this.toggleMenu = true;
            } else{
                return this.toggleMenu = this.isswitch;
            }
        },
    },

}
</script>

<style lang="scss" scoped>
    .menu{
        background-color: rgb(85, 172, 243);
        height: 200px;
        width: 100%;
        position: absolute;
        top: 110px;
        left: 0;
        z-index: 100;
        margin-left: 0;
        .list{
            cursor: pointer;
            .txt{
                display: block;
                padding:10px;
                margin: 0 10px 10px;
                color:#fff;
                text-align: left;
                font-size: 1rem;
                text-decoration: none;
                border-bottom: 1px solid #888;
                
            }
            .submenu{
                padding: .5rem;
                background-color: rgb(85, 172, 243);
                position: absolute;
                display: none;
                width: 100%;
                .sub-list{
                    background-color: #fff;
                    text-align: left;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(138, 138, 138, .2);
                    a{
                        color: #888888;
                        padding-left: 1rem;
                        text-decoration: none;
                    }
            }
            }
            .subtoggle{
                display: block;
                z-index: 103;
        }
        }
    }
    @media screen and (min-width: 869px) {
        .menu{
            position: relative;
            height: auto;
            width: auto;
            top: 0;
            opacity: 1;
            z-index: 1;
            display: flex;
            margin: auto 0;
            .list{
                &:hover{
                    .txt{
                        color:#ccc;
                        transition: .3s;
                        &::after{
                            opacity: 1;
                            transition: .3s;
                        }
                    }
                }
                .txt{
                    display: inline;
                    font-size: 1.3rem;
                    border-bottom: none;
                    position: relative;
                    &::after{
                        content:'';
                        width: 90%;
                        height: 1px;
                        background-color: #ccc;
                        position: absolute;
                        left: 10px;
                        top:92%;
                        opacity: 0;
                    }
                }
                .hov{
                    display: block;
                    z-index: 3;
                }
                .submenu{
                    right: 110px;
                    background-color: #fff;
                    width: 150px;
                    top: 50px;
                    right: 5px;
                    padding: 0;
                    border-radius: 15px;
                    .sub-list{
                        border-radius: 15px;
                        &:hover {
                            background-color: rgb(42, 217, 240);
                            a{
                                color:#fff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>