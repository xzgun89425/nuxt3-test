export function useAddCount() {
    const count = ref(12);
    return { count };
}

export function useAdd(a, b) {
    const ans = a + b;
    return { ans };
}