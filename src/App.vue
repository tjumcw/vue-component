<template>
    <router-view/>
</template>

<!--加防抖，防止vue3视图变换时报错-->
<script>
import {defineComponent} from "vue";

export default defineComponent({
    setup() {
        const debounce = function (callback, delay) {
            let tid;
            return function (...args) {
                const ctx = this;
                tid && clearTimeout(tid);
                tid = setTimeout(() => {
                    callback.apply(ctx, args);
                }, delay);
            };
        };

        const _ = window.ResizeObserver;
        window.ResizeObserver = class ResizeObserver extends _ {
            constructor(callback) {
                callback = debounce(callback, 5);
                super(callback);
            }
        };
    },
});
</script>

<style lang="scss"></style>
