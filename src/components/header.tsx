import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { HeaderInterface } from "@/types";
import { Modal } from "./modal";
import { useState } from "react";

export function Header(props: HeaderInterface) {
  const { cartQuantityItems = 0 } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const hasCartItems = !!cartQuantityItems;

  return (
    <View className="flex-row border-b border-slate-700 pb-5 mx-5">
      <Modal isOpen={modalVisible} onClose={() => setModalVisible((s) => !s)} />
      <View className="flex-1 flex-col space-y-2">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalVisible((s) => !s)}
        >
          <Feather name="menu" color={colors.white} size={24} />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row gap-2" activeOpacity={0.7}>
          <Feather name="map-pin" color={colors.white} size={24} />
          <Text className="text-white text-xl font-heading mt-2">
            Rua Brasil 1920
          </Text>
        </TouchableOpacity>
      </View>
      {hasCartItems && (
        <Link href="/cart" asChild>
          <TouchableOpacity className="relative" activeOpacity={0.7}>
            <View className="absolute -top-2 z-10 -right-2 bg-lime-300 w-4 h-4 rounded-full justify-center items-center">
              <Text className="text-slate-900 font-bold text-xs">
                {cartQuantityItems}
              </Text>
            </View>
            <Feather name="shopping-bag" color={colors.white} size={24} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
