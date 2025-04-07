import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import React, { useState, useRef } from "react";
import { indexStyles as styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export default function Index() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(1);
  const [totalCards] = useState(50);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    Animated.timing(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header Section */}
      <View style={styles.pageHeaderContainer}>
        <Text style={styles.pageHeader}>Spanish Vocabulary</Text>
        <Text style={styles.progressText}>
          Card {currentCard} of {totalCards}
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(currentCard / totalCards) * 100}%` },
            ]}
          />
        </View>
      </View>

      <View style={styles.container}>
        {/* Flashcard Section */}
        <TouchableOpacity activeOpacity={0.9} onPress={flipCard}>
          <Animated.View style={[styles.card, frontAnimatedStyle]}>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeader}>Library</Text>
              <Ionicons
                name="volume-high"
                size={32}
                color={COLORS.white}
                style={styles.audioIcon}
              />
              <Text style={styles.cardSubheader}>Noun</Text>
              {!isFlipped && (
                <Text style={styles.hintText}>Tap to see translation</Text>
              )}
            </View>
          </Animated.View>

          <Animated.View
            style={[styles.card, backAnimatedStyle, styles.cardBack]}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardHeader}>La biblioteca</Text>
              <Text style={styles.cardAnswer}>
                Un lugar donde se guardan libros y materiales educativos
              </Text>
              <View style={styles.exampleContainer}>
                <Text style={styles.exampleText}>
                  "Voy a la biblioteca para estudiar."
                </Text>
                <Text style={styles.exampleTranslation}>
                  "I go to the library to study."
                </Text>
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="bookmark" size={24} color={COLORS.secondary} />
            <Text style={styles.iconButtonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="flag" size={24} color={COLORS.secondary} />
            <Text style={styles.iconButtonText}>Report</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="repeat" size={24} color={COLORS.secondary} />
            <Text style={styles.iconButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Controls */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.navButton, styles.prevButton]}
            onPress={() => setCurrentCard(Math.max(1, currentCard - 1))}
          >
            <Ionicons name="chevron-back" size={24} color={COLORS.white} />
            <Text style={styles.navButtonText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navButton, styles.nextButton]}
            onPress={() =>
              setCurrentCard(Math.min(totalCards, currentCard + 1))
            }
          >
            <Text style={styles.navButtonText}>Next</Text>
            <Ionicons name="chevron-forward" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
