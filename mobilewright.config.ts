import { defineConfig } from 'mobilewright';
import { join } from 'path';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  viewTree: 'on-failure',
  projects: [
    {
      name: 'ios',
      testMatch: 'tests/specs/*.ios.spec.ts',
      use: {
        platform: 'ios',
        bundleId: 'org.wdiodemoapp',
        deviceName: /iPhone 17/,
        installApps: join(process.cwd(), 'apps', 'ios', 'wdiodemoapp.zip'),
      }
    },
    {
      name: 'android',
      testMatch: 'tests/specs/*.android.spec.ts',
      use: {
        platform: 'android',
        bundleId: 'io.appium.android.apis',
        deviceName: /Pixel 7/,
        installApps: join(process.cwd(), 'apps', 'android', 'wdiodemoapp.apk'),
      }
    }
  ]
});
