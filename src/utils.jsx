import { toast } from "sonner";
import { AppToast } from "./components/AppToast";

export function notify(type, message) {
  toast.custom(() => (
    <AppToast type={type} message={message} />
  ));
}