import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
  style?: object;
  dropdownStyle?: object;
  itemStyle?: object;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onSelect,
  style,
  dropdownStyle,
  itemStyle,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.wrapper, style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOpen((prev) => !prev)}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>{selected}</Text>
        <Ionicons name="chevron-down-outline" size={15} />
      </TouchableOpacity>
      {open && (
        <>
          <TouchableWithoutFeedback onPress={() => setOpen(false)}>
            <View style={StyleSheet.absoluteFill} pointerEvents="box-none" />
          </TouchableWithoutFeedback>
          <View style={[styles.dropdown, dropdownStyle]}>
            {options.map((item) => (
              <TouchableOpacity
                key={item}
                style={[styles.item, itemStyle]}
                onPress={() => {
                  onSelect(item);
                  setOpen(false);
                }}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minWidth: 100,
    maxWidth: 150,
  },
  button: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonText: {
    fontSize: 14,
    color: "#333",
  },
  dropdown: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    zIndex: 9999, // Increased z-index
    elevation: 10, // Also increase elevation for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  itemText: {
    fontSize: 14,
    color: "#333",
  },
});

export default Dropdown;
