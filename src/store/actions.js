import * as mutations from "./mutation-types"

export default {
  showMember(context, member){
    // manggil mutations
    context.commit(mutations.SHOW_MEMBER, member)
  }
}