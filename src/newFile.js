import navbar from './components/navbar_white.vue';
import Footer from './components/footer.vue';
import { useNewsStore } from './store.js';

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const newsStore = useNewsStore();
setup(props, { root }); {
const newsId = root.$route.params.id;
}

const __VLS_componentsOption = {};

let __VLS_name!: 'SingleNews';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'navbar'?: boolean; } &
{ 'mini_hero'?: boolean; } &
{ 'mini_hero'?: boolean; } &
{ 'statut'?: boolean; } &
{ 'status-wrapper'?: boolean; } &
{ 'status-wrapper'?: boolean; } &
{ 'chapter'?: boolean; } &
{ 'chapter'?: boolean; } &
{ 'mini_hero'?: boolean; } &
{ 'contact'?: boolean; } &
{ 'contact-sec'?: boolean; } &
{ 'mini_hero'?: boolean; } &
{ 'mini_hero'?: boolean; } &
{ 'statut'?: boolean; } &
{ 'status-wrapper'?: boolean; } &
{ 'paragraph'?: boolean; } &
{ 'statut'?: boolean; } &
{ 'status-wrapper'?: boolean; } &
{ 'mini_hero'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'navbar', typeof __VLS_localComponents, "Navbar", "navbar", "navbar"> &
__VLS_WithComponent<'Footer', typeof __VLS_localComponents, "Footer", "Footer", "Footer">;
__VLS_components.Navbar; __VLS_components.navbar;
// @ts-ignore
[navbar,];
__VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section;
__VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h6; __VLS_intrinsicElements.h6;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_components.Footer;
// @ts-ignore
[Footer,];
{
const __VLS_0 = ({} as 'Navbar' extends keyof typeof __VLS_ctx ? { 'navbar': typeof __VLS_ctx.Navbar; } : 'navbar' extends keyof typeof __VLS_ctx ? { 'navbar': typeof __VLS_ctx.navbar; } : typeof __VLS_resolvedLocalAndGlobalComponents).navbar;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, kontakt1: ("1"), class: (".navbar"), }));
({} as { navbar: typeof __VLS_0; }).navbar;
const __VLS_2 = __VLS_1({ ...{}, kontakt1: ("1"), class: (".navbar"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, kontakt1: ("1"), class: (".navbar"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = __VLS_intrinsicElements["section"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("mini_hero"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("mini_hero"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["h4"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("status-wrapper"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("status-wrapper"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["section"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("statut"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("statut"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("chapter"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("chapter"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["h6"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
(__VLS_33.slots!).default;
}
{
const __VLS_35 = __VLS_intrinsicElements["div"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
const __VLS_40 = __VLS_intrinsicElements["h2"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(__VLS_ctx.newsStore.getNewsById(__VLS_ctx.newsId));
(__VLS_43.slots!).default;
}
(__VLS_38.slots!).default;
}
(__VLS_28.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
{
const __VLS_45 = ({} as 'Footer' extends keyof typeof __VLS_ctx ? { 'Footer': typeof __VLS_ctx.Footer; } : typeof __VLS_resolvedLocalAndGlobalComponents).Footer;
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, }));
({} as { Footer: typeof __VLS_45; }).Footer;
const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses[".navbar"];
__VLS_styleScopedClasses["mini_hero"];
__VLS_styleScopedClasses["status-wrapper"];
__VLS_styleScopedClasses["statut"];
__VLS_styleScopedClasses["chapter"];
}
var __VLS_slots!: {};
// @ts-ignore
[newsStore, newsId,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
navbar: navbar as typeof navbar,
Footer: Footer as typeof Footer,
newsStore: newsStore as typeof newsStore,
};
},

setup(props, { root }) {
const newsId = root.$route.params.id;
},
});
return (await import('vue')).defineComponent({
setup() {
return {};
},

setup(props, { root }) {
const newsId = root.$route.params.id;
},
});
})();
