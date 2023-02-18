export { default as AboutMission } from '../..\\components\\AboutMission.vue'
export { default as BlogItem } from '../..\\components\\BlogItem.vue'
export { default as BlogItemStyleTwo } from '../..\\components\\BlogItemStyleTwo.vue'
export { default as BlogSidebar } from '../..\\components\\BlogSidebar.vue'
export { default as BlogWrapper } from '../..\\components\\BlogWrapper.vue'
export { default as Breadcrumb } from '../..\\components\\Breadcrumb.vue'
export { default as Confirmation } from '../..\\components\\Confirmation.vue'
export { default as ContactInfo } from '../..\\components\\ContactInfo.vue'
export { default as Login } from '../..\\components\\Login.vue'
export { default as MiniCart } from '../..\\components\\MiniCart.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as NewslettersPopup } from '../..\\components\\newslettersPopup.vue'
export { default as NewsletterStyleOne } from '../..\\components\\NewsletterStyleOne.vue'
export { default as OffCanvasMobileMenu } from '../..\\components\\OffCanvasMobileMenu.vue'
export { default as ProductDetailsDescriptionReview } from '../..\\components\\ProductDetailsDescriptionReview.vue'
export { default as QuickView } from '../..\\components\\QuickView.vue'
export { default as Register } from '../..\\components\\Register.vue'
export { default as RegisterContainer } from '../..\\components\\RegisterContainer.vue'
export { default as ResponsiveMobileMenu } from '../..\\components\\ResponsiveMobileMenu.vue'
export { default as SectionTitleWithSubTitle } from '../..\\components\\SectionTitleWithSubTitle.vue'
export { default as ShopSidebar } from '../..\\components\\ShopSidebar.vue'
export { default as TeamMembers } from '../..\\components\\TeamMembers.vue'
export { default as TestimonialOne } from '../..\\components\\TestimonialOne.vue'
export { default as TheFooter } from '../..\\components\\TheFooter.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as WelcomeMessage } from '../..\\components\\WelcomeMessage.vue'
export { default as HeroSliderThree } from '../..\\components\\hero\\HeroSliderThree.vue'
export { default as PolicyServicePolicy } from '../..\\components\\policy\\ServicePolicy.vue'
export { default as ProductDetailsWrapper } from '../..\\components\\product\\ProductDetailsWrapper.vue'
export { default as ProductGridItem } from '../..\\components\\product\\ProductGridItem.vue'
export { default as ProductWrapper } from '../..\\components\\product\\ProductWrapper.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
