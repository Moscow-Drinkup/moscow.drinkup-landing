export default function useFocus(element?: HTMLElement): {
    hasFocus: boolean;
    setFocus: () => void;
    unsetFocus: () => void;
};
