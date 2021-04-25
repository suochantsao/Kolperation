<template>
    <ul class="resultBlock contentBlock">
        <li class="resultItem">
            <fa-icon icon="utensils" class="icon " />
            <span class="caseTitle">{{caseItem.Title}}</span>
            <router-link to="/login">
                <span class="caseDescrip">合作詳情</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'trialItem',
    props:[
        'caseItem'
    ]
}
</script>