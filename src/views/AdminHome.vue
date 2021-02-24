<template>
    <div>
        <TheBanner title="新增文章"></TheBanner>
        <p>this is admin</p>
        <editor api-key="no-api-key"
        cloud-channel="5"
        initial-value="55"
        v-model="xxx"
        ></editor>
        <p>{{xxx}}</p>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
    data() {
        return {
            xxx:''
        }
    },
    components:{
        'editor':Editor
    }
}
</script>