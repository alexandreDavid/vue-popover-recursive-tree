<template>
  <PopoverTree :report-config="reportConfig" />
</template>

<script>
import PopoverTree from '@/components/PopoverTree'

export default {
  name: 'App',
  components: {
    PopoverTree
  },
  data () {
    return {
      reportConfig: {
        "enabled": true,
        "children": {
          "coverPage": { "enabled": true },
          "summary": { "enabled": true },
          "anomalyDefinitions": { "enabled": true },
          "missionReport": {
            "enabled": true,
            "children": {
              "missionDescription": { "enabled": true },
              "missionCustomerInfo": { "enabled": true }
            }
          }
        }
      }
    }
  }
}
</script>
