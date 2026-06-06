import { defineConfig } from 'mobilewright';
import { join } from 'path';

export default defineConfig({
    testDir: './tests',
    reporter: 'html',
    viewTree: 'on-failure',
    projects: [
        {
            name: 'ios',
            testMatch: 'tests/specs/*.spec.ts',
            use: {
                platform: 'ios',
                bundleId: 'org.wdiodemoapp',
                deviceName: /iPhone 17/,
                installApps: join(process.cwd(), 'apps', 'ios', 'wdiodemoapp.zip'),
            }
        },
        {
            name: 'android',
            testMatch: 'tests/specs/*.spec.ts',
            timeout: 60_000,
            use: {
                platform: 'android',
                bundleId: 'com.wdiodemoapp',
                deviceName: /Pixel 7/,
                installApps: join(process.cwd(), 'apps', 'android', 'wdiodemoapp.apk')
            }
        }
    ]
});
