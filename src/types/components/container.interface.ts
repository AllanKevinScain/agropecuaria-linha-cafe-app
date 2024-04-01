import { ViewProps } from "react-native";

export interface ContainerInterface extends Pick<ViewProps, "className"> {
  children: React.ReactNode;
}
