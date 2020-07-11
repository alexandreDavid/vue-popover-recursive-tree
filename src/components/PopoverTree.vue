<template>
  <CPopover>
    <CPopoverTrigger>
      <CButton>Trigger</CButton>
    </CPopoverTrigger>
    <CPopoverContent zIndex={4}>
      <CPopoverArrow />
      <CPopoverCloseButton />
      <CPopoverHeader>Choosing PDF sections</CPopoverHeader>
      <CPopoverBody>
        <ReportConfig :report-config="reportConfig" name="Select all" @childChanged="childChanged" />
      </CPopoverBody>
    </CPopoverContent>
  </CPopover>
</template>

<script>
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
  methods: {
    childChanged() {
      console.log('changed', this.reportConfig)
    }
  }
}
</script>
