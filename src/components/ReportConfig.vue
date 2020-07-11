<template>
  <CBox>
    <CCheckbox
      :is-checked="isChecked"
      :is-indeterminate="isIndeterminate"
      @change="onChange" />
      {{ formattedName }}
    <CStack pl="6" mt="1" spacing="1" v-if="childrenKeys.length">
      <reportConfig
        v-for="key in childrenKeys"
        :key="key"
        :report-config="reportConfig.children[key]"
        :name="key"
        @childChanged="childChanged" />
    </CStack>
  </CBox>
</template>

<script>
import { startCase } from 'lodash'
import {
  CBox,
  CCheckbox,
  CStack
} from '@chakra-ui/vue'

export default {
  name: 'ReportConfig',
  components: {
    CBox,
    CCheckbox,
    CStack
  },
  props: {
    reportConfig: Object,
    name: String
  },
  data() {
    return {
      isIndeterminate: false,
      childrenKeys: [],
      formattedName: ''
    }
  },
  computed: {
    isChecked: {
      get() {
        const val = this.reportConfig.enabled
        this.childrenKeys.forEach(key => this.reportConfig.children[key].enabled = val)
        return val
      },
      set(val) {
        this.isIndeterminate = false
        this.reportConfig.enabled = val
      }
    }
  },
  mounted () {
    this.isChecked = this.reportConfig.enabled
    this.formattedName = startCase(this.name)
    if (this.reportConfig.children) {
      this.childrenKeys = Object.keys(this.reportConfig.children)
    }
  },
  methods: {
    onChange (_, $e) {
      this.isChecked = $e.target.checked
      this.$emit('childChanged', this.isChecked)
    },
    childChanged (val) {
      if (!val || !this.isChecked) {
        this.isIndeterminate = true
        this.$emit('childChanged', val)
      }
    }
  }
}
</script>
