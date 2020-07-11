<template>
  <CPopover>
    <CPopoverTrigger>
      <CButton>Set config</CButton>
    </CPopoverTrigger>
    <CPopoverContent zIndex={4}>
      <CPopoverArrow />
      <CPopoverCloseButton />
      <CPopoverHeader>Selecting report sections to display</CPopoverHeader>
      <CPopoverBody>
        <ReportConfig :report-config="reportConfig" name="Select all" @childChanged="childChanged" />
      </CPopoverBody>
    </CPopoverContent>
  </CPopover>
</template>

<script>
import { debounce } from 'lodash'
import {
  CButton,
  CPopover,
  CPopoverTrigger,
  CPopoverContent,
  CPopoverHeader,
  CPopoverBody,
  CPopoverArrow,
  CPopoverCloseButton
} from '@chakra-ui/vue'

import ReportConfig from './ReportConfig'

export default {
  name: 'PopoverTree',
  components: {
    CButton,
    CPopover,
    CPopoverTrigger,
    CPopoverContent,
    CPopoverHeader,
    CPopoverBody,
    CPopoverArrow,
    CPopoverCloseButton,
    ReportConfig
  },
  props: {
    reportConfig: Object
  },
  data() {
    return {
      reportConfigChange: () => {}
    }
  },
  created() {
    this.reportConfigChange = debounce(() => { console.log('regenerate', this.reportConfig) }, 2000)
  },
  methods: {
    childChanged() {
      this.reportConfigChange()
    },
    debounce
  }
}
</script>
