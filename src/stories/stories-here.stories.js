import Vue from 'vue';
import PopoverTree from '../components/PopoverTree'
import Chakra, { CThemeProvider, CReset, theme } from '@chakra-ui/vue'

Vue.use(Chakra)

export default { title: "Exercise Component" };

const reportConfig = {
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

export const Basic = () => ({
  components: { PopoverTree, CThemeProvider, CReset },
  data() {
    return {
      reportConfig,
      theme
    }
  },
  template: `
    <CThemeProvider :theme="theme">
      <CReset />
      <PopoverTree :report-config="reportConfig" />
    </CThemeProvider>`
});