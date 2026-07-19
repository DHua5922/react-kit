import { createContext } from "react";

interface DefaultValue {
  show?: boolean;
  onShow?: () => void;
  onHide?: () => void;
}

const ModalContext = createContext<DefaultValue>({
  show: false,
  onShow: () => {},
  onHide: () => {},
});

export default ModalContext;
