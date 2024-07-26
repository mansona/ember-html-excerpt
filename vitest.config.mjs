import { defineConfig, mergeConfig } from 'vitest/config';

const virtualModuleId = 'virtual:my-module'
const resolvedVirtualModuleId = '\0' + virtualModuleId

function microEmbroider() {
  return {
    resolveId(id) {
      if (['@ember/component/helper', '@ember/template'].includes(id)) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `
        export function helper() { console.log('noop')};
        export function htmlSafe(string) { return string };
        `
      }
    },
  }
}


export default defineConfig({
  plugins: [microEmbroider()],
  server: {
    desp: {
      external: []
    }
  }
})
