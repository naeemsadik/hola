import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS } from "@/constants/theme";

export default function settings() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.pageHeaderContainer}>
        <Text style={styles.pageHeader}>Settings</Text>
      </View>
      
      <View style={styles.contentContainer}>
        {/* Account Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>user@example.com</Text>
            <TouchableOpacity style={styles.logoutButton}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Preferences Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Dark Mode</Text>
            <Switch
              trackColor={{ false: COLORS.secondary, true: COLORS.primary }}
              thumbColor={COLORS.white}
            />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Learning Language</Text>
            <Text style={[styles.settingText, { color: COLORS.secondary }]}>
              English
            </Text>
          </View>
        </View>

        {/* Notifications Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Daily Reminders</Text>
            <Switch
              trackColor={{ false: COLORS.secondary, true: COLORS.primary }}
              thumbColor={COLORS.white}
            />
          </View>
        </View>

        {/* Support Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Support</Text>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Privacy Policy</Text>
          </TouchableOpacity>
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>App Version 1.0.0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
  },
  pageHeaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: 80,
    marginBottom: 20,
  },
  pageHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  sectionCard: {
    backgroundColor: COLORS.background,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#888",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
  },
  settingText: {
    fontSize: 16,
    color: COLORS.white,
  },
  logoutButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  versionContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  versionText: {
    color: COLORS.white,
    opacity: 0.8,
  },
});