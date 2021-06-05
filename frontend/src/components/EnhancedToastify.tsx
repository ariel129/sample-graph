import React from "react";
import { toast } from "react-toastify";

export const EnhancedToastify = (type: string, message: string) => {
  const getMessage = <p>{message}</p>;

  if (type === "info") return toast.info(getMessage);
  if (type === "warning") return toast.warning(getMessage);
  if (type === "success") return toast.success(getMessage);
  if (type === "error") return toast.error(getMessage);

  return toast.warning(getMessage);
};
