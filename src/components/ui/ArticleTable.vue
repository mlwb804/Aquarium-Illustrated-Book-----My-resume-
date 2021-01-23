<template>
    <table>
        <tbody>
            <tr v-if="articles.englishName.length">
                <td class="tit">英文名</td>
                <td class="content"> {{ articles.englishName }} </td>
            </tr>
            <tr v-if="articles.CScientificName.length">
                <td class="tit">中文學名</td>
                <td class="content"> {{ articles.CScientificName }} </td>
            </tr>
            <tr v-if="articles.EScientificName.length">
                <td class="tit">英文學名</td>
                <td class="content"> {{ articles.EScientificName }} </td>
            </tr>
            <tr v-if="articles.id.length">
                <td class="tit">中文俗名</td>
                <td class="content"> {{ articles.id }} </td>
            </tr>
            <tr v-if="articles.variety.length">
                <td class="tit">雜交品種</td>
                <td class="content"> {{ articles.variety }} </td>
            </tr>
            <tr v-if="articles.distribution.length">
                <td class="tit">分佈地</td>
                <td class="content"> {{ articles.distribution }} </td>
            </tr>
            <tr v-if="articles.supply.length">
                <td class="tit">供應來源</td>
                <td class="content"> {{ articles.supply }} </td>
            </tr>
            <tr v-if="articles.bodyLength.length">
                <td class="tit">體長</td>
                <td class="content"> {{ articles.bodyLength }} </td>
            </tr>
            <tr v-if="articles.waterCondition.length">
                <td class="tit">適應水質條件</td>
                <td class="content"> {{ articles.waterCondition }} </td>
            </tr>
            <tr v-if="articles.feeding.length">
                <td class="tit">食性</td>
                <td class="content"> {{ articles.feeding }} </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props:['articles'],
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
    table{
        margin: 1rem auto;
        tbody{
            tr{
                text-align: left;
                color: #666666;
                border-bottom: 1px solid #e8e8e8;
                line-height: 1.5;
                .tit{
                    width: 30%;
                    padding: 1rem 0 1rem 1rem;
                }
                .content{
                    padding: 1rem;
                }
            }
        }
    }
</style>