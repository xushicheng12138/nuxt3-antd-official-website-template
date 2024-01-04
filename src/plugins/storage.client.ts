export default defineNuxtPlugin(() => {
  const storage = {
    set(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    get(key: string) {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : null
    },
    remove(key: string) {
      localStorage.removeItem(key)
    },
    clear() {
      localStorage.clear()
    }
  }
  return {
    provide: {
      storage: storage
    }
  }
})