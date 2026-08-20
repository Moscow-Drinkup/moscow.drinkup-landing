type Unsubscribe = () => void;
export default function useMount(handler: () => Unsubscribe | void): void;
export {};
