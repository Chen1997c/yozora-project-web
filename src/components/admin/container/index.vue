<template>
  <div id="admin">
    <admin-header :showToggleBtn="showToggleBtn" @listclick="showSide = !showSide"/>
    <admin-content
      @hideside="showToggleBtn = null;showSide = false"
      :showSide="showSide"
      :mainSize="showSide == true ? 18 : 24"
    />
    <admin-footer/>
  </div>
</template>

<script>
import adminHeader from "@/components/admin/layout/header";
import adminContent from "@/components/admin/content/container";
import adminFooter from "@/components/home/footer";

export default {
  data() {
    return {
      showSide: true,
      showToggleBtn: true
    };
  },
  components: {
    adminHeader,
    adminContent,
    adminFooter
  }
};
</script>



