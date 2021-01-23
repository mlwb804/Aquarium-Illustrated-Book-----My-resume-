<template>
    <ul class="menu">
        <MenuItem
        v-for="(item, index) in items"
        :key="item.index"
        :to="item.tabLink"
        :class="activeClass == index ? 'active' : '' "
        class="list"
        @click.native="getItem(index)"
        >
        <a class="txt">
            {{ item.name }}
        </a>
        <ul class="submenu">
            <MenuItem
            v-for="(sub, index) in item.subItems"
            :key="sub.index"
            :to="sub.tabLink"
            @click.native="getItem(index)"
            >
            <a>
                {{ sub.name }}
            </a>
            </MenuItem>
        </ul>
        </MenuItem>
    </ul>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem.vue'
export default {
    props: ['items'],
    components:{
        MenuItem
    },
    data() {
        return {
            activeClass: -1,
            isswitch:false
        }
    },
    methods: {
        getItem(index) {
            this.activeClass = index;
            
            this.$emit('close', this.isswitch);
        }
    },
}
</script>

<style lang="scss" scoped>
    .menu{
        background-color: rgb(85, 172, 243);
        height: 300px;
        width: 100%;
        position: absolute;
        top: 80px;
        left: 0;
        z-index: 100;
        display: block;
        transition: .3s linear;
        transition-property: opacity;
        margin-left: 0;
        opacity: 0;
        z-index: -99;
        .list{
            .txt{
                display: block;
                padding:10px;
                margin: 0 10px 10px;
                color:#fff;
                font-size: 20px;
                text-align: left;
                font-size: 1rem;
                text-decoration: none;
                border-bottom: 1px solid #888;
                
            }
            .submenu{
                display: none;
                li{
                background-color: rgb(85, 172, 243);
            }
            }
        }
        .router-link-active{
            a{
                color:#ddd;
            }
        }
    }
    @media screen and (min-width: 869px) {
        .menu{
            position: static;
            transition: 0;
            display: flex;
            height: auto;
            width: auto;
            opacity: 1;
            z-index: 1;
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
                    line-height: 80px;
                    border-bottom: none;
                    position: relative;
                    &::after{
                        content:'';
                        width: 90%;
                        height: 2px;
                        background-color: #ccc;
                        position: absolute;
                        left: 10px;
                        top:90%;
                        opacity: 0;
                    }
                }
                .submenu{
                    display: block;
                }
            }
        }
    }
</style>