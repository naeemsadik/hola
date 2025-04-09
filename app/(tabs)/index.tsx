import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { indexStyles as styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { cardData, cardDataReady } from "@/constants/cardData";

export default function Index() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(1);
  const [totalCards, setTotalCards] = useState(0);
  const [loading, setLoading] = useState(true);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    // Wait for `cardData` to be populated
    cardDataReady
      .then(() => {
        if (isMounted) {
          setTotalCards(cardData.length);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error loading flashcards:", error);
      });

    return () => {
      isMounted = false; // Cleanup to prevent state updates after unmount
    };
  }, []);

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

  const handleRetry = () => {
    setIsFlipped(false);
    flipAnimation.setValue(0);
  };

  const handleNextCard = () => {
    if (currentCard < totalCards) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
      flipAnimation.setValue(0);
    }
  };

  const handlePrevCard = () => {
    if (currentCard > 1) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
      flipAnimation.setValue(0);
    }
  };

  const currentCardData = cardData.find((card) => card.id === currentCard) || cardData[0];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Loading flashcards...</Text>
      </View>
    );
  }

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
              <Text style={styles.cardHeader}>{currentCardData.front}</Text>
              <Text style={styles.cardAnswer}>{currentCardData.explanation}</Text>
              <Text style={styles.cardSubheader}>{currentCardData.hint}</Text>
              {!isFlipped && (
                <Text style={styles.hintText}>Tap to see translation</Text>
              )}
            </View>
          </Animated.View>

          <Animated.View
            style={[styles.card, backAnimatedStyle, styles.cardBack]}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardHeader}>{currentCardData.back}</Text>
              <Text style={styles.cardAnswer}>{currentCardData.spanishExplanation}</Text>
              <View style={styles.exampleContainer}>
                <Text style={styles.exampleText}>
                  "{currentCardData.example}"
                </Text>
                <Text style={styles.exampleTranslation}>
                  "{currentCardData.exampleTranslation}"
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

          <TouchableOpacity style={styles.iconButton} onPress={handleRetry}>
            <Ionicons name="repeat" size={24} color={COLORS.secondary} />
            <Text style={styles.iconButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Controls */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.navButton, styles.prevButton]}
            onPress={handlePrevCard}
          >
            <Ionicons name="chevron-back" size={24} color={COLORS.white} />
            <Text style={styles.navButtonText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navButton, styles.nextButton]}
            onPress={handleNextCard}
          >
            <Text style={styles.navButtonText}>Next</Text>
            <Ionicons name="chevron-forward" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}