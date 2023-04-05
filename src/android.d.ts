declare module 'android' {
  global {
    interface Window {
      RN_PLATFORM?: 'android' | 'ios';
    }
  }
}
