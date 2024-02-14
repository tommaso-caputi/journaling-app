import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.deardairy',
  appName: 'DearDiary',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
