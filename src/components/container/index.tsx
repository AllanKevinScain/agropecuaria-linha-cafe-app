import { ContainerInterface } from "@/types";
import { View } from "react-native";

export const Container: React.FC<ContainerInterface> = (props) => {
  const { children } = props;
  return <View className="flex-1 pt-16">{children}</View>;
};
