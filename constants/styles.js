import { StyleSheet } from "react-native";
import { COLORS } from "./theme";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const indexStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flexGrow: 1,
    gap: 8,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageHeaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    width: windowWidth,
    height: 80,
    padding: 16,
    marginBottom: 24,
  },
  pageHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
  },
  card: {
    flexDirection: "column",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 10,
    shadowColor: "#888",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    height: windowWidth - 20,
    width: windowWidth - 20,
    backgroundColor: COLORS.background,
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardHeader: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
  },
  cardAnswer: {
    padding: 20,
    color: COLORS.white,
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    maxWidth: 300,
    alignSelf: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    padding: 8,
    borderRadius: 10,
    width: 80,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },
  progressText: {
    color: COLORS.white,
    marginTop: 8,
    fontSize: 14,
  },
  progressBar: {
    height: 4,
    width: '80%',
    backgroundColor: COLORS.secondary,
    marginTop: 12,
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 2,
  },
  cardBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backfaceVisibility: 'hidden',
  },
  cardSubheader: {
    color: COLORS.secondary,
    fontSize: 18,
    marginVertical: 8,
  },
  hintText: {
    color: COLORS.secondary,
    fontSize: 14,
    marginTop: 16,
    fontStyle: 'italic',
  },
  exampleContainer: {
    marginTop: 20,
    padding: 12,
    backgroundColor: COLORS.primary + '40',
    borderRadius: 8,
  },
  exampleText: {
    color: COLORS.white,
    fontSize: 16,
    fontStyle: 'italic',
  },
  exampleTranslation: {
    color: COLORS.secondary,
    fontSize: 14,
    marginTop: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 24,
  },
  iconButton: {
    alignItems: 'center',
    gap: 4,
  },
  iconButtonText: {
    color: COLORS.secondary,
    fontSize: 12,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    gap: 8,
  },
  prevButton: {
    backgroundColor: COLORS.secondary,
  },
  nextButton: {
    backgroundColor: COLORS.primary,
  },
  navButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  audioIcon: {
    marginVertical: 16,
  },
});